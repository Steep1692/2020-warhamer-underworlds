import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import i18next from 'i18next'
import {makePublicUrl} from '../utils/utils'

//https://docs.google.com/spreadsheets/d/1BbBGR326YDnC5BESDWaWPgZxARCDQTPyFLrbusOGOgI/edit?usp=sharing

i18n.use(HttpApi).use(LanguageDetector).init({
  ns: ['common', 'warBands', 'fighters'],
  defaultNS: 'common',
  fallbackLng: "ru",
  debug: false,
  keySeparator: false, // we use content as keys
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },
  detection: {
    order: ["cookie", "navigator", "path", "localStorage", "subdomain", "queryString", "htmlTag"],
    lookupFromPathIndex: 0,
    caches: ["cookie"],
    cookieMinutes: 10000000,
    lookupQuerystring: "i18next"
  },
  backend: {
    loadPath: makePublicUrl("/locales/{{lng}}/{{ns}}.json"),
  },
  react: {
    wait: false
  }
}, (err, t) => {
  i18next.t('myKey'); // key in moduleA namespace (defined default)
  i18next.t('common:myKey'); // key in common namespace
});

export default i18n;
