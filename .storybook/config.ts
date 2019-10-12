import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import theme from './theme';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
