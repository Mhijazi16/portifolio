import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import BlurText from './components/BlurText';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
 
// About component defined here for simplicity of the file structure requested
const About: React.FC = () => {
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  return (
    <section id="about" className="py-24 bg-neutral-950/60">
      <div
        ref={aboutRef}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-[1400ms] ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="relative">
           <div className="absolute inset-0 bg-white blur-[100px] opacity-10 rounded-full"></div>
          <img 
            src="https://picsum.photos/600/800" 
            alt="Profile" 
            className="relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-white/5 w-full object-cover h-[500px]"
          />
        </div>
        <div>
          <BlurText
            text="About Me"
            animateBy="letters"
            direction="top"
            delay={40}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          />
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
            <p>
              I'm Mohammed Hijazi, a software engineer who enjoys building clean, reliable systems that connect strong backends with thoughtful user interfaces.
            </p>
            <p>
              I work mainly with FastAPI, React, Python, and C++, and I love designing agents and tools with LangChain, LangGraph, and modern generative AI models.
            </p>
            <p>
              Outside of coding, I'm usually tinkering with Linux setups, learning new tools, or exploring ideas around intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
     <div className="relative min-h-screen text-white selection:bg-white selection:text-black overflow-hidden">
      {/* Blurred gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Content on top of blurred background */}
      <div className="relative z-10 bg-black/40 backdrop-blur-2xl">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <AIChat />
      </div>
    </div>
  );
};

export default App;