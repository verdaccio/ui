/**
 * @prettier
 */

import styled from '@emotion/styled';
// @ts-ignore
import logo from './img/logo.svg';

interface Props {
  md?: boolean;
}

const Logo = styled('div')<Props>`
  && {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-position: center;
    background-size: contain;
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    ${props =>
      props.md &&
      `
        width: 90px;
        height: 90px;
      `};
  }
`;

export default Logo;
