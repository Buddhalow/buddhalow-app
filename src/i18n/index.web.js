import english from './en';
import italian from './it';

import {sprintf} from 'sprintf-js'
export const Translations = {
  en: english
};

const getNavigatorLanguage = () => {
  if (!navigator) {
    return 'en';
  }
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
  }

}

let locale = 'en';

let currentLocale = getNavigatorLanguage().split('-')[0];
if (Translations[currentLocale] != undefined) {
  locale = currentLocale;
}

export const DEFAULT_LOCALE = locale;


let i18n = {
  t(message, args) {
    if (message) {
      let translation
      // The translation exists AND the message exists in this translation
      if (Translations[locale] && Translations[locale][message]) {
        translation = Translations[locale][message];
        translation = sprintf.apply(this, [translation].concat(Array.prototype.slice.call(args, 1)));
      // Otherwise try in the default translation
      } else if (Translations[DEFAULT_LOCALE] && Translations[DEFAULT_LOCALE][message]) {
        translation = Translations[DEFAULT_LOCALE][message];
      }
    }
  
    return message;
  }
}
export default i18n

export function translate(message, locale = DEFAULT_LOCALE, ...args) {
  // We're actually asking for 'something' to be translated
  if (message) {
    // The translation exists AND the message exists in this translation
    if (Translations[locale] && Translations[locale][message]) {
      let translation = Translations[locale][message];
      let result = sprintf(translation, ...args)
      return result
    // Otherwise try in the default translation
    } else if (Translations[DEFAULT_LOCALE] && Translations[DEFAULT_LOCALE][message]) {
      return Translations[DEFAULT_LOCALE][message];
    }
  }

  return message;
}


export function _(message, ...args) {
  let locale = DEFAULT_LOCALE;
  // We're actually asking for 'something' to be translated
  if (message) {
    // The translation exists AND the message exists in this translation
    if (Translations[locale] && Translations[locale][message]) {
      let translation = Translations[locale][message];
      let result = sprintf(translation, ...args)
      return result
    // Otherwise try in the default translation
    } else if (Translations[DEFAULT_LOCALE] && Translations[DEFAULT_LOCALE][message]) {
      return Translations[DEFAULT_LOCALE][message];
    }
  }

  return message;
}
