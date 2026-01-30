/**
 * Hero Section Component
 * Design: Modern Minimalist - Clean, professional introduction with emerald accent
 * Features: Large typography, subtle background, CTA button
 */

import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-bg.png"
          alt="Background decoration"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Tan Dev
              <span className="block text-amber-700">Lập Trình Viên Đa Nền Tảng</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Chuyên phát triển Web, Mobile và Desktop Applications
            </p>
          </div>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Với kinh nghiệm trong HTML, Node.js, ReactJS, React Native, Java, C#, Python, JavaScript, TypeScript, Next.js và CSS, tôi tạo ra các giải pháp công nghệ hiệu quả và đẹp mắt.
          </p>

          {/* CTA Button */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              Liên Hệ Ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-amber-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
