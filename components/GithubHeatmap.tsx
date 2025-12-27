import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import BlurText from './BlurText';
import contactData from '../data/contact.json';

const GithubHeatmap: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="github" className="py-24 bg-neutral-950/60 border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <BlurText
              text={contactData.heatmap.title}
              animateBy="words"
              direction="top"
              delay={50}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            />
            <p className="text-neutral-400 max-w-xl">
              {contactData.heatmap.description}
            </p>
          </div>
          <a
            href={contactData.footer.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 border-b border-neutral-500/70 hover:text-white hover:border-white transition-all duration-300"
          >
            View full profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div
          ref={ref}
          className={`rounded-3xl bg-black/40 border border-white/5 p-4 md:p-6 flex justify-center overflow-x-auto transition-all duration-[1400ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex flex-col items-center gap-4 min-w-[320px]">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Last 1 year of activity
            </p>
            <img
              src={`https://ghchart.rshah.org/${contactData.heatmap.color}/${contactData.heatmap.username}`}
              alt={`GitHub contributions heatmap for ${contactData.heatmap.username}`}
              className="w-full max-w-full h-auto opacity-95 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />

            <p className="text-[11px] text-neutral-500">
              Generated from public GitHub contribution data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubHeatmap;
