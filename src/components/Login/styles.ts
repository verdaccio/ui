import { css } from 'emotion';

import { theme } from '../../design-tokens/theme';

export const loginDialog = css({
  minWidth: '300px',
});

export const loginError = css({
  backgroundColor: `${theme.palette.red} !important`,
  minWidth: 'inherit !important',
  marginBottom: '10px !important',
});

export const loginErrorMsg = css({
  display: 'flex',
  alignItems: 'center',
});

export const loginIcon = css({
  opacity: 0.9,
  marginRight: '8px',
});
