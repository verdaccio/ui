import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { default as MuiTabs } from '../../../components/Tabs';
import Tab from '../../../components/Tab';
import { Theme } from '../../../design-tokens/theme';

interface Props {
  onChange: (event, newValue) => void;
  tabPosition: number;
}

const DetailContainerTabs: React.FC<Props> = ({ tabPosition, onChange }) => {
  const { t } = useTranslation();

  return (
    <Tabs color={'primary'} indicatorColor={'primary'} onChange={onChange} value={tabPosition} variant={'fullWidth'}>
      <Tab data-testid={'readme-tab'} id={'readme-tab'} label={t('tab.readme')} />
      <Tab data-testid={'dependencies-tab'} id={'dependencies-tab'} label={t('tab.dependencies')} />
      <Tab data-testid={'versions-tab'} id={'versions-tab'} label={t('tab.versions')} />
      <Tab data-testid={'uplinks-tab'} id={'uplinks-tab'} label={t('tab.uplinks')} />
    </Tabs>
  );
};

export default DetailContainerTabs;

const Tabs = styled(MuiTabs)<{ theme?: Theme }>({
  marginBottom: 16,
});
