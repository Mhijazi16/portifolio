import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
         <div className="text-2xl font-bold tracking-tighter text-white cursor-pointer transition-all duration-300 hover:text-neutral-200 hover:-translate-y-0.5" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          MOHAMMED<span className="text-neutral-500">.HIJAZI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-neutral-400">
            {t.nav.links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {language === 'en' ? 'ع' : 'EN'}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-xs font-medium text-neutral-300 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            {language === 'en' ? 'ع' : 'EN'}
          </button>
          <button
            className="text-white"
            onClick={() => scrollToSection('contact')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
