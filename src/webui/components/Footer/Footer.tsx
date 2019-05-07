/**
 * @prettier
 */

import React from 'react';

import { Wrapper, Left, Right, Flags, Love, Inner, ToolTip } from './styles';
import { goToVerdaccioWebsite } from '../../utils/windows';
import Icon from '../Icon';

const renderTooltip = () => (
  <ToolTip>
    <Icon icon="earth" padding="0 10px" size="md" />
    <Flags>
      <Icon icon="spain" padding="0 5px" size="md" />
      <Icon icon="nicaragua" padding="0 5px" size="md" />
      <Icon icon="india" padding="0 5px" size="md" />
      <Icon icon="brazil" padding="0 5px" size="md" />
      <Icon icon="china" padding="0 5px" size="md" />
      <Icon icon="austria" padding="0 5px" size="md" />
    </Flags>
  </ToolTip>
);
const POWERED_LABEL = 'Powered by';
const MADEWITH_LABEL = ' Made with';
const ON_LABEL = 'on';
const HEARTH_EMOJI = '♥';

// @ts-ignore
const renderRight = (version = window.VERDACCIO_VERSION) => {
  return (
    <Right>
      {POWERED_LABEL}
      <Icon icon="verdaccio" padding="0 5px" onClick={goToVerdaccioWebsite} pointer size="md" />
      {`/ ${version}`}
    </Right>
  );
};

const renderLeft = () => (
  <Left>
    {MADEWITH_LABEL}
    <Love>{HEARTH_EMOJI}</Love>
    {ON_LABEL}
    {renderTooltip()}
  </Left>
);

const Footer: React.FC = () => (
  <Wrapper>
    <Inner>
      {renderLeft()}
      {renderRight()}
    </Inner>
  </Wrapper>
);

export default Footer;
