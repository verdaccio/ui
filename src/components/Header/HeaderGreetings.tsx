import React from 'react';

import Label from '../Label';

import { Greetings } from './styles';

interface Props {
  username: string;
}

const HeaderGreetings: React.FC<Props> = ({ username }) => (
  <>
    <Greetings>{'Hi,'}</Greetings>
    <Label capitalize={true} data-testid="greetings-label" text={username} weight="bold" />
  </>
);

export default HeaderGreetings;
