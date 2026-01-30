import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Paths
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const CLIENT_ROOT = path.join(PROJECT_ROOT, "client");
const DIST_ROOT = path.join(PROJECT_ROOT, "dist"); // ✅ build thẳng ra dist
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");

// =============================================================================
// Manus Debug Collector (DEV ONLY)
// =============================================================================

const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string) {
  try {
    if (!fs.existsSync(logPath)) return;
    if (fs.statSync(logPath).size <= MAX_LOG_SIZE_BYTES) return;

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const kept: string[] = [];
    let size = 0;

    for (let i = lines.length - 1; i >= 0; i--) {
      const bytes = Buffer.byteLength(lines[i] + "\n", "utf-8");
      if (size + bytes > TRIM_TARGET_BYTES) break;
      kept.unshift(lines[i]);
      size += bytes;
    }

    fs.writeFileSync(logPath, kept.join("\n"), "utf-8");
  } catch {
    /* ignore */
  }
}

function writeToLog(source: LogSource, entries: unknown[]) {
  if (!entries?.length) return;

  ensureLogDir();
  const file = path.join(LOG_DIR, `${source}.log`);

  const lines = entries.map(
    (e) => `[${new Date().toISOString()}] ${JSON.stringify(e)}`
  );

  fs.appendFileSync(file, lines.join("\n") + "\n", "utf-8");
  trimLogFile(file);
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;

      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";
        req.on("data", (c) => (body += c.toString()));
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            writeToLog("browserConsole", payload.consoleLogs);
            writeToLog("networkRequests", payload.networkRequests);
            writeToLog("sessionReplay", payload.sessionEvents);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

// =============================================================================
// Vite Config
// =============================================================================

export default defineConfig({
  // ✅ Dùng domain riêng: https://tandev.id.vn
  base: "/",

  root: CLIENT_ROOT,
  envDir: PROJECT_ROOT,

  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(CLIENT_ROOT, "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

  build: {
    outDir: DIST_ROOT, // ✅ index.html nằm ở dist/
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
    strictPort: false,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
