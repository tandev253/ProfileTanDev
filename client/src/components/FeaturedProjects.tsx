/**
 * Featured Projects Section Component
 * Design: Modern Minimalist - Showcase top 3 projects with larger cards
 * Features: Large project cards with images, descriptions, tech stack
 */

import { ArrowRight } from 'lucide-react';

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  link?: string;
  featured: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Nền tảng thương mại điện tử hiện đại',
    longDescription: 'Xây dựng một nền tảng thương mại điện tử đầy đủ tính năng với hệ thống quản lý sản phẩm, giỏ hàng thông minh, thanh toán an toàn, và dashboard quản trị. Tích hợp Stripe để xử lý thanh toán và Firebase để quản lý dữ liệu real-time.',
    technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Task Manager',
    description: 'Ứng dụng quản lý công việc di động',
    longDescription: 'Phát triển ứng dụng mobile đa nền tảng cho phép người dùng quản lý công việc hàng ngày, đặt nhắc nhở, và cộng tác với đội nhóm. Hỗ trợ đồng bộ hóa real-time giữa các thiết bị và thông báo thông minh.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Real-time Chat Application',
    description: 'Ứng dụng chat web với tính năng nâng cao',
    longDescription: 'Tạo một ứng dụng chat web hiệu suất cao với hỗ trợ nhóm, tìm kiếm tin nhắn, chia sẻ file, và ghi âm tin nhắn. Sử dụng WebSocket để đảm bảo truyền thông real-time và PostgreSQL cho lưu trữ dữ liệu bền vững.',
    technologies: ['Next.js', 'WebSocket', 'PostgreSQL', 'TypeScript'],
    link: '#',
    featured: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Dự Án Nổi Bật
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Các Dự Án Tiêu Biểu
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Những dự án mà tôi tự hào nhất, thể hiện kỹ năng và sáng tạo trong phát triển phần mềm
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-xl border border-amber-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700/10 to-amber-600/10 group-hover:from-amber-700/20 group-hover:to-amber-600/20 transition-colors"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-amber-700/20 group-hover:text-amber-700/30 transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-amber-700 text-sm font-semibold mt-2">Featured Project</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm font-medium">
                  {project.description}
                </p>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 group/link transition-colors"
                  >
                    Xem Chi Tiết
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            Xem Tất Cả Dự Án
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
