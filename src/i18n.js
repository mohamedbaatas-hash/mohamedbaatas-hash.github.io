import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  fr: { translation: fr }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

// Set direction and lang immediately on load
if (typeof document !== 'undefined') {
  document.documentElement.dir = i18n.dir();
  document.documentElement.lang = i18n.language || 'en';
}

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = lng;
  }
});

export default i18n;