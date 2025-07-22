import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './local/en.json'
import translationAR from './local/ar.json'

const resources = {
  en: {
    translation: translationEN
  },
 ar: {
    translation: translationAR
  }

}

i18n

  .use(Backend)
 
  .use(LanguageDetector)
  .use(initReactI18next)
  
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    }
  });


export default i18n;