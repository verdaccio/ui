import React from 'react';

import Label from '../Label';

import { Greetings } from './styles';

interface Props {
  username: string;
}

const HeaderGreetings: React.FC<Props> = ({ username }) => (
  <>
    <Greetings>{'Hi,'}</Greetings>
    <Label capitalize={true} text={username} weight="bold" />
  </>
);

export default HeaderGreetings;
