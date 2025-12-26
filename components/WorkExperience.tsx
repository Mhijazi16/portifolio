import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types';
import BlurText from './BlurText';
import Modal from './Modal';
import experienceData from '../data/experience.json';

const WorkExperience: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [selectedWork, setSelectedWork] = useState<Project | null>(null);
  const workExperiences: Project[] = experienceData.experiences;

  return (
    <section id="work" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <BlurText
            text={experienceData.title}
            animateBy="letters"
            direction="top"
            delay={50}
            className="text-3xl md:text-5xl font-bold text-white mb-4 justify-center"
          />
          <p className="text-neutral-400 max-w-xl mx-auto">
            {experienceData.description}
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workExperiences.map((work, index) => (
            <div 
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className={`group relative rounded-3xl overflow-hidden bg-neutral-900/90 border border-white/5 transition-all duration-[1400ms] cursor-pointer group-hover:-translate-y-3 group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.85)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {work.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-neutral-100 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                  <p className="text-neutral-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedWork} 
        onClose={() => setSelectedWork(null)}
        title={selectedWork?.title || ''}
      >
        <div className="space-y-6">
          <img 
            src={selectedWork?.image} 
            alt={selectedWork?.title} 
            className="w-full h-64 object-cover rounded-xl border border-white/10"
          />
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Role & Responsibilities</h4>
            <p className="text-neutral-300 leading-relaxed">
              {selectedWork?.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {selectedWork?.tags.map(tag => (
                <span key={tag} className="text-sm text-white bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Delivered features ahead of schedule</li>
              <li>Reduced bug reports by 15% through improved testing</li>
              <li>Collaborated with cross-functional teams to define product requirements</li>
            </ul>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default WorkExperience;
