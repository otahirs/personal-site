import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import yaml from 'js-yaml';

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // whitelist: ['en', 'cs'],
    fallbackLng: 'en',
    ns: ['translation', 'about', 'routes', 'contact'],
    // detection: {
    //   checkWhitelist: true, // options for language detection
    // },
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.yaml',
      parse: (data) => yaml.load(data),
    },
  });

export default i18n;
