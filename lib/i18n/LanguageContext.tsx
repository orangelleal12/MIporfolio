"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language, Dictionary } from './dictionaries';

type LanguageContextType = {
  language: Language;
  t: Dictionary;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language on mount
  useEffect(() => {
    // Defer state update to avoid the "synchronous setState in effect" warning
    // and prevent immediate cascading renders in React 19 / Compiler.
    queueMicrotask(() => {
      const saved = localStorage.getItem('portfolio-lang') as Language;
      if (saved && (saved === 'en' || saved === 'es')) {
        setLanguage(saved);
      } else {
        // Check browser preference
        const browserLang = navigator.language.split('-')[0];
        setLanguage(browserLang === 'es' ? 'es' : 'en');
      }
    });
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, t: dictionaries[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
