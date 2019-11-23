import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { fontWeight } from '../utils/styles/sizes';
import { breakpoints } from '../utils/styles/media';

const resetStyles = makeStyles(() => ({
  '@global': {
    // eslint-disable-next-line max-len
    'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      fontFamily: '"Roboto", Helvetica Neue, Arial, sans-serif',
    },
    strong: {
      fontWeight: fontWeight.semiBold,
    },
    'html, body, #root': {
      height: '100%',
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
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
