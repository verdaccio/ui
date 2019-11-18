import { css } from '@emotion/core';

import { theme } from '../design-tokens/theme';

export const alertError = css({
  backgroundColor: `${theme.palette.red} !important`,
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
