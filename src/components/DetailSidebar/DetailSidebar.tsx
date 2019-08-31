import React, { ReactElement } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';

import { ActionBar } from '../ActionBar/ActionBar';
import Author from '../Author';
import Developers from '../Developers';
import Dist from '../Dist/Dist';
import Engine from '../Engines/Engines';
import Install from '../Install';
import Repository from '../Repository/Repository';

import { DetailContext } from '../../pages/Version';

import { TitleListItem, TitleListItemText } from './styles';

const renderCopyCLI = () => <Install />;
const renderMaintainers = () => <Developers type="maintainers" />;
const renderContributors = () => <Developers type="contributors" />;
const renderRepository = () => <Repository />;
const renderAuthor = () => <Author />;
const renderEngine = () => <Engine />;
const renderDist = () => <Dist />;
const renderActionBar = () => <ActionBar />;
const renderTitle = (packageName, packageMeta) => {
  return (
    <List className="detail-info">
      <TitleListItem alignItems="flex-start" button={true}>
        <TitleListItemText primary={<b>{packageName}</b>} secondary={packageMeta.latest.description} />
      </TitleListItem>
    </List>
  );
};

function renderSideBar(packageName, packageMeta): ReactElement<HTMLElement> {
  return (
    <div className={'sidebar-info'}>
      <Card>
        <CardContent>
          {renderTitle(packageName, packageMeta)}
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

const DetailSidebar = () => {
  const { packageName, packageMeta } = React.useContext(DetailContext);

  return renderSideBar(packageName, packageMeta);
};

export default DetailSidebar;
