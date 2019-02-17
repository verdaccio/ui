/**
 * @prettier
 */

import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';

import CopyToClipBoard from '../CopyToClipBoard/CopyToClipBoard';
import { getRegistryURL } from '../../utils/url';

export const CardStyled = styled(Card)`
  && {
    width: 600px;
    margin: auto;
  }
`;

const Help: React.FC = () => {
  const registryUrl = getRegistryURL();

  const renderHeadingClipboardSegments = (title: string, text: string) => (
    <>
      <Typography variant={'body2'}>{title}</Typography>
      <CopyToClipBoard text={text} />
    </>
  );

  return (
    <Card id={'help-card'}>
      <CardContent>
        <Typography component={'h2'} gutterBottom={true} id={'help-card__title'} variant={'headline'}>
          {'No Package Published Yet.'}
        </Typography>
        <Typography color="primary" style={{ marginBottom: '20px' }}>
          {'To publish your first package just:'}
        </Typography>
        {renderHeadingClipboardSegments('1. Login', `$ npm adduser --registry ${registryUrl}`)}
        {renderHeadingClipboardSegments('2. Publish', `$ npm publish --registry ${registryUrl}`)}
        <Typography variant={'body2'}>{'3. Refresh this page.'}</Typography>
      </CardContent>
      <CardActions>
        <Button color={'primary'} href={'https://verdaccio.org/docs/en/installation'} size={'small'} target={'_blank'}>
          {'Learn More'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Help;
