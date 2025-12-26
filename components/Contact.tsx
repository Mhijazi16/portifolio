import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import BlurText from './BlurText';

const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="py-24 bg-black/40 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
          <div ref={ref} className={`transition-all duration-[1600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <BlurText
            text="Let's build something extraordinary."
            animateBy="words"
            direction="bottom"
            delay={90}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance justify-center"
          />

          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:your.email@example.com"
             className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Say Hello
          </a>

          <div className="mt-16 flex justify-center space-x-8">
             {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((social) => (
               <a key={social} href="#" className="text-neutral-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200 font-medium">
                 {social}
               </a>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;