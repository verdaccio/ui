import React from 'react';
import BugReport from '@material-ui/icons/BugReport';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import HomeIcon from '@material-ui/icons/Home';
import { useTranslation } from 'react-i18next';

import { PackageMetaInterface, Author as PackageAuthor } from '../../../../../types/packageMeta';
import fileSizeSI from '../../../../utils/file-size';
import { formatDate, formatDateDistance, getAuthorName } from '../../../../utils/package';
import Tooltip from '../../../../components/Tooltip';
import Link from '../../../../components/Link';
import { isURL } from '../../../../utils/url';
import { downloadTarball } from '../../../../components/ActionBar';
import ListItem from '../../../../components/ListItem';
import Grid from '../../../../components/Grid';

import Tag from './Tag';
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
  const { t } = useTranslation();

  const renderVersionInfo = (): React.ReactNode =>
    version && (
      <OverviewItem>
        <Icon name={'version'} />
        {t('package.version', { version })}
      </OverviewItem>
    );

  const renderAuthorInfo = (): React.ReactNode =>
    authorName && (
      <Author>
        <Avatar alt={authorName} src={authorAvatar} />
        <Details>
          <Text text={getAuthorName(authorName)} />
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
        <Published>{t('package.published-on', { time: formatDate(time) })}</Published>
        {formatDateDistance(time)}
      </OverviewItem>
    );

  const renderHomePageLink = (): React.ReactNode =>
    homepage &&
    isURL(homepage) && (
      <Link external={true} to={homepage}>
        <Tooltip aria-label={t('package.homepage')} title={t('package.visit-home-page')}>
          <IconButton aria-label={t('package.homepage')}>
            <HomeIcon />
          </IconButton>
        </Tooltip>
      </Link>
    );

  const renderBugsLink = (): React.ReactNode =>
    bugs &&
    bugs.url &&
    isURL(bugs.url) && (
      <Link external={true} to={bugs.url}>
        <Tooltip aria-label={t('package.bugs')} title={t('package.open-an-issue')}>
          <IconButton aria-label={t('package.bugs')}>
            <BugReport />
          </IconButton>
        </Tooltip>
      </Link>
    );

  const renderDownloadLink = (): React.ReactNode =>
    dist &&
    dist.tarball &&
    isURL(dist.tarball) && (
      // eslint-disable-next-line
      <Link to="#" external={true} onClick={downloadTarball(dist.tarball.replace(`https://registry.npmjs.org/`, window.location.href))}>
        <Tooltip aria-label={t('package.download', { what: t('package.the-tar-file') })} title={t('package.tarball')}>
          <IconButton aria-label={t('package.download')}>
            <DownloadIcon />
          </IconButton>
        </Tooltip>
      </Link>
    );

  const renderPrimaryComponent = (): React.ReactNode => {
    return (
      <Grid container={true} item={true} xs={12}>
        <Grid item={true} xs={true}>
          <WrapperLink to={`/-/web/detail/${packageName}`}>
            <PackageTitle className="package-title">{packageName}</PackageTitle>
          </WrapperLink>
        </Grid>
        <GridRightAligned alignItems="center" container={true} item={true} justify="flex-end" xs={true}>
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
