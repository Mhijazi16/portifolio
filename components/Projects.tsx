import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types';

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

  return (
    <section id="projects" className="py-24 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-neutral-400 max-w-xl">
              A curated selection of projects that demonstrate my passion for performance, design, and user experience.
            </p>
          </div>
          <button className="hidden md:block text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
            View Github
          </button>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-neutral-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
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
                      <span key={tag} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2.5 py-1 rounded-full backdrop-blur-md">
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
        
        <div className="mt-12 md:hidden text-center">
             <button className="text-white border-b border-white pb-1">View Github</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;