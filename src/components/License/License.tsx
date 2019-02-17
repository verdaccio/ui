/* eslint no-unused-vars: 0 */

import React from 'react';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';
import Card from '@material-ui/core/Card/index';
import CardContent from '@material-ui/core/CardContent/index';
import Avatar from '@material-ui/core/Avatar';
import Notes from '@material-ui/icons/Notes';
import Typography from "@material-ui/core/Typography/index";

const License: React.FC = () => {

  const renderLicense = (license: string) => {
    return (
      <>
        <Notes style={{ fontSize: 38 }} />
        <Typography color={"textPrimary"} gutterBottom={true} variant={'caption'}>
          {license}
        </Typography>
      </>
    );
  }

  const renderAuthor: React.FC<DetailContextProps> = ({ packageMeta: { latest: { license } } }) => (
    license ? (
      <Card>
        <CardContent style={{ textAlign: 'center'}}>
          {renderLicense(license)}
        </CardContent> 
      </Card>
    ) : null
  )

  return (
    <DetailContext.Consumer>
      {(context) => context && renderAuthor(context)}
    </DetailContext.Consumer>
  )
}


export default License;
