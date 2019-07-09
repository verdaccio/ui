import { css } from 'emotion';
import colors from '../utils/styles/colors';

export const alertError = css`
  background-color: ${colors.red} !important;
  min-width: inherit !important;
`;

export const alertErrorMsg = css`
  display: flex;
  align-items: center;
`;

export const alertIcon = css({
  opacity: 0.9,
  marginRight: '8px',
});
