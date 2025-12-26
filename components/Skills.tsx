import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Skill } from '../types';
import BlurText from './BlurText';
import skillsData from '../data/skills.json';

const Skills: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const skills: Skill[] = skillsData.skills;

  return (
    <section id="skills" className="py-24 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <BlurText
            text={skillsData.title}
            animateBy="words"
            direction="top"
            delay={80}
            className="text-3xl md:text-5xl font-bold text-white mb-6 justify-center"
          />
          <div className="h-1 w-20 bg-white rounded-full"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-[1600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl hover:bg-white/5 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(88,28,135,0.55)] hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-400">
                     <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
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