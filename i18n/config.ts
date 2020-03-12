import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en-US.json';
import translationPT from './translations/pt-BR.json';
import translationES from './translations/es-ES.json';
import translationDE from './translations/de-DE.json';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // in case window.VEDACCIO_LANGUAGE is undefined,it will fall back to 'en-US'
    lng: window?.__VERDACCIO_BASENAME_UI_OPTIONS?.language,
    fallbackLng: 'en-US',
    whitelist: ['en-US', 'pt-BR', 'es-ES', 'de-DE'],
    load: 'currentOnly',
    resources: {
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
    },
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
