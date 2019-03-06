/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { DetailContext, DetailContextProps } from '../../../pages/Version';

import DependencyBlock from './DependencyBlock';

const useStyles = makeStyles(() => {
  return {
    container: {
      padding: 20,
    },
  };
});

const Dependencies: React.FC = () => {
  const classes = useStyles();

  const renderContent: React.FC<DetailContextProps> = ({
    packageMeta: {
      latest: { dependencies, devDependencies, peerDependencies },
    },
  }) => (
    <div className={classes.container}>
      {dependencies && <DependencyBlock dependencies={dependencies} title={'Dependencies'} />}
      {devDependencies && <DependencyBlock dependencies={devDependencies} title={'DevDependencies'} />}
      {peerDependencies && <DependencyBlock dependencies={peerDependencies} title={'PeerDependencies'} />}
    </div>
  );

  return <DetailContext.Consumer>{context => context && renderContent(context)}</DetailContext.Consumer>;
};

export default Dependencies;
