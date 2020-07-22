import styled from '@emotion/styled';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const getSize = (size: Breakpoint): { width: number; height: number } => {
  switch (size) {
    case 'md':
      return {
        width: 18,
        height: 18,
      };
    default:
      return {
        width: 14,
        height: 16,
      };
  }
};

interface CommonStyleProps {
  size: Breakpoint;
  pointer?: boolean;
}

const commonStyle = ({ size = 'sm', pointer }: CommonStyleProps): object => ({
  display: 'inline-block',
  cursor: pointer ? 'pointer' : 'default',
  ...getSize(size),
});

export const Svg = styled('svg')<CommonStyleProps>(props => ({
  boxSizing: 'initial',
  ...commonStyle(props),
}));

export const ImgWrapper = styled('span')<CommonStyleProps>(props => ({
  boxSizing: 'initial',
  ...commonStyle(props),
}));

export const Img = styled('img')({
  width: '100%',
  height: 'auto',
});
