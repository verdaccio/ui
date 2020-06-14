import React from 'react';

import { DistTags } from '../../../../../types/packageMeta';
import ListItem from '../../../../components/ListItem';
import List from '../../../../components/List';

import { Spacer, ListItemText } from './styles';

interface Props {
  tags: DistTags;
}

const VersionsTagList: React.FC<Props> = ({ tags }) => (
  <List dense={true}>
    {Object.keys(tags)
      .reverse()
      .map(tag => (
        <ListItem className="version-item" key={tag}>
          <ListItemText>{tag}</ListItemText>
          <Spacer />
          <ListItemText>{tags[tag]}</ListItemText>
        </ListItem>
      ))}
  </List>
);

export default VersionsTagList;
