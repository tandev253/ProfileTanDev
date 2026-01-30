/**
 * About Section Component
 * Design: Modern Minimalist - Asymmetric layout with image and text
 * Features: Professional bio, tech illustration, clear typography
 */

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/images/tech-illustration.png"
              alt="Developer illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Về Tôi
              </h2>
              <div className="w-12 h-1 bg-amber-700"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Tôi là một lập trình viên đam mê với kinh nghiệm phát triển các ứng dụng web, mobile và desktop. Với sự hiểu biết sâu sắc về nhiều ngôn ngữ lập trình và framework, tôi luôn sẵn sàng giải quyết các thách thức công nghệ phức tạp.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Tôi tin rằng code không chỉ là về chức năng mà còn về việc tạo ra trải nghiệm người dùng tuyệt vời. Mỗi dự án đều là cơ hội để học hỏi và cải thiện kỹ năng của mình.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chuyên Môn:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold mt-1">✓</span>
                  <span>Phát triển Web với ReactJS, Next.js và Node.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold mt-1">✓</span>
                  <span>Xây dựng ứng dụng Mobile với React Native</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold mt-1">✓</span>
                  <span>Phát triển Desktop Applications với Java và C#</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-700 font-bold mt-1">✓</span>
                  <span>Thiết kế Responsive UI/UX với CSS và Tailwind CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
