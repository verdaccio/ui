import styled, { css } from 'react-emotion';
import colors from '../../utils/styles/colors';

export const Content = styled('div')({
  '&&': {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },
});

export const Container = styled('div')`
  && {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    ${props =>
      // @ts-ignore
      props.isLoading &&
      css`
        ${Content} {
          background-color: #f5f6f8;
        }
      `}
`;
