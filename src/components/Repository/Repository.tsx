/**
 * @prettier
 */

/* eslint no-unused-vars: 0 */
/* eslint react/jsx-max-depth: 0 */

import React from 'react';

import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import GitHub from '../../icons/GitHub';
import CopyToClipBoard from '../CopyToClipBoard';
import BugReport from '@material-ui/icons/BugReport';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';

// export const GridRepo = styled(Grid)`
//   align-items: center;
// `;

const Repository: React.FC = () => {
  const renderAuthor: React.FC<DetailContextProps> = ({
    packageMeta: {
      latest: { repository, bugs },
    },
  }) =>
    repository ? (
      <Card>
        <CardContent style={{ textAlign: 'center' }}>
          <Grid container={true} spacing={24}>
            {renderRepository(repository, bugs)}
          </Grid>
        </CardContent>
        <CardActions>
          <Button size={'small'}>{'Open Bugs'}</Button>
          <Button size={'small'}>{'Open Repository'}</Button>
        </CardActions>
      </Card>
    ) : null;

  const renderRepository = (repository: any, bugs: any) => (
    <>
      <Grid item={true} xs={3}>
        <GitHub />
      </Grid>
      <Grid item={true} xs={9}>
        <CopyToClipBoard text={repository.url} />
      </Grid>
    </>
  );

  return <DetailContext.Consumer>{context => context && renderAuthor(context)}</DetailContext.Consumer>;
};

export default Repository;
