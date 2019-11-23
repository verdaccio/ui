import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Main colors
// -------------------------
const colors = {
  black: '#000',
  white: '#fff',
  red: '#d32f2f',
  greySuperLight: '#f5f5f5',
  greyLight: '#d3d3d3',
  greyLight2: '#908ba1',
  greyLight3: '#f3f4f240',
  greyDark: '#a9a9a9',
  greyDark2: '#586069',
  greyChateau: '#95989a',
  greyGainsboro: '#e3e3e3',
  greyAthens: '#d3dddd',
  eclipse: '#3c3c3c',
  paleNavy: '#e4e8f1',
  saltpan: '#f7f8f6',
  snow: '#f9f9f9',
  love: '#e25555',
  nobel01: '#999999',
  nobel02: '#9f9f9f',
  primary: window.VERDACCIO_PRIMARY_COLOR || '#4b5e40',
  secondary: '#20232a',
};

export type Colors = keyof typeof colors;

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    ...colors,
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    error: { main: colors.red },
  },
});

export type Theme = typeof theme;

declare module '@material-ui/core/styles/createPalette' {
  interface CustomPalette {
    black: string;
    white: string;
    red: string;
    greySuperLight: string;
    greyLight: string;
    greyLight2: string;
    greyLight3: string;
    greyDark: string;
    greyDark2: string;
    greyChateau: string;
    greyGainsboro: string;
    greyAthens: string;
    eclipse: string;
    paleNavy: string;
    saltpan: string;
    snow: string;
    love: string;
    nobel01: string;
    nobel02: string;
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Palette extends CustomPalette {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface PaletteOptions extends Partial<CustomPalette> {}
}

export default { ...theme };
