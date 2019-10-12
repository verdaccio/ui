import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withCode } from './withCode';

import theme from './theme';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withKnobs);
addDecorator(withCode);
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
