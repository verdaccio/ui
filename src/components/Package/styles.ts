import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { breakpoints } from '../../utils/styles/media';
import Ico from '../Icon';
import Label from '../Label';
import { fontWeight } from '../../utils/styles/sizes';
import { default as MuiIconButton } from '../../muiComponents/IconButton';
import { default as Photo } from '../../muiComponents/Avatar';
import List from '../../muiComponents/List';
import { default as Typography } from '../../muiComponents/Heading';
import Grid from '../../muiComponents/Grid';
import ListItemText from '../../muiComponents/ListItemText';
import { Theme } from '../../design-tokens/theme';

export const OverviewItem = styled('span')<{ theme?: Theme }>(props => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 0 16px',
  color: props.theme && props.theme.palette.greyLight2,
  fontSize: 12,
  [`@media (max-width: ${breakpoints.medium}px)`]: {
    ':nth-of-type(3)': {
      display: 'none',
    },
  },
  [`@media (max-width: ${breakpoints.small}px)`]: {
    ':nth-of-type(4)': {
      display: 'none',
    },
  },
}));

export const Icon = styled(Ico)<{ theme?: Theme }>(props => ({
  margin: '2px 10px 0 0',
  fill: props.theme && props.theme.palette.greyLight2,
}));

export const Published = styled('span')<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.greyLight2,
  margin: '0 5px 0 0',
}));

export const Text = styled(Label)<{ theme?: Theme }>(props => ({
  fontSize: '12px',
  fontWeight: fontWeight.semiBold,
  color: props.theme && props.theme.palette.greyLight2,
}));

export const Details = styled('span')({
  marginLeft: '5px',
  lineHeight: 1.5,
  display: 'flex',
  flexDirection: 'column',
});

export const Author = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Avatar = styled(Photo)({
  width: '20px',
  height: '20px',
});

export const WrapperLink = styled(Link)({
  textDecoration: 'none',
});

export const PackageTitle = styled('span')<{ theme?: Theme }>(props => ({
  fontWeight: 600,
  fontSize: 20,
  display: 'block',
  marginBottom: 12,
  color: props.theme && props.theme.palette.eclipse,
  cursor: 'pointer',
  ':hover': {
    color: props.theme && props.theme.palette.black,
  },
  [`@media (max-width: ${breakpoints.small}px)`]: {
    fontSize: 14,
    marginBottom: 8,
  },
}));

export const GridRightAligned = styled(Grid)({
  textAlign: 'right',
});

export const PackageList = styled(List)<{ theme?: Theme }>(props => ({
  padding: '12px 0 12px 0',
  ':hover': {
    backgroundColor: props.theme && props.theme.palette.greyLight3,
  },
  '> :last-child': {
    paddingTop: 0,
  },
}));

export const IconButton = styled(MuiIconButton)({
  padding: 6,
  svg: {
    fontSize: 16,
  },
});

export const TagContainer = styled('span')({
  marginTop: 8,
  marginBottom: 12,
  display: 'block',
  [`@media (max-width: ${breakpoints.medium}px)`]: {
    display: 'none',
  },
});

export const PackageListItemText = styled(ListItemText)({
  paddingRight: 0,
});

export const Description = styled(Typography)<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.greyDark2,
  fontSize: '14px',
  paddingRight: 0,
}));
