/**
 * @prettier
 * @flow
 */

import styled, { css } from 'react-emotion';
import mq from '../../utils/styles/media';
import Icon from '../Icon';
import colors from '../../utils/styles/colors';

export const Wrapper = styled.div`
  && {
    background: ${colors.snow};
    border-top: 1px solid ${colors.greyGainsboro};
    color: ${colors.nobel01};
    font-size: 14px;
    padding: 20px;
  }
`;

export const Inner = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    ${mq.medium(css`
      min-width: 400px;
      max-width: 800px;
      margin: auto;
      justify-content: space-between;
    `)};
    ${mq.large(css`
      max-width: 1240px;
    `)};
  }
`;

export const Left = styled.div`
  && {
    align-items: center;
    display: none;
    ${mq.medium(css`
      display: flex;
    `)};
  }
`;

export const Right = styled(Left)`
  && {
    display: flex;
  }
`;

export const ToolTip = styled.span`
  && {
    position: relative;
    height: 18px;
  }
`;

export const Earth = styled(Icon)`
  && {
    padding: 0 10px;
  }
`;

export const Flags = styled.span`
  && {
    position: absolute;
    background: ${colors.greyAthens};
    padding: 1px 4px;
    border-radius: 3px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    visibility: hidden;
    top: -2px;
    :before {
      content: '';
      position: absolute;
      top: 29%;
      left: -4px;
      margin-left: -5px;
      border: 5px solid;
      border-color: ${colors.greyAthens} transparent transparent transparent;
      transform: rotate(90deg);
    }
    ${ToolTip}:hover & {
      visibility: visible;
    }
  }
`;

export const Love = styled.span`
  && {
    color: ${colors.love};
    padding: 0 5px;
  }
`;

export const Flag = styled(Icon)`
  && {
    padding: 0 5px;
  }
`;

export const Logo = Flag;
