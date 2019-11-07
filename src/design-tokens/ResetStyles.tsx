import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { fontSize, fontWeight } from '../utils/styles/sizes';
import { breakpoints } from '../utils/styles/media';
import colors from '../utils/styles/colors';

import RobotoBoldWoff from './fonts/Roboto-Bold.woff';
import RobotoBoldWoff2 from './fonts/Roboto-Bold.woff2';
import RobotoLightWoff from './fonts/Roboto-Light.woff';
import RobotoLightWoff2 from './fonts/Roboto-Light.woff2';
import RobotoMediumWoff from './fonts/Roboto-Medium.woff';
import RobotoMediumWoff2 from './fonts/Roboto-Medium.woff2';
import RobotoRegularWoff from './fonts/Roboto-Regular.woff';
import RobotoRegularWoff2 from './fonts/Roboto-Regular.woff2';

// reset styles based on https://gist.github.com/DavidWells/18e73022e723037a50d6
const resetStyles = makeStyles(() => ({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    // eslint-disable-next-line max-len
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
      fontFamily: '"Roboto", Helvetica Neue, Arial, sans-serif',
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block',
    },
    'html, body': {
      height: '100%;',
    },
    html: {
      boxSizing: 'border-box',
    },
    '@font-face': [
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        src: `local('Roboto Light'), local('Roboto-Light'),
        url(${RobotoLightWoff2}) format('woff2'),
        url(${RobotoLightWoff}) format('woff')`,
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        src: `local('Roboto'), local('Roboto-Regular'),
        url(${RobotoRegularWoff2}) format('woff2'),
        url(${RobotoRegularWoff}) format('woff')`,
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        src: `local('Roboto Medium'), local('Roboto-Medium'),
        url(${RobotoMediumWoff2}) format('woff2'),
        url(${RobotoMediumWoff}) format('woff')`,
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        src: `local('Roboto Bold'), local('Roboto-Bold'),
        url(${RobotoBoldWoff2}) format('woff2'),
        url(${RobotoBoldWoff}) format('woff')`,
      },
    ],
    body: {
      lineHeight: 1,
      fontSize: fontSize.base,
      color: colors.eclipse,
    },
    'ol, ul': {
      listStyle: 'none',
    },
    'blockquote, q': {
      quotes: 'none',
      '&:before, &:after': {
        content: 'none',
      },
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
    a: {
      textDecoration: 'none',
    },
    strong: {
      fontWeight: fontWeight.semiBold,
    },
    '#root': {
      height: '100%',
    },
    '.container': {
      padding: 15,
      flex: 1,

      [`@media screen and (min-width: ${breakpoints.container}px)`]: {
        maxWidth: breakpoints.container,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
}));

const ResetStyles: React.FC = ({ children }) => {
  resetStyles();
  return <>{children}</>;
};

export default ResetStyles;
