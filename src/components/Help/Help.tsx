import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';

import { getRegistryURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';
import Button from '../../muiComponents/Button';

import { CardStyled as Card, HelpTitle } from './styles';

function renderHeadingClipboardSegments(title: string, text: string): React.ReactNode {
  return (
    <Fragment>
      <Typography variant={'body1'}>{title}</Typography>
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
        <Typography variant="body2">{'3. Refresh this page.'}</Typography>
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
