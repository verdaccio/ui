/* eslint-disable react/jsx-max-depth */

/* eslint-disable react/jsx-pascal-case */
import styled from '@emotion/styled';
import FlagsIcon from 'country-flag-icons/react/3x2';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Earth } from 'verdaccio-ui/components/Icons';
import Logo from 'verdaccio-ui/components/Logo';
import { Theme } from 'verdaccio-ui/design-tokens/theme';
import { useConfig } from 'verdaccio-ui/providers/config';
import { goToVerdaccioWebsite } from 'verdaccio-ui/utils/windows';

import { Inner, Left, Love, Right, Wrapper } from './styles';

/* eslint-disable react/jsx-key */
const Footer = () => {
  const { t } = useTranslation();
  const { configOptions } = useConfig();
  return (
    <Wrapper>
      <Inner>
        <Left>
          <Trans components={[<Love />]} i18nKey="footer.made-with-love-on" />
          <ToolTip>
            <StyledEarth />
            <Flags>
              <Icon>
                <FlagsIcon.ES />
              </Icon>
              <Icon>
                <FlagsIcon.NI />
              </Icon>
              <Icon>
                <FlagsIcon.IN />
              </Icon>
              <Icon>
                <FlagsIcon.BR />
              </Icon>
              <Icon>
                <FlagsIcon.CN />
              </Icon>
              <Icon>
                <FlagsIcon.AU />
              </Icon>
              <Icon>
                <FlagsIcon.DE />
              </Icon>
              <Icon>
                <FlagsIcon.TW />
              </Icon>
            </Flags>
          </ToolTip>
        </Left>
        <Right>
          {configOptions?.version && (
            <>
              {t('footer.powered-by')}
              <Logo onClick={goToVerdaccioWebsite} size="x-small" />
              {`/ ${configOptions.version}`}
            </>
          )}
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

const StyledEarth = styled(Earth)<{ theme?: Theme }>(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));

const Flags = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(8, max-content)',
  gridGap: theme.spacing(0, 1),
  position: 'absolute',
  background: theme?.palette.greyAthens,
  padding: '1px 4px',
  borderRadius: 3,
  height: 20,
  alignItems: 'center',
  visibility: 'hidden',
  top: -2,
  ':before': {
    content: "''",
    position: 'absolute',
    top: '29%',
    left: -4,
    marginLeft: -5,
    border: '5px solid',
    borderColor: `${theme?.palette.greyAthens} transparent transparent transparent`,
    transform: 'rotate(90deg)',
  },
}));

const Icon = styled('div')({
  width: '10px',
});

const ToolTip = styled('span')({
  position: 'relative',
  height: '18px',
  ':hover': {
    [`${Flags}`]: {
      visibility: 'visible',
    },
  },
});
