import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import Box from '../../../components/Box';
import Heading from '../../../components/Heading';
import { Theme } from '../../../design-tokens/theme';

interface Props {
  packageName: string;
  description?: string;
  version: string;
  isLatest: boolean;
}

const DetailSidebarTitle: React.FC<Props> = ({ description, packageName, version, isLatest }) => {
  const { t } = useTranslation();
  return (
    <Box className={'detail-info'} display="flex" flexDirection="column" marginBottom="8px">
      <StyledHeading>{packageName}</StyledHeading>
      {description && <div>{description}</div>}
      <StyledBoxVersion>
        {isLatest ? t('sidebar.detail.latest-version', { version }) : t('sidebar.detail.version', { version })}
      </StyledBoxVersion>
    </Box>
  );
};

export default DetailSidebarTitle;

const StyledHeading = styled(Heading)({
  fontSize: '1rem',
  fontWeight: 700,
});

const StyledBoxVersion = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  color: theme && theme.palette.text.secondary,
}));
