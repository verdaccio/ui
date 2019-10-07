import React, { FC, Fragment } from 'react';
import Add from '@material-ui/icons/Add';

import { DetailContext } from '../../pages/Version';
import { AvatarTooltip } from '../AvatarTooltip';

import { Details, Heading, Content, Fab } from './styles';

export type DevelopersType = 'contributors' | 'maintainers';

interface Props {
  type: DevelopersType;
  visibleMax?: number;
}

export const VISIBLE_MAX = 6;

const Developers: FC<Props> = ({ type, visibleMax }) => {
  const [visibleDevs, setVisibleDevs] = React.useState<number>(visibleMax || VISIBLE_MAX);
  const { packageMeta } = React.useContext(DetailContext);

  const handleLoadMore = (): void => {
    setVisibleDevs(visibleDevs + VISIBLE_MAX);
  };

  const renderDeveloperDetails = ({ name, avatar, email }, packageMeta): JSX.Element => {
    const { name: packageName, version } = packageMeta.latest;

    return <AvatarTooltip avatar={avatar} email={email} name={name} packageName={packageName} version={version} />;
  };

  const renderDevelopers = (developers, packageMeta): JSX.Element => {
    const listVisibleDevelopers = developers.slice(0, visibleDevs);

    return (
      <Fragment>
        <Heading variant={'subtitle1'}>{type}</Heading>
        <Content>
          {listVisibleDevelopers.map(developer => (
            <Details key={developer.email}>{renderDeveloperDetails(developer, packageMeta)}</Details>
          ))}
          {visibleDevs < developers.length && (
            <Fab onClick={handleLoadMore} size="small">
              <Add />
            </Fab>
          )}
        </Content>
      </Fragment>
    );
  };

  const developerList = packageMeta && packageMeta.latest[type];
  if (!developerList || developerList.length === 0) {
    return null;
  }

  return renderDevelopers(developerList, packageMeta);
};

export default Developers;
