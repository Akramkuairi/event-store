import i18n from 'i18next';
import resources from './resources'
import { initReactI18next } from 'react-i18next';

  i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'DE',
    lng: "DE",
    debug: false,
      interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;