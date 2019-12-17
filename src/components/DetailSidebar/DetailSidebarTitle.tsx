import React from 'react';
import styled from '@emotion/styled';

import Box from '../../muiComponents/Box';
import Heading from '../../muiComponents/Heading';
import { Theme } from '../../design-tokens/theme';

interface Props {
  packageName: string;
  description?: string;
  version: string;
  isLatest: boolean;
}

const StyledHeading = styled(Heading)({
  fontSize: '1rem',
  fontWeight: 700,
  textTransform: 'capitalize',
});

const StyledBoxVersion = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  color: theme && theme.palette.text.secondary,
}));

const DetailSidebarTitle: React.FC<Props> = ({ description, packageName, version, isLatest }) => (
  <Box display="flex" flexDirection="column" marginBottom="8px">
    <StyledHeading>{packageName}</StyledHeading>
    {description && <div>{description}</div>}
    <StyledBoxVersion>{`${isLatest ? 'Latest v' : 'v'}${version}`}</StyledBoxVersion>
  </Box>
);

export default DetailSidebarTitle;
