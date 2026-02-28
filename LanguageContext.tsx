import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Language, type Translations } from './data/i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
  hasChosenLanguage: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('portfolio-lang') as Language) || 'en';
  });

  const [hasChosenLanguage, setHasChosenLanguage] = useState(() => {
    return !!localStorage.getItem('portfolio-lang');
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setHasChosenLanguage(true);
    localStorage.setItem('portfolio-lang', lang);
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.style.fontFamily =
      language === 'ar'
        ? "'Cairo', 'Inter', sans-serif"
        : "'Inter', sans-serif";
  }, [language]);

  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, isRTL, hasChosenLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
