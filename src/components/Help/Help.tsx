import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React, { Fragment } from 'react';

import { getRegistryURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';
import Button from '../../muiComponents/Button';
import { default as Typography } from '../../muiComponents/Heading';
import Text from '../../muiComponents/Text';

import { CardStyled as Card, HelpTitle } from './styles';

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

  return (
    <Card id="help-card">
      <CardContent>
        <Typography component="h2" gutterBottom={true} id="help-card__title" variant="h5">
          {'No Package Published Yet.'}
        </Typography>
        <HelpTitle color="textSecondary" gutterBottom={true}>
          {'To publish your first package just:'}
        </HelpTitle>
        {renderHeadingClipboardSegments('1. Login', `npm adduser --registry ${registryUrl}`)}
        {renderHeadingClipboardSegments('2. Publish', `npm publish --registry ${registryUrl}`)}
        <Text variant="body2">{'3. Refresh this page.'}</Text>
      </CardContent>
      <CardActions>
        <Button color="primary" href="https://verdaccio.org/docs/en/installation" size="small">
          {'Learn More'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Help;
