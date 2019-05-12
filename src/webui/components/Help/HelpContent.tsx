/**
 * @prettier
 */

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import CopyToClipBoard from '../CopyToClipBoard'
import OrderedList from '../OrderedList'

interface Props {
  helpSteps: Array<HelpStep>;
}

export interface HelpStep {
  title: string
  command?: string
}

const useStyles = makeStyles({
  item: {
   width: '100%'
  },
});

const HelpContent: React.FC<Props> = ({ helpSteps }) => {
  const classes = useStyles()
  return (
    <OrderedList>
      {helpSteps.map(({ title, command }) => (
        <div className={classes.item} key={title}>
          <Typography variant='body2'>{title}</Typography>
          {command && (
            <CopyToClipBoard text={command} />
          )}
        </div>
      ))}
    </OrderedList>
   )
}

export default HelpContent;
