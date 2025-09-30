import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'hi' | 'fr' | 'es' | 'ur' | 'pa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const languageNames = {
  en: 'English',
  hi: 'हिन्दी',
  fr: 'Français',
  es: 'Español',
  ur: 'اردو',
  pa: 'ਪੰਜਾਬੀ',
};

export const LanguageProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const { i18n, t } = useTranslation();
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && Object.keys(languageNames).includes(savedLanguage)) {
      return savedLanguage;
    }
    return 'en';
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language, i18n]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languageNames };
