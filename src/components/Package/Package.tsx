import React from 'react';
import BugReport from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';

import { PackageMetaInterface, Author as PackageAuthor } from '../../../types/packageMeta';
import Tag from '../Tag';
import fileSizeSI from '../../utils/file-size';
import { formatDate, formatDateDistance } from '../../utils/package';
import Tooltip from '../../muiComponents/Tooltip';
import { isURL } from '../../utils/url';
import { downloadTarball } from '../ActionBar';
import ListItem from '../../muiComponents/ListItem';
import Grid from '../../muiComponents/Grid';

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
  PackageListItemText,
  PackageTitle,
  Published,
  TagContainer,
  Text,
  WrapperLink,
} from './styles';

interface Bugs {
  url: string;
}
interface Dist {
  unpackedSize: number;
  tarball: string;
}

export interface PackageInterface {
  name: string;
  version: string;
  time?: number | string;
  author: PackageAuthor;
  description?: string;
  keywords?: string[];
  license?: PackageMetaInterface['latest']['license'];
  homepage?: string;
  bugs?: Bugs;
  dist?: Dist;
}

const Package: React.FC<PackageInterface> = ({
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
  const renderVersionInfo = (): React.ReactNode =>
    version && (
      <OverviewItem>
        <Icon name={'version'} />
        {`v${version}`}
      </OverviewItem>
    );

  const renderAuthorInfo = (): React.ReactNode =>
    authorName && (
      <Author>
        <Avatar alt={authorName} src={authorAvatar} />
        <Details>
          <Text text={authorName} />
        </Details>
      </Author>
    );

  const renderFileSize = (): React.ReactNode =>
    dist &&
    dist.unpackedSize && (
      <OverviewItem>
        <Icon name={'filebinary'} />
        {fileSizeSI(dist.unpackedSize)}
      </OverviewItem>
    );

  const renderLicenseInfo = (): React.ReactNode =>
    license && (
      <OverviewItem>
        <Icon name="law" />
        {license}
      </OverviewItem>
    );

  const renderPublishedInfo = (): React.ReactNode =>
    time && (
      <OverviewItem>
        <Icon name="time" />
        <Published>{`Published on ${formatDate(time)} •`}</Published>
        {`${formatDateDistance(time)} ago`}
      </OverviewItem>
    );

  const renderHomePageLink = (): React.ReactNode =>
    homepage &&
    isURL(homepage) && (
      <a href={homepage} target={'_blank'}>
        <Tooltip aria-label={'Homepage'} title={'Visit homepage'}>
          <IconButton aria-label={'Homepage'}>
            <HomeIcon />
          </IconButton>
        </Tooltip>
      </a>
    );

  const renderBugsLink = (): React.ReactNode =>
    bugs &&
    bugs.url &&
    isURL(bugs.url) && (
      <a href={bugs.url} target={'_blank'}>
        <Tooltip aria-label={'Bugs'} title={'Open an issue'}>
          <IconButton aria-label={'Bugs'}>
            <BugReport />
          </IconButton>
        </Tooltip>
      </a>
    );

  const renderDownloadLink = (): React.ReactNode =>
    dist &&
    dist.tarball &&
    isURL(dist.tarball) && (
      // eslint-disable-next-line
      <a onClick={downloadTarball(dist.tarball.replace(`https://registry.npmjs.org/`, window.location.href))} target={'_blank'}>
        <Tooltip aria-label={'Download the tar file'} title={'Download tarball'}>
          <IconButton aria-label={'Download'}>
            <DownloadIcon />
          </IconButton>
        </Tooltip>
      </a>
    );

  const renderPrimaryComponent = (): React.ReactNode => {
    return (
      <Grid container={true} item={true} xs={12}>
        <Grid item={true} xs={true}>
          <WrapperLink to={`/-/web/detail/${packageName}`}>
            <PackageTitle className="package-title">{packageName}</PackageTitle>
          </WrapperLink>
        </Grid>
        <GridRightAligned item={true} xs={true}>
          {renderHomePageLink()}
          {renderBugsLink()}
          {renderDownloadLink()}
        </GridRightAligned>
      </Grid>
    );
  };

  const renderSecondaryComponent = (): React.ReactNode => {
    const tags = keywords.sort().map((keyword, index) => <Tag key={index}>{keyword}</Tag>);
    return (
      <>
        <Description component={'span'}>{description}</Description>
        {tags.length > 0 && <TagContainer>{tags}</TagContainer>}
      </>
    );
  };

  const renderPackageListItemText = (): React.ReactNode => (
    <PackageListItemText
      className="package-link"
      // @ts-ignore
      component="div"
      primary={renderPrimaryComponent()}
      secondary={renderSecondaryComponent()}
    />
  );

  return (
    <PackageList className={'package'}>
      <ListItem alignItems={'flex-start'}>{renderPackageListItemText()}</ListItem>
      <ListItem alignItems={'flex-start'}>
        {renderAuthorInfo()}
        {renderVersionInfo()}
        {renderPublishedInfo()}
        {renderFileSize()}
        {renderLicenseInfo()}
      </ListItem>
    </PackageList>
  );
};

export default Package;
