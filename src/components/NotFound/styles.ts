import styled from 'react-emotion';

import { default as Typography } from '../../muiComponents/Heading';
import List from '../../muiComponents/List';
import { default as MuiCard } from '../../muiComponents/Card';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  padding: '16px',
});

export const Inner = styled('div')({
  maxWidth: '650px',
  display: 'flex',
  flexDirection: 'column',
});

export const EmptyPackage = styled('img')({
  width: '150px',
  margin: '0 auto',
});

export const Heading = styled(Typography)({
  color: '#4b5e40',
});

export const StyledList = styled(List)({
  padding: 0,
  color: '#4b5e40',
});

export const Card = styled(MuiCard)({
  marginTop: '24px',
});
