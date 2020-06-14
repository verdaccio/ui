import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { goToVerdaccioWebsite } from '@verdaccio/utils/windows';

import { Wrapper, Left, Right, Earth, Flags, Love, Flag, Logo, Inner, ToolTip } from './styles';

/* eslint-disable react/jsx-key */
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Inner>
        <Left>
          <Trans components={[<Love />]} i18nKey="footer.made-with-love-on" />
          <ToolTip>
            <Earth name="earth" size="md" />
            <Flags>
              <Flag name="spain" size="md" />
              <Flag name="nicaragua" size="md" />
              <Flag name="india" size="md" />
              <Flag name="brazil" size="md" />
              <Flag name="china" size="md" />
              <Flag name="austria" size="md" />
              <Flag name="germany" size="md" />
              <Flag name="taiwan" size="md" />
            </Flags>
          </ToolTip>
        </Left>
        <Right>
          {t('footer.powered-by')}
          <Logo img={true} name="verdaccio" onClick={goToVerdaccioWebsite} pointer={true} size="md" />
          {`/ ${window.VERDACCIO_VERSION}`}
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
