import React, { useContext } from 'react';

import { DetailContext } from '../../pages/Version';
import NoItems from '../NoItems';
import { formatDateDistance } from '../../utils/package';
import List from '../../muiComponents/List';
import ListItem from '../../muiComponents/ListItem';

import { Heading, Spacer, ListItemText } from './styles';

const UpLinks: React.FC = () => {
  const { packageMeta } = useContext(DetailContext);

  if (!packageMeta || !packageMeta._uplinks || !packageMeta.latest) {
    return null;
  }

  const { _uplinks: uplinks, latest } = packageMeta;

  if (Object.keys(uplinks).length === 0) {
    return <NoItems text={`${latest.name} has no uplinks.`} />;
  }

  return (
    <>
      <Heading variant="subtitle1">{'Uplinks'}</Heading>
      <List>
        {Object.keys(uplinks)
          .reverse()
          .map(name => (
            <ListItem key={name}>
              <ListItemText>{name}</ListItemText>
              <Spacer />
              <ListItemText>{`${formatDateDistance(uplinks[name].fetched)} ago`}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default UpLinks;
