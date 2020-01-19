import React from 'react';

import { Versions, Time } from '../../../types/packageMeta';
import { formatDateDistance } from '../../utils/package';
import List from '../../muiComponents/List';
import ListItem from '../../muiComponents/ListItem';

import { Spacer, ListItemText, StyledLink } from './styles';

export const NOT_AVAILABLE = 'Not available';

interface Props {
  versions: Versions;
  packageName: string;
  time: Time;
}

const VersionsHistoryList: React.FC<Props> = ({ versions, packageName, time }) => (
  <List dense={true}>
    {Object.keys(versions)
      .reverse()
      .map(version => (
        <ListItem className="version-item" key={version}>
          <StyledLink to={`/-/web/detail/${packageName}/v/${version}`}>
            <ListItemText>{version}</ListItemText>
          </StyledLink>
          <Spacer />
          <ListItemText>{time[version] ? formatDateDistance(time[version]) : NOT_AVAILABLE}</ListItemText>
        </ListItem>
      ))}
  </List>
);

export default VersionsHistoryList;
