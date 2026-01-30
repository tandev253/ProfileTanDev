/**
 * Contact Section Component
 * Design: Modern Minimalist - Clean contact form with social links
 * Features: Email form, social media links, professional footer
 */

import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple form handling - in production, this would send to a backend
    if (email && message) {
      setSubmitted(true);
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Liên Hệ Tôi
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto"></div>
          <p className="text-gray-600 text-lg mt-6">
            Tôi luôn sẵn sàng nghe về các dự án mới và cơ hội hợp tác.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Tin Nhắn
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nội dung tin nhắn của bạn..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors duration-200"
            >
              Gửi Tin Nhắn
            </button>

            {submitted && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-sm font-medium">
                ✓ Cảm ơn! Tôi sẽ liên hệ với bạn sớm.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Thông Tin Liên Hệ
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:your@email.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                      your@email.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Kết Nối Với Tôi
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-600 hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-600 hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-600 hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="Message"
                >
                  <MessageSquare className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
