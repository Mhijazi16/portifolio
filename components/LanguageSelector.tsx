import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import type { Language } from '../data/i18n';

const LanguageSelector: React.FC = () => {
  const { setLanguage, hasChosenLanguage } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);

  if (hasChosenLanguage) return null;

  const handleSelect = (lang: Language) => {
    setIsExiting(true);
    setTimeout(() => {
      setLanguage(lang);
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-10 px-6 transition-all duration-700 ${
          isExiting ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}
        style={{ animationDelay: '200ms' }}
      >
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Choose Your Language
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-neutral-400" style={{ fontFamily: "'Cairo', sans-serif" }}>
            اختر لغتك
          </p>
        </div>

        {/* Language Cards */}
        <div className="flex flex-col sm:flex-row gap-5">
          {/* English */}
          <button
            onClick={() => handleSelect('en')}
            className="group relative w-[220px] h-[160px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
              <span className="text-4xl font-light text-white/60 group-hover:text-white transition-colors duration-300">
                EN
              </span>
              <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                English
              </span>
            </div>
          </button>

          {/* Arabic */}
          <button
            onClick={() => handleSelect('ar')}
            className="group relative w-[220px] h-[160px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
              <span className="text-4xl font-light text-white/60 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Cairo', sans-serif" }}>
                ع
              </span>
              <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Cairo', sans-serif" }}>
                العربية
              </span>
            </div>
          </button>
        </div>

        {/* Subtle divider */}
        <div className="w-16 h-px bg-white/10" />
      </div>
    </div>
  );
};

export default LanguageSelector;
