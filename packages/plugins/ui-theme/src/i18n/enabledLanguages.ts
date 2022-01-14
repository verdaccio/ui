import Flags from 'country-flag-icons/react/3x2';
import React from 'react';

export const DEFAULT_LANGUAGE = 'en-US';

export type LanguageConfiguration = {
  lng: string;
  menuKey: string;
  icon: React.ReactElement;
};

export const listLanguages: LanguageConfiguration[] = [
  { lng: DEFAULT_LANGUAGE, icon: Flags.US, menuKey: 'lng.english' },
  { lng: 'cs-CZ', icon: Flags.CZ, menuKey: 'lng.czech' },
  { lng: 'pt-BR', icon: Flags.BR, menuKey: 'lng.portuguese' },
  { lng: 'es-ES', icon: Flags.ES, menuKey: 'lng.spanish' },
  { lng: 'de-DE', icon: Flags.DE, menuKey: 'lng.german' },
  { lng: 'fr-FR', icon: Flags.FR, menuKey: 'lng.french' },
  { lng: 'zh-CN', icon: Flags.CN, menuKey: 'lng.chinese' },
  { lng: 'ja-JP', icon: Flags.JP, menuKey: 'lng.japanese' },
  { lng: 'ru-RU', icon: Flags.RU, menuKey: 'lng.russian' },
  { lng: 'tr-TR', icon: Flags.TR, menuKey: 'lng.turkish' },
  { lng: 'uk-UA', icon: Flags.UA, menuKey: 'lng.ukraine' },
  { lng: 'km-KH', icon: Flags.KH, menuKey: 'lng.khme' },
  { lng: 'zh-TW', icon: Flags.TW, menuKey: 'lng.chineseTraditional' },
];

const languages = listLanguages.reduce((acc, item: LanguageConfiguration) => {
  acc.push(item.lng);
  return acc;
}, [] as string[]);

export const listLanguagesAsString = languages;

export type Language = keyof typeof listLanguagesAsString;
