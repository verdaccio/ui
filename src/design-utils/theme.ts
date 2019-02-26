import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#4b5e40' },
    secondary: { main: '#20232a' }
  },
});

export type Theme = typeof theme
