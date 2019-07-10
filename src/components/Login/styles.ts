import { css } from 'emotion';
import colors from '../../utils/styles/colors';

export const loginDialog = css({
  minWidth: '300px',
});

export const loginError = css`
  background-color: ${colors.red} !important;
  min-width: inherit !important;
  margin-bottom: 10px !important;
`;

export const loginErrorMsg = css`
  display: flex;
  align-items: center;
`;

export const loginIcon = css({
  opacity: 0.9,
  marginRight: '8px',
});
