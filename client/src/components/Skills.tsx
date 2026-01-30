/**
 * Skills Section Component
 * Design: Modern Minimalist - Grid layout with skill badges
 * Features: Categorized technologies, clean badges with emerald accent
 */

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'CSS Module', 'JavaScript', 'TypeScript', 'ReactJS', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'C#'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Other',
    skills: ['Git', 'REST API', 'Responsive Design'],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kỹ Năng & Công Nghệ
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-amber-700 font-medium text-sm border border-amber-200 hover:bg-amber-50 transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="mt-20 relative">
          <img
            src="/images/skills-bg.png"
            alt="Skills background"
            className="w-full h-32 object-cover rounded-lg opacity-30"
          />
        </div>
      </div>
    </section>
  );
}
