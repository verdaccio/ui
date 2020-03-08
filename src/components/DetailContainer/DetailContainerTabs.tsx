import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { default as MuiTabs } from '../../muiComponents/Tabs';
import Tab from '../../muiComponents/Tab';

interface Props {
  onChange: (event, newValue) => void;
  tabPosition: number;
}

const DetailContainerTabs: React.FC<Props> = ({ tabPosition, onChange }) => {
  const { t } = useTranslation();

  return (
    <Tabs
      indicatorColor={'primary'}
      onChange={onChange}
      textColor={'primary'}
      value={tabPosition}
      variant={'fullWidth'}>
      <Tab data-testid={'readme-tab'} id={'readme-tab'} label={t('tab.readme')} />
      <Tab data-testid={'dependencies-tab'} id={'dependencies-tab'} label={t('tab.dependencies')} />
      <Tab data-testid={'versions-tab'} id={'versions-tab'} label={t('tab.versions')} />
      <Tab data-testid={'uplinks-tab'} id={'uplinks-tab'} label={t('tab.uplinks')} />
    </Tabs>
  );
};

export default DetailContainerTabs;

const Tabs = styled(MuiTabs)({
  marginBottom: 16,
});
