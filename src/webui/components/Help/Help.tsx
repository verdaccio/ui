/**
 * @prettier
 */

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { getRegistryURL } from '../../utils/url';

import HelpHeading from './HelpHeading';
import HelpContent, { HelpStep } from './HelpContent';

const useStyles = makeStyles({
  card: {
    width: 600,
    margin: 'auto',
  },
});

const Help: React.FC = () => {
  const classes = useStyles();
  const registryUrl = getRegistryURL();
  const publishPackageSteps: Array<HelpStep> = [
    {
      title: 'Login',
      command: `npm adduser --registry ${registryUrl}`,
    },
    {
      title: 'Publish',
      command: `npm publish --registry ${registryUrl}`,
    },
    {
      title: 'Refresh this page',
      command: undefined,
    },
  ];

  return (
    <Card className={classes.card}>
      <CardContent>
        <HelpHeading />
        <HelpContent helpSteps={publishPackageSteps} />
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
