import React from 'react';

import BugReport from '@material-ui/icons/BugReport';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import Tag from '../Tag';
import fileSizeSI from '../../utils/file-size';
import { formatDate, formatDateDistance } from '../../utils/package';

interface Author {
  name: string;
  avatar?: string;
  email?: string;
}

interface Bugs {
  url: string;
}
interface Dist {
  unpackedSize: number;
}

interface Props {
  name: string;
  version: string;
  time: string;
  author: Author;
  description?: string;
  keywords?: string[];
  license?: string | null;
  homepage?: string;
  bugs?: Bugs;
  dist?: Dist;
}

import {
  Author,
  Avatar,
  Description,
  Details,
  GridRightAligned,
  Icon,
  IconButton,
  OverviewItem,
  PackageList,
  PackageListItem,
  PackageListItemText,
  PackageTitle,
  Published,
  TagContainer,
  Text,
  WrapperLink,
} from './styles';
import { isURL } from '../../utils/url';

const Package: React.FC<Props> = ({
  author: { name: authorName, avatar: authorAvatar },
  bugs,
  description,
  dist,
  homepage,
  keywords = [],
  license,
  name: packageName,
  time,
  version,
}) => {
  const renderVersionInfo = () =>
    version && (
      <OverviewItem>
        <Icon name={'version'} />
        {`v${version}`}
      </OverviewItem>
    );

  const renderAuthorInfo = () =>
    authorName && (
      <Author>
        <Avatar alt={authorName} src={authorAvatar} />
        <Details>
          <Text text={authorName} />
        </Details>
      </Author>
    );

  const renderFileSize = () =>
    dist &&
    dist.unpackedSize && (
      <OverviewItem>
        <Icon name={'filebinary'} />
        {fileSizeSI(dist.unpackedSize)}
      </OverviewItem>
    );

  const renderLicenseInfo = () =>
    license && (
      <OverviewItem>
        <Icon name="law" />
        {license}
      </OverviewItem>
    );

  const renderPublishedInfo = () =>
    time && (
      <OverviewItem>
        <Icon name="time" />
        <Published>{`Published on ${formatDate(time)} •`}</Published>
        {`${formatDateDistance(time)} ago`}
      </OverviewItem>
    );

  const renderHomePageLink = () =>
    homepage &&
    isURL(homepage) && (
      <a href={homepage} target={'_blank'}>
        <Tooltip aria-label={'Homepage'} title={'Visit homepage'}>
          <IconButton aria-label={'Homepage'}>
            {/* eslint-disable-next-line react/jsx-max-depth */}
            <HomeIcon />
          </IconButton>
        </Tooltip>
      </a>
    );

  const renderBugsLink = () =>
    bugs &&
    bugs.url &&
    isURL(bugs.url) && (
      <a href={bugs.url} target={'_blank'}>
        <Tooltip aria-label={'Bugs'} title={'Open an issue'}>
          <IconButton aria-label={'Bugs'}>
            {/* eslint-disable-next-line react/jsx-max-depth */}
            <BugReport />
          </IconButton>
        </Tooltip>
      </a>
    );

  const renderPrimaryComponent = () => {
    return (
      <Grid container={true} item={true} xs={12}>
        <Grid item={true} xs={true}>
          <WrapperLink to={`/-/web/detail/${packageName}`}>
            {/* eslint-disable-next-line react/jsx-max-depth */}
            <PackageTitle>{packageName}</PackageTitle>
          </WrapperLink>
        </Grid>
        <GridRightAligned item={true} xs={true}>
          {renderHomePageLink()}
          {renderBugsLink()}
        </GridRightAligned>
      </Grid>
    );
  };

  const renderSecondaryComponent = () => {
    //@ts-ignore
    const tags = keywords.sort().map((keyword, index) => <Tag key={index}>{keyword}</Tag>);
    return (
      <>
        <Description component={'span'}>{description}</Description>
        {tags.length > 0 && <TagContainer>{tags}</TagContainer>}
      </>
    );
  };

  const renderPackageListItemText = () => (
    //@ts-ignore
    <PackageListItemText className="package-link" component="div" primary={renderPrimaryComponent()} secondary={renderSecondaryComponent()} />
  );

  return (
    <PackageList className={'package'}>
      <ListItem alignItems={'flex-start'}>{renderPackageListItemText()}</ListItem>
      <PackageListItem alignItems={'flex-start'}>
        {renderAuthorInfo()}
        {renderVersionInfo()}
        {renderPublishedInfo()}
        {renderFileSize()}
        {renderLicenseInfo()}
      </PackageListItem>
    </PackageList>
  );
};

export default Package;
