import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Paper from '../../../components/Paper';
import ActionBar from '../../../components/ActionBar';
import Author from '../../../components/Author';
import { Theme } from '../../../design-tokens/theme';

import Developers, { DeveloperType } from './Developers';
import Dist from './Dist';
import Install from './Install';
import Engines from './Engines';
import Repository from './Repository';
import DetailSidebarTitle from './DetailSidebarTitle';
import DetailSidebarFundButton from './DetailSidebarFundButton';

import { DetailContext } from '..';

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
