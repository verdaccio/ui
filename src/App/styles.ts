import { css } from 'emotion';

import colors from '../utils/styles/colors';

export const alertError = css({
  backgroundColor: `${colors.red} !important`,
  minWidth: 'inherit !important',
});

export const alertErrorMsg = css({
  display: 'flex',
  alignItems: 'center',
});

export const alertIcon = css({
  opacity: 0.9,
  marginRight: '8px',
});
