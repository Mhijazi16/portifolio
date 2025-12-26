import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types';
import BlurText from './BlurText';
import Modal from './Modal';

const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'A high-performance real-time analytics dashboard processing millions of events per second. Built with React and Go.',
    tags: ['React', 'Go', 'WebSockets', 'D3.js'],
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'EcoTrack Mobile',
    description: 'Award-winning mobile application helping users track their carbon footprint with AI-powered suggestions.',
    tags: ['React Native', 'TensorFlow', 'Node.js'],
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Aether Code Assistant',
    description: 'An intelligent IDE plugin providing real-time code optimization suggestions using Gemini LLMs.',
    tags: ['TypeScript', 'Gemini API', 'VS Code'],
    image: 'https://picsum.photos/800/600?random=3'
  }
];

const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <BlurText
            text="Personal Projects"
            animateBy="letters"
            direction="top"
            delay={50}
            className="text-3xl md:text-5xl font-bold text-white mb-4 justify-center"
          />
          <p className="text-neutral-400 max-w-xl mx-auto">
            A curated selection of projects that demonstrate my passion for performance, design, and user experience.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-3xl overflow-hidden bg-neutral-900/90 border border-white/5 transition-all duration-[1400ms] cursor-pointer group-hover:-translate-y-3 group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.85)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-neutral-100 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        <div className="space-y-6">
          <img 
            src={selectedProject?.image} 
            alt={selectedProject?.title} 
            className="w-full h-64 object-cover rounded-xl border border-white/10"
          />
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
            <p className="text-neutral-300 leading-relaxed">
              {selectedProject?.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map(tag => (
                <span key={tag} className="text-sm text-white bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              <li>Real-time data processing with sub-millisecond latency</li>
              <li>Scalable architecture deployed on Kubernetes</li>
              <li>Interactive data visualization using WebGL</li>
            </ul>
          </div>
          <div className="pt-4 flex justify-end">
            <button className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors">
              View Live Demo
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
