import { mount, shallow } from 'enzyme';

import ThemeProvider from '../design-tokens/ThemeProvider';

/* eslint-disable @typescript-eslint/explicit-function-return-type */

const shallowWithTheme = (element: React.ReactElement<any>) =>
  shallow(element, {
    wrappingComponent: ThemeProvider,
  });

const mountWithTheme = (element: React.ReactElement<any>) =>
  mount(element, {
    wrappingComponent: ThemeProvider,
  });

export { mountWithTheme as mount, shallowWithTheme as shallow };
