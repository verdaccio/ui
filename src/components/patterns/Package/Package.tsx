/**
 * @prettier
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';

import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

import Tag from '../../primitives/Tag';
import Icon from '../../primitives/Icon';
import Avatar from '../../primitives/Avatar';
import Heading from '../../primitives/Heading';
import { formatDate, formatDateDistance } from '../../../utils/package';

const getInitialsName = (name: string) =>
  name
    .split(' ')
    .reduce((accumulator, currentValue) => accumulator.charAt(0) + currentValue.charAt(0), '')
    .toUpperCase();

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '100%',
    padding: 16,
    cursor: 'pointer',
  },
  avatar: {
    marginRight: 8,
  },
  tag: {
    color: theme.palette.grey[500],
    marginLeft: 8,
    paddingLeft: 16,
    position: 'relative',
    '&::before': {
      content: "'•'",
      position: 'absolute',
      left: 0,
    },
  },
  licenseInfoIcon: {
    marginTop: 4,
    marginRight: 5,
  },
  publishedInfoIcon: {
    marginRight: 5,
  },
}));

interface Props {
  history?: any;
  name: string;
  version: string;
  time: string;
  author: Author;
  description?: string;
  keywords?: string[];
  license?: string;
}

interface Author {
  name: string;
  avatar: string;
  email: string;
}

const Package: React.FC<Props> = ({ history, name: label, version, time, author: { name, avatar }, description, license, keywords = [] }) => {
  const classes = useStyles();

  const renderMainInfo = () => (
    // @ts-ignore
    <Box display="flex" alignItems="center">
      <Heading variant="subtitle1" color="blue" bold>
        {label}
      </Heading>
      <Heading variant="subtitle2" className={classes.tag} bold>
        {`v${version}`}
      </Heading>
    </Box>
  );

  const renderLicenseInfo = () =>
    license && (
      // @ts-ignore
      <Box display="flex" alignItems="center">
        <Icon name={'license'} pointer={true} className={classes.licenseInfoIcon} />
        <Heading>{license}</Heading>
      </Box>
    );

  const renderPublishedInfo = () => (
    // @ts-ignore
    <Box display="flex" alignItems="center">
      <Icon name={'time'} pointer={true} className={classes.publishedInfoIcon} />
      <div>{`Published on ${formatDate(time)} •`}</div>
      {`${formatDateDistance(time)} ago`}
    </Box>
  );

  const renderAuthorInfo = () => (
    // @ts-ignore
    <Box display="flex" alignItems="center">
      <Avatar alt={name} src={avatar} className={classes.avatar}>
        {!avatar && getInitialsName(name)}
      </Avatar>
      <Heading bold>{name}</Heading>
    </Box>
  );

  const renderDescription = () => description && <Heading variant="body2">{description}</Heading>;

  const renderKeywords = () => (
    // @ts-ignore
    <Box display="flex" alignItems="center" flexWrap="wrap">
      {keywords.map(keyword => (
        <Chip label={keyword} />
      ))}
    </Box>
  );

  const handleGoToPackageDetail = () => {
    history.push(`/-/web/detail/${label}`);
  };

  return (
    <ListItem>
      <Card className={classes.card} onClick={handleGoToPackageDetail}>
        <Box display="flex" justifyContent="space-between">
          {renderMainInfo()}
          <Box display="flex">
            {renderLicenseInfo()}
            {renderPublishedInfo()}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          {renderAuthorInfo()}
          {renderDescription()}
          {renderKeywords()}
        </Box>
      </Card>
    </ListItem>
  );
};

export default Package;
