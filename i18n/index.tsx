import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { getData } from '../utils/local-storage';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
      settings: 'Settings',
      tabTwo: 'Tab Two',
      contacts: 'Contacts',
      discover: 'Discover',
      darkTheme: 'Dark Theme',
      lightTheme: 'Light Theme',
      systemTheme: 'System Theme',
      english: 'English',
      turkish: 'Turkish',
      theme: 'Theme',
      langugage: 'Language',
    },
  },
  tr: {
    translation: {
      'Welcome to React': "React'e ve react-i18next'e hoşgeldiniz",
      settings: 'Ayarlar',
      tabTwo: 'Tab iki',
      contacts: 'İletişim',
      discover: 'Keşfet',
      darkTheme: 'Koyu Tema',
      lightTheme: 'Açık Tema',
      systemTheme: 'Sistem Teması',
      english: 'İngilizce',
      turkish: 'Türkçe',
      theme: 'Tema',
      langugage: 'Dil',
    },
  },
};

const LanguageDetector = {
  type: 'languageDetector',
  detect: () => {
    getData('@language').then((value) => {
      if (value) {
        i18n.changeLanguage(value);
      } else {
        i18n.changeLanguage('en');
      }
    });
  },
  init: Function.prototype,
  cacheUserLanguage: () => {},
};

i18n
  .use(LanguageDetector as any)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
