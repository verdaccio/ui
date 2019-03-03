/**
 * @prettier
 */

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: '#4b5e40',
  secondary: '#20232a',
  blue: '#2196f3',
  text: '#3c3c3c',
};

export type Palette = keyof typeof palette;

export const theme = createMuiTheme({
  palette: {
    ...palette,
    primary: { main: palette.primary },
    secondary: { main: palette.secondary },
    text: { primary: palette.text },
  },
});

declare module '@material-ui/core/styles/createPalette' {
  interface CustomPalette {
    blue: string;
    text: string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends Partial<CustomPalette> {}
}
