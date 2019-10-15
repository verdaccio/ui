import { css, Interpolation } from 'emotion';

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 1024,
  container: 1240,
  xlarge: 1275,
};

type Breakpoints = typeof breakpoints;
type Sizes = keyof Breakpoints;

type MediaQuery<T> = {
  [P in keyof T]: (args: Interpolation, key?: P) => string;
};

function constructMQ(breakpoint: Sizes, args: Interpolation): string {
  const label = breakpoints[breakpoint];
  const prefix = typeof label === 'string' ? '' : 'min-width:';
  const suffix = typeof label === 'string' ? '' : 'px';

  return css`
    @media (${prefix + breakpoints[breakpoint] + suffix}) {
      ${args};
    }
  `;
}

const mq: MediaQuery<Breakpoints> = {
  small: (args, b = 'small') => constructMQ(b, args),
  large: (args, b = 'large') => constructMQ(b, args),
  container: (args, b = 'container') => constructMQ(b, args),
  medium: (args, b = 'medium') => constructMQ(b, args),
  xlarge: (args, b = 'xlarge') => constructMQ(b, args),
};

export default mq;
