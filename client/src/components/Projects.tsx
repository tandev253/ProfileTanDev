/**
 * Projects Section Component
 * Design: Modern Minimalist - Card-based layout with project showcase
 * Features: Project cards with descriptions, tech stack, and links
 */

import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Nền tảng thương mại điện tử hiện đại với tính năng tìm kiếm nâng cao, giỏ hàng và thanh toán an toàn.',
    technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'Mobile Task Manager',
    description: 'Ứng dụng quản lý công việc cho mobile với đồng bộ hóa real-time và thông báo thông minh.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    id: '3',
    title: 'Desktop Analytics Tool',
    description: 'Công cụ phân tích dữ liệu desktop với visualizations mạnh mẽ và export reports.',
    technologies: ['C#', 'WPF', 'Python'],
    link: '#',
    github: '#',
  },
  {
    id: '4',
    title: 'Real-time Chat Application',
    description: 'Ứng dụng chat web với hỗ trợ nhóm, tìm kiếm tin nhắn và tính năng chia sẻ file.',
    technologies: ['Next.js', 'WebSocket', 'PostgreSQL', 'TypeScript'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dự Án Tiêu Biểu
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors"
                >
                    Xem Dự Án
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                  >
                    GitHub
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
