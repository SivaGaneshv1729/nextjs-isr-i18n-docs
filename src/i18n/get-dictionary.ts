import 'server-only';

const dictionaries = {
  en: () => import('../../public/locales/en.json').then((module) => module.default),
  es: () => import('../../public/locales/es.json').then((module) => module.default),
  fr: () => import('../../public/locales/fr.json').then((module) => module.default),
  de: () => import('../../public/locales/de.json').then((module) => module.default),
  ja: () => import('../../public/locales/ja.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (dictionaries[locale as keyof typeof dictionaries]) {
     return dictionaries[locale as keyof typeof dictionaries]();
  }
  return dictionaries.en();
};
