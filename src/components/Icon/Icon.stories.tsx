import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Icons } from './Icon';
import Icon from './Icon';

type Size = ('sm' | 'md')[];

const sizes: Size = ['sm', 'md'];
const icons = Object.keys(Icons);

storiesOf('Icon', module)
  .add('default', () => {
    return <Icon name={icons[1]} />;
  })
  .add('Playground', () => {
    const size = select('size', sizes, 'sm');
    const name = select('name', icons, icons[0]);
    const pointer = boolean('pointer', false);
    const img = boolean('img', false);

    return <Icon img={img} name={name} onClick={action('icon click')} pointer={pointer} size={size} />;
  });
