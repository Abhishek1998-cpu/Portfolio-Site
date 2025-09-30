import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import hi from './locales/hi.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import ur from './locales/ur.json';
import pa from './locales/pa.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  fr: {
    translation: fr,
  },
  es: {
    translation: es,
  },
  ur: {
    translation: ur,
  },
  pa: {
    translation: pa,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
