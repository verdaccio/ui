import React, { ReactElement } from 'react';

import ActionBar from '../ActionBar';
import Author from '../Author';
import Developers from '../Developers';
import Dist from '../Dist/Dist';
import Engine from '../Engines/Engines';
import Install from '../Install';
import Repository from '../Repository/Repository';
import { DetailContext } from '../../pages/Version';
import List from '../../muiComponents/List';
import Card from '../../muiComponents/Card';
import CardContent from '../../muiComponents/CardContent';

import { TitleListItem, TitleListItemText, PackageDescription, PackageVersion } from './styles';

const renderLatestDescription = (description, version, isLatest = true): JSX.Element => {
  return (
    <>
      <PackageDescription>{description}</PackageDescription>
      {version ? (
        <PackageVersion>
          <small>{`${isLatest ? 'Latest v' : 'v'}${version}`}</small>
        </PackageVersion>
      ) : null}
    </>
  );
};

const renderCopyCLI = (): JSX.Element => <Install />;
const renderMaintainers = (): JSX.Element => <Developers type="maintainers" />;
const renderContributors = (): JSX.Element => <Developers type="contributors" />;
const renderRepository = (): JSX.Element => <Repository />;
const renderAuthor = (): JSX.Element => <Author />;
const renderEngine = (): JSX.Element => <Engine />;
const renderDist = (): JSX.Element => <Dist />;
const renderActionBar = (): JSX.Element => <ActionBar />;
const renderTitle = (packageName, packageVersion, packageMeta): JSX.Element => {
  const version = packageVersion ? packageVersion : packageMeta.latest.version;
  const isLatest = typeof packageVersion === 'undefined';

  return (
    <List className="detail-info">
      <TitleListItem alignItems="flex-start" button={true}>
        <TitleListItemText primary={<b>{packageName}</b>} secondary={renderLatestDescription(packageMeta.latest.description, version, isLatest)} />
      </TitleListItem>
    </List>
  );
};

function renderSideBar(packageName, packageVersion, packageMeta): ReactElement<HTMLElement> {
  return (
    <div className={'sidebar-info'}>
      <Card>
        <CardContent>
          {renderTitle(packageName, packageVersion, packageMeta)}
          {renderActionBar()}
          {renderCopyCLI()}
          {renderRepository()}
          {renderEngine()}
          {renderDist()}
          {renderAuthor()}
          {renderMaintainers()}
          {renderContributors()}
        </CardContent>
      </Card>
    </div>
  );
}

const DetailSidebar = (): JSX.Element => {
  const { packageName, packageMeta, packageVersion } = React.useContext(DetailContext);

  return renderSideBar(packageName, packageVersion, packageMeta);
};

export default DetailSidebar;
