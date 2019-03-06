/**
 * @prettier
 */
import React from 'react';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';

import { DetailContext } from '../../../pages/Version';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';

const Spacer = styled('div')`
  flex: 1 1 auto;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  height: 0.5em;
`;

interface Props {
  packageMeta: {
    uplinks: any;
  };
}

const UpLinks: React.FC = () => {
  const renderUpLinksList: React.FC<Props> = uplinks => (
    <List>
      {Object.keys(uplinks)
        .reverse()
        .map(name => (
          <ListItem key={name}>
            <ListItemText>{name}</ListItemText>
            <Spacer />
            {/* <ListItemText>{`${formatDateDistance(uplinks[name].fetched)} ago`}</ListItemText> */}
          </ListItem>
        ))}
    </List>
  );

  const renderContent: React.FC<Props> = ({ packageMeta: { uplinks } }) =>
    uplinks && (
      <>
        <Typography variant={'subheading'}>{'Uplinks'}</Typography>
        {renderUpLinksList(uplinks)}
      </>
    );

  return <DetailContext.Consumer>{context => context && renderContent(context)}</DetailContext.Consumer>;
};

export default UpLinks;
