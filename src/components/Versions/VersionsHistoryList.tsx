import React from 'react';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import { Versions, Time } from '../../../types/packageMeta';
import { formatDateDistance } from '../../utils/package';
import ListItem from '../../muiComponents/ListItem';

import { Spacer, ListItemText } from './styles';

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
          <Link component={RouterLink} to={`/-/web/detail/${packageName}/v/${version}`}>
            <ListItemText>{version}</ListItemText>
          </Link>
          <Spacer />
          <ListItemText>{time[version] ? `${formatDateDistance(time[version])} ago` : NOT_AVAILABLE}</ListItemText>
        </ListItem>
      ))}
  </List>
);

export default VersionsHistoryList;
