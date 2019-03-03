/* eslint no-unused-vars: 0 */

import React from 'react';

import { DetailContextConsumer } from '../../pages/version';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CopyToClipBoard from '../CopyToClipBoard';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

interface Props {
  name: string
  email: string
  url: string
  avatar: string
}

const Authors: React.FC<Props> = ({ name, email, url, avatar }) => {

  const renderAvatar = ({name, email, url, avatar}: Avatar) => (
    <>
      <Avatar aria-label={name} src={avatar} />
      <Typography color={'textPrimary'} gutterBottom={true} variant={'caption'}>
        {name}
      </Typography>
    </>
  )

  const renderAuthor = ({ packageMeta }) => {
    const { author } = packageMeta.latest;

    if (!author) {
      return null;
    }

    return (
      <Card>
        <CardContent>{renderAvatar(author)}</CardContent>
      </Card>
    );
  };

  return (
    <DetailContextConsumer>
      {(context: any) => {
        return renderAuthor(context);
      }}
    </DetailContextConsumer>
  );
}

export default Authors

// class Authors extends React.Component<any, any> {
//   render() {
//     return (
//       <DetailContextConsumer>
//         {(context) => {
//           return this.renderAuthor(context);
//         }}
//       </DetailContextConsumer>
//     );
//   }

//   renderAuthor = ({packageMeta}) => {
//     const {author} = packageMeta.latest;

//     if (!author) {
//       return null;
//     }

//     return (
//       <Card>
//         <CardContent>{this.renderAvatar(author)}</CardContent>
//       </Card>
//     );
//   };

//   renderAvatar = ({name, email, url, avatar}: Avatar) => {
//     return (
//       <>
//         <Avatar aria-label={name} src={avatar} />
//         <Typography color={'textPrimary'} gutterBottom={true} variant={'caption'}>
//           {name}
//         </Typography>
//       </>
//     );
//   };
// }

// export default Authors;
