import React from 'react';
import GradientBlinds from './GradientBlinds';
import BlurText from './BlurText';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import heroData from '../data/hero.json';

const Hero: React.FC = () => {
  const [heroRef, heroVisible] = useIntersectionObserver();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/40 pt-28 pb-10">

      {/* Background Ambience */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 rounded-full blur-[140px] mix-blend-screen opacity-40 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Wallpaper & Profile Container */}
        <div className="relative mb-20 animate-fade-in-up flex flex-col items-center">
          {/* Wallpaper Card */}
          <div className="relative w-[420px] sm:w-[640px] md:w-[960px] h-[200px] sm:h-[260px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <GradientBlinds
              className="absolute inset-0"
               gradientColors={['#ffffff', '#444444']}
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
                src={heroData.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div
          ref={heroRef}
          className={`text-center max-w-3xl transition-all duration-[1400ms] ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/20 text-xs font-medium text-neutral-200 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {heroData.availableText}
          </div>
          
          <BlurText
            text={heroData.heading1}
            animateBy="letters"
            direction="top"
            delay={50}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight text-center justify-center"
          />
          
          <BlurText
            text={heroData.heading2}
            animateBy="letters"
            direction="top"
            delay={50}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight text-center justify-center"
          />
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            {heroData.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById(heroData.buttons.viewWork.targetId)?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">{heroData.buttons.viewWork.text}</span>
            </button>
            <button 
              onClick={() => document.getElementById(heroData.buttons.contact.targetId)?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              {heroData.buttons.contact.text}
            </button>
            <a 
              href={heroData.buttons.resume.url}
              target="_blank"
              rel="noopener noreferrer"
               className="px-8 py-3.5 bg-white/5 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              {heroData.buttons.resume.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
