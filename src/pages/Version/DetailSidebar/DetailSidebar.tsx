import styled from '@emotion/styled';
import React, { useContext } from 'react';

import ActionBar from '@verdaccio/components/ActionBar';
import Author from '@verdaccio/components/Author';
import Paper from '@verdaccio/components/Paper';
import { Theme } from '@verdaccio/design-tokens/theme';

import { DetailContext } from '..';

import DetailSidebarFundButton from './DetailSidebarFundButton';
import DetailSidebarTitle from './DetailSidebarTitle';
import Developers, { DeveloperType } from './Developers';
import Dist from './Dist';
import Engines from './Engines';
import Install from './Install';
import Repository from './Repository';

const DetailSidebar: React.FC = () => {
  const detailContext = useContext(DetailContext);

  const { packageMeta, packageName, packageVersion } = detailContext;

  if (!packageMeta || !packageName) {
    return null;
  }

  return (
    <StyledPaper className={'sidebar-info'}>
      <DetailSidebarTitle
        description={packageMeta.latest?.description}
        isLatest={typeof packageVersion === 'undefined'}
        packageName={packageName}
        version={packageVersion || packageMeta.latest.version}
      />
      <ActionBar />
      <Install />
      <DetailSidebarFundButton />
      <Repository />
      <Engines />
      <Dist />
      <Author />
      <Developers type={DeveloperType.MAINTAINERS} />
      <Developers type={DeveloperType.CONTRIBUTORS} />
    </StyledPaper>
  );
};

export default DetailSidebar;

const StyledPaper = styled(Paper)<{ theme?: Theme }>(({ theme }) => ({
  padding: theme?.spacing(3, 2),
}));
