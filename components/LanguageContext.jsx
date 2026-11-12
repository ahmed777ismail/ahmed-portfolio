'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (val) => (typeof val === 'object' && val !== null ? val.en : val)
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ahmed_portfolio_lang');
      if (saved === 'ar' || saved === 'en') {
        setLang(saved);
      }
    } catch (e) {
      // ignore local storage errors
    }
  }, []);

  useEffect(() => {
    const isRtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('ahmed_portfolio_lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (val) => {
    if (!val) return '';
    if (typeof val === 'object' && ('en' in val || 'ar' in val)) {
      return val[lang] || val.en || '';
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRtl: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
