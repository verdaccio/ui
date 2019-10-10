import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Container, Title, Details } from './styles';

const Welcome: React.FC = () => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title component="h2" variant="h1">
          {'Build amazing things'}
        </Title>
        <Details component="span">
          {'Essential JavaScript development tools that help you go to market faster and build powerful applications using modern open source code.'}
        </Details>
      </Container>
    </ThemeProvider>
  );
};

export default Welcome;
