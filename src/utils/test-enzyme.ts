import { mount, shallow } from 'enzyme';

import ThemeProvider from '../design-tokens/ThemeProvider';

/* eslint-disable @typescript-eslint/explicit-function-return-type */

const shallowWithTheme = (element: React.ReactElement<any>, ...props: undefined[]): any =>
  shallow(element, {
    wrappingComponent: ThemeProvider,
    ...props,
  });

const mountWithTheme = (element: React.ReactElement<any>, ...props: undefined[]): any =>
  mount(element, {
    wrappingComponent: ThemeProvider,
    ...props,
  });

export { mountWithTheme as mount, shallowWithTheme as shallow };
