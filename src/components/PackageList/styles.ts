import { css } from '@emotion/core';

import { fontWeight, fontSize } from '../../utils/styles/sizes';

export const listTitle = css({
  fontWeight: fontWeight.regular,
  fontSize: fontSize.xl,
  margin: `0 0 10px 0`,
});

export const pkgContainer = css`
  margin: 0;
  padding: 0;

  & .listTitle {
    ${listTitle}
  }
`;
