import { create } from '@storybook/theming';
import { fontFamily } from '../src/utils/styles/global';

export default create({
  base: 'light',
  brandTitle: 'Verdaccio',
  brandUrl: 'https://verdaccio.org/',
  brandImage: 'https://verdaccio.org/img/logo/banner/png/verdaccio-banner@2x.png',

  fontBase: fontFamily,
});
