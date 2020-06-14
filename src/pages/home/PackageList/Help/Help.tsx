import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { getRegistryURL } from '../../../../utils/url';
import CopyToClipBoard from '../../../../components/CopyToClipBoard';
import Button from '../../../../components/Button';
import CardContent from '../../../../components/CardContent';
import { default as Typography } from '../../../../components/Heading';
import CardActions from '../../../../components/CardActions';
import Text from '../../../../components/Text';

import { CardStyled as Card, HelpTitle } from './styles';

export const HELP_TITLE = 'No Package Published Yet.';
export const COMPONENT_HELP_ID = 'help-card__title';

function renderHeadingClipboardSegments(title: string, text: string): React.ReactNode {
  return (
    <Fragment>
      <Text variant={'body1'}>{title}</Text>
      <CopyToClipBoard text={text} />
    </Fragment>
  );
}

const Help: React.FC = () => {
  const registryUrl = getRegistryURL();
  const { t } = useTranslation();

  return (
    <Card id="help-card">
      <CardContent>
        <Typography component="h2" gutterBottom={true} id={COMPONENT_HELP_ID} variant="h5">
          {t('help.title')}
        </Typography>
        <HelpTitle color="textSecondary" gutterBottom={true}>
          {t('help.sub-title')}
        </HelpTitle>
        {renderHeadingClipboardSegments(t('help.first-step'), t('help.first-step-command-line', { registryUrl }))}
        {renderHeadingClipboardSegments(t('help.second-step'), t('help.second-step-command-line', { registryUrl }))}
        <Text variant="body2">{t('help.third-step')}</Text>
      </CardContent>
      <CardActions>
        <Button color="primary" href="https://verdaccio.org/docs/en/installation" size="small">
          {t('button.learn-more')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Help;
