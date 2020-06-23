import { mount, shallow } from 'enzyme';
import React from 'react';

import ThemeProvider from 'verdaccio-ui/design-tokens/ThemeProvider';

const shallowWithTheme = (element: React.ReactElement<any>, ...props: any[]) =>
  shallow(element, {
    wrappingComponent: ThemeProvider,
    ...props,
  });

const mountWithTheme = (element: React.ReactElement<any>, ...props: any[]): any =>
  mount(element, {
    wrappingComponent: ThemeProvider,
    ...props,
  });

export { mountWithTheme as mount, shallowWithTheme as shallow };
