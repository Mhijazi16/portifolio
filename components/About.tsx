import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import BlurText from './BlurText';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../LanguageContext';
import aboutData from '../data/about.json';

const About: React.FC = () => {
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const dispatchFakeEvent = (x: number, y: number) => {
      if (!splineContainerRef.current) return;
      const canvas = splineContainerRef.current.querySelector('canvas');
      if (!canvas) return;

      const eventConfig = {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: x,
        clientY: y,
        screenX: x,
        screenY: y,
        pointerType: 'mouse',
        isPrimary: true,
        buttons: 0,
      };

      const mouseEvent = new MouseEvent('mousemove', eventConfig);
      const pointerEvent = new PointerEvent('pointermove', eventConfig);

      canvas.dispatchEvent(mouseEvent);
      canvas.dispatchEvent(pointerEvent);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!splineContainerRef.current) return;
      const canvas = splineContainerRef.current.querySelector('canvas');
      if (canvas && e.target === canvas) return;

      dispatchFakeEvent(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (!isTouch) return;

      const scrollY = window.scrollY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const x = width / 2 + Math.sin(scrollY * 0.003) * (width * 0.25);
      const y = height / 2 + Math.cos(scrollY * 0.002) * (height * 0.15);

      dispatchFakeEvent(x, y);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-neutral-950/60">
      <div
        ref={aboutRef}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-[1400ms] ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div ref={splineContainerRef} className="relative h-[500px] w-full">
           <div className="absolute inset-0 bg-white blur-[100px] opacity-10 rounded-full"></div>
           <Spline
             scene={aboutData.splineScene}
             className="relative z-10 w-full h-full rounded-2xl border border-white/5 shadow-2xl"
           />
        </div>
        <div>
          <BlurText
            text={t.about.title}
            animateBy="words"
            direction="top"
            delay={50}
            className="text-3xl md:text-4xl font-bold text-white mb-6 justify-center md:justify-start"
          />
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed text-center md:text-left">
            {t.about.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
