import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en-US.json';
import translationPT from './translations/pt-BR.json';
import translationES from './translations/es-ES.json';
import translationDE from './translations/de-DE.json';
import translationFR from './translations/fr-FR.json';
import translationCN from './translations/zh-CN.json';
import translationJP from './translations/ja-JP.json';
import translationUA from './translations/uk-UA.json';
import translationKM from './translations/km-KH.json';

const languages = {
  'en-US': {
    translation: translationEN,
  },
  'pt-BR': {
    translation: translationPT,
  },
  'es-ES': {
    translation: translationES,
  },
  'de-DE': {
    translation: translationDE,
  },
  'fr-FR': {
    translation: translationFR,
  },
  'zh-CN': {
    translation: translationCN,
  },
  'ja-JP': {
    translation: translationJP,
  },
  'uk-UA': {
    translation: translationUA,
  },
  'km-KH': {
    translation: translationKM,
  }
};

type Language = keyof typeof languages;

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // in case window.VEDACCIO_LANGUAGE is undefined,it will fall back to 'en-US'
    lng: window?.__VERDACCIO_BASENAME_UI_OPTIONS?.language,
    fallbackLng: 'en-US',
    whitelist: ['en-US', 'pt-BR', 'es-ES', 'de-DE', 'fr-FR', 'zh-CN', 'ja-JP', 'uk-UA', 'km-KH'],
    load: 'currentOnly',
    resources: languages,
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
export { Language };
