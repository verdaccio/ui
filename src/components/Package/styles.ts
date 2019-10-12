import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { breakpoints } from '../../utils/styles/media';
import Ico from '../Icon';
import Label from '../Label';
import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';
import { default as MuiIconButton } from '../../muiComponents/IconButton';
import { default as Photo } from '../../muiComponents/Avatar';
import { default as Typography } from '../../muiComponents/Heading';

export const OverviewItem = styled('span')`
  && {
    display: flex;
    align-items: center;
    margin: 0 0 0 16px;
    color: ${colors.greyLight2};
    font-size: 12px;
    @media (max-width: ${breakpoints.medium}px) {
      &:nth-child(3) {
        display: none;
      }
    }
    @media (max-width: ${breakpoints.small}px) {
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;

export const Icon = styled(Ico)({
  '&&': {
    margin: '2px 10px 0 0',
    fill: colors.greyLight2,
  },
});

export const Published = styled('span')({
  '&&': {
    color: colors.greyLight2,
    margin: '0 5px 0 0',
  },
});

export const Text = styled(Label)({
  '&&': {
    fontSize: '12px',
    fontWeight: fontWeight.semiBold,
    color: colors.greyLight2,
  },
});

export const Details = styled('span')({
  '&&': {
    marginLeft: '5px',
    lineHeight: 1.5,
    display: 'flex',
    flexDirection: 'column',
  },
});

export const Author = styled('div')({
  '&&': {
    display: 'flex',
    alignItems: 'center',
  },
});

export const Avatar = styled(Photo)({
  '&&': {
    width: '20px',
    height: '20px',
  },
});

export const WrapperLink = styled(Link)({
  '&&': {
    textDecoration: 'none',
  },
});

export const PackageTitle = styled('span')`
  && {
    font-weight: 600;
    font-size: 20px;
    display: block;
    margin-bottom: 12px;
    color: ${colors.eclipse};
    cursor: pointer;

    &:hover {
      color: ${colors.black};
    }

    @media (max-width: ${breakpoints.small}px) {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;

export const GridRightAligned = styled(Grid)({
  '&&': {
    textAlign: 'right',
  },
});

export const PackageList = styled(List)({
  '&&': {
    padding: '12px 0 12px 0',

    '&:hover': {
      backgroundColor: colors.greyLight3,
    },

    '> :last-child': {
      paddingTop: 0,
    },
  },
});

export const IconButton = styled(MuiIconButton)({
  '&&': {
    padding: '6px',

    svg: {
      fontSize: '16px',
    },
  },
});

export const TagContainer = styled('span')`
  && {
    margin-top: 8px;
    margin-bottom: 12px;
    display: block;
    @media (max-width: ${breakpoints.medium}px) {
      display: none;
    }
  }
`;

export const PackageListItemText = styled(ListItemText)({
  '&&': {
    paddingRight: 0,
  },
});

export const Description = styled(Typography)({
  color: colors.greyDark2,
  fontSize: '14px',
  paddingRight: 0,
});
