/**
 * @prettier
 */

import styled from '@emotion/styled';
import mq from '../../../utils/styles/media';
import Icon from '../../primitives/Icon';

export const Wrapper = styled('div')`
  background: #f9f9f9;
  border-top: 1px solid #e3e3e3;
  color: #999999;
  font-size: 14px;
  padding: 20px;
`;

export const Inner = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const Left = styled('div')`
  align-items: center;
  display: none;
`;

export const Right = styled(Left)`
  display: flex;
`;

export const ToolTip = styled('span')`
  position: relative;
  height: 18px;
`;

export const Earth = styled(Icon)`
  padding: 0 10px;
`;

export const Flags = styled('span')`
  position: absolute;
  background: #d3dddd;
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
    border-color: #d3dddd transparent transparent transparent;
    transform: rotate(90deg);
  }
  ${ToolTip}:hover & {
    visibility: visible;
  }
`;

export const Love = styled('span')`
  color: #e25555;
  padding: 0 5px;
`;

export const Flag = styled(Icon)`
  padding: 0 5px;
`;

export const Logo = Flag;
