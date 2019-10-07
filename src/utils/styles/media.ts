import { css } from 'emotion';

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 1024,
  container: 1240,
  xlarge: 1275,
};

type Sizes = keyof typeof breakpoints;

type MediaQuery = {
  [key in Sizes]: (cls: any) => string;
};

const mq: MediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
    const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
    accumulator[label] = cls =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `;
    return accumulator;
  },
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  {} as MediaQuery
);

export default mq;
