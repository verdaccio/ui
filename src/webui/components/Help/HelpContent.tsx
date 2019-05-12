/**
 * @prettier
 */

import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';

import CopyToClipBoard from '../CopyToClipBoard'


interface Props {
  helpSteps: Array<HelpStep>;
}

export interface HelpStep {
  title: string
  command?: string
}

const HelpContent: React.FC<Props> = ({ helpSteps }) => (
  <>
    {helpSteps.map(({ title, command }) => (
      <Fragment key={title}>
        <Typography variant='body2'>{title}</Typography>
        <CopyToClipBoard text={command!} />
      </Fragment>
    ))}
  </>
 )

export default HelpContent;
