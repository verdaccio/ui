/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';
import DependencyDetail from './DependencyDetail';

interface Props {
  title: string;
  dependencies: any;
}

const useStyles = makeStyles(() => {
  return {
    container: {
      marginBottom: 25,
    },
  };
});

const DependencyBlock: React.FC<Props> = ({ title, dependencies }) => {
  const classes = useStyles();
  const deps = Object.entries(dependencies);

  const renderTags = (deps: any, enableLoading: React.Dispatch<React.SetStateAction<boolean>>) =>
    deps.map(([name, version]: any) => <DependencyDetail key={name} name={name} onLoading={enableLoading} version={version} />);

  const rendeContent: React.FC<DetailContextProps> = ({ enableLoading }) => (
    <Card className={classes.container}>
      <CardContent>
        <Typography>{title}</Typography>
        {/* <Chip>
          <span>{renderTags(deps, enableLoading)}</span>
        </Chip> */}
      </CardContent>
    </Card>
  );
  return <DetailContext.Consumer>{context => context && rendeContent(context)}</DetailContext.Consumer>;
};

export default DependencyBlock;
