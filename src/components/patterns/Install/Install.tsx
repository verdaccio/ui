/**
 * @prettier
 */

import React from 'react';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import CopyToClipBoard from '../CopyToClipBoard';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const Install: React.FC = () => {
  const renderCopyCLI: React.FC<DetailContextProps> = ({ packageName }) => (
    <Card>
      <CardContent>
        <CopyToClipBoard text={`npm install ${packageName}`} />
        <CopyToClipBoard text={`pnpm install ${packageName}`} />
        <CopyToClipBoard text={`yarn add ${packageName}`} />
        <CardActions>{renderDownloadButton()}</CardActions>
      </CardContent>
    </Card>
  );

  const renderDownloadButton = () => (
    <Button color={'primary'} size={'small'} variant={'contained'}>
      {'Download Tarball'}
    </Button>
  );

  return <DetailContext.Consumer>{context => context && renderCopyCLI(context)}</DetailContext.Consumer>;
};

export default Install;
