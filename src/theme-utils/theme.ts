/**
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: '#4b5e40',
  secondary: '#20232a',
  blue: '#2196f3',
  red: '#e25555',
  disabled: '#999999',
  divider: '#e3e3e3',
  text: '#3c3c3c',
};

export type Palette = keyof typeof palette;

const customSpacing = {
  none: '0',
  auto: 'auto',
  dense: 10,
  default: 15,
  wide: 20,
  hero: 45,
};

export type CustomSpacing = keyof typeof customSpacing;

const customTheme = {
  customSpacing,
};

export type CustomTheme = typeof customTheme;

export const theme = createMuiTheme({
  palette: {
    ...palette,
    primary: { main: palette.primary },
    secondary: { main: palette.secondary },
    text: { primary: palette.text },
  },
  ...customTheme,
});

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module '@material-ui/core/styles/createPalette' {
  interface CustomPalette {
    blue: string;
    red: string;
    disabled: string;
    divider: string;
    text: string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends Partial<CustomPalette> {}
}
