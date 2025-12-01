import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
 
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
 
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};