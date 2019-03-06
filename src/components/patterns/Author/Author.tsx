/**
 * @prettier
 */

/* eslint no-unused-vars: 0 */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { DetailContext, DetailContextProps } from '../../../pages/Version';

interface Props {
  name: string;
  avatar?: string;
}

const Author: React.FC = () => {
  const renderAuthor: React.FC<DetailContextProps> = ({
    packageMeta: {
      latest: { author },
    },
  }) =>
    author ? (
      <Card>
        <CardContent>{renderAvatar(author)}</CardContent>
      </Card>
    ) : null;

  const renderAvatar: React.FC<Props> = ({ name, avatar }) => {
    return (
      <>
        <Avatar aria-label={name} src={avatar} />
        <Typography color={'textPrimary'} gutterBottom={true} variant={'caption'}>
          {name}
        </Typography>
      </>
    );
  };

  return <DetailContext.Consumer>{context => context && renderAuthor(context)}</DetailContext.Consumer>;
};

export default Author;
