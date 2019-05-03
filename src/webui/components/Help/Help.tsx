/**
 * @prettier
 */

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { getRegistryURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';

import { CardStyled as Card, HelpTitle } from './styles';

function renderHeadingClipboardSegments(title: string, text: string) {
  return (
    <>
      <Typography variant={'body2'}>{title}</Typography>
      <CopyToClipBoard text={text} />
    </>
  );
}

const Help: React.FC = () => {
  const registryUrl = getRegistryURL();

  return (
    <Card id="help-card">
      <CardContent>
        <Typography component="h2" gutterBottom id="help-card__title" variant="headline">
          No Package Published Yet.
        </Typography>
        <HelpTitle color="textSecondary" gutterBottom>
          To publish your first package just:
        </HelpTitle>
        {renderHeadingClipboardSegments('1. Login', `npm adduser --registry ${registryUrl}`)}
        {renderHeadingClipboardSegments('2. Publish', `npm publish --registry ${registryUrl}`)}
        <Typography variant="body2">3. Refresh this page.</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" href="https://verdaccio.org/docs/en/installation" size="small" target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Help;
