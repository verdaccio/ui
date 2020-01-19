import styled from '@emotion/styled';

import Icon from '../Icon/Icon';
import { Theme } from '../../design-tokens/theme';

export const Wrapper = styled('div')<{ theme?: Theme }>(props => ({
  background: props.theme && props.theme.palette.snow,
  borderTop: `1px solid ${props.theme && props.theme.palette.greyGainsboro}`,
  color: props.theme && props.theme.palette.nobel01,
  fontSize: '14px',
  padding: '20px',
}));

export const Inner = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  [`@media (min-width: ${theme && theme.breakPoints.medium}px)`]: {
    minWidth: 400,
    maxWidth: 800,
    margin: 'auto',
    justifyContent: 'space-between',
  },
  [`@media (min-width: ${theme && theme.breakPoints.large}px)`]: {
    maxWidth: 1240,
  },
}));

export const Left = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  alignItems: 'center',
  display: 'none',
  [`@media (min-width: ${theme && theme.breakPoints.medium}px)`]: {
    display: 'flex',
  },
}));

export const Right = styled(Left)({
  display: 'flex',
});

export const Earth = styled(Icon)({
  padding: '0 10px',
});

export const Flags = styled('span')<{ theme?: Theme }>(props => ({
  position: 'absolute',
  background: props.theme && props.theme.palette.greyAthens,
  padding: '1px 4px',
  borderRadius: 3,
  height: 20,
  display: 'inline-flex',
  alignItems: 'center',
  visibility: 'hidden',
  top: -2,
  ':before': {
    content: "''",
    position: 'absolute',
    top: '29%',
    left: -4,
    marginLeft: -5,
    border: '5px solid',
    borderColor: `${props.theme && props.theme.palette.greyAthens} transparent transparent transparent`,
    transform: 'rotate(90deg)',
  },
}));

export const ToolTip = styled('span')({
  position: 'relative',
  height: '18px',
  ':hover': {
    [`${Flags}`]: {
      visibility: 'visible',
    },
  },
});

export const Love = styled('span')<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.love,
  padding: '0 5px',
}));

export const Flag = styled(Icon)({
  padding: '0 5px',
});

export const Logo = Flag;
