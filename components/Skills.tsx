import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Skill } from '../types';

const skills: Skill[] = [
  { category: "Backend & APIs", items: ["FastAPI", "Python", "REST APIs", "PostgreSQL", "Redis"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
  { category: "AI & Agents", items: ["LangChain", "LangGraph", "Generative AI", "LLM Orchestration"] },
  { category: "Systems", items: ["C++", "Linux", "Docker", "CI/CD"] },
];

const Skills: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-400">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;