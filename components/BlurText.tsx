import React, { useEffect, useRef, useState } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
};

/**
 * Optimized BlurText component using CSS animations instead of Framer Motion.
 * Reduces bundle size by ~12KB while maintaining smooth animations.
 * Automatically uses word-based animation for Arabic text to preserve ligatures.
 */
const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  // Arabic detection - force words for Arabic text to preserve ligatures
  const hasArabic = /[\u0600-\u06FF]/.test(text);
  const effectiveAnimateBy = hasArabic ? 'words' : animateBy;

  const elements = effectiveAnimateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const directionOffset = direction === 'top' ? '-50px' : '50px';
  const injectStyles = `
    @keyframes blurInAnimation {
      0% {
        opacity: 0;
        filter: blur(10px);
        transform: translateY(${directionOffset});
      }
      50% {
        opacity: 0.5;
        filter: blur(5px);
        transform: translateY(${direction === 'top' ? '5px' : '-5px'});
      }
      100% {
        opacity: 1;
        filter: blur(0px);
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{injectStyles}</style>
      <div
        ref={ref}
        className={`${className} flex flex-wrap`}
        style={{
          perspective: '1000px',
        }}
      >
        {elements.map((segment, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
              animation: inView
                ? `blurInAnimation 0.5s ease-out forwards ${(index * delay) / 1000}s`
                : 'none',
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {effectiveAnimateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </span>
        ))}
      </div>
    </>
  );
};

export default BlurText;
