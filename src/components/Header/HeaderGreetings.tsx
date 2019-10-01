import React from 'react';

import { Greetings } from './styles';
import Label from '../Label';

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
