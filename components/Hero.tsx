import React from 'react';
import GradientBlinds from './GradientBlinds';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/40 pt-28 pb-10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen opacity-40 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Wallpaper & Profile Container */}
        <div className="relative mb-20 animate-fade-in-up flex flex-col items-center">
          {/* Wallpaper Card */}
          <div className="relative w-[420px] sm:w-[640px] md:w-[960px] h-[200px] sm:h-[260px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <GradientBlinds
              className="absolute inset-0"
              gradientColors={['#FF9FFC', '#5227FF']}
              angle={0}
              noise={0.3}
              blindCount={12}
              blindMinWidth={50}
              spotlightRadius={0.5}
              spotlightSoftness={1}
              spotlightOpacity={1}
              mouseDampening={0.15}
              distortAmount={0}
              shineDirection="left"
              mixBlendMode="lighten"
            />
          </div>

          {/* Profile Photo */}
          <div className="absolute -bottom-12 md:-bottom-14 rounded-3xl p-2 bg-black border border-white/5 shadow-2xl">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/public/images/pic.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for hire
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineering digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-white to-neutral-400">
              masterpieces.
            </span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            I am a Software Engineer focused on FastAPI, React, and AI-powered systems, building reliable experiences across the stack.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">View Work</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
