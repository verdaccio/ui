/**
 * @prettier
 */

import React from 'react';
import capitalize from 'lodash/capitalize';

import { Svg, Img, ImgWrapper } from './styles';

// @ts-ignore-block
import brazil from './img/brazil.svg';
// @ts-ignore-block
import china from './img/china.svg';
// @ts-ignore-block
import india from './img/india.svg';
// @ts-ignore-block
import nicaragua from './img/nicaragua.svg';
// @ts-ignore-block
import pakistan from './img/pakistan.svg';
// @ts-ignore-block
import austria from './img/austria.svg';
// @ts-ignore-block
import spain from './img/spain.svg';
// @ts-ignore-block
import earth from './img/earth.svg';
// @ts-ignore-block
import verdaccio from './img/verdaccio.svg';
// @ts-ignore-block
import license from './img/license.svg';
// @ts-ignore-block
import time from './img/time.svg';

interface Icons {
  brazil: string;
  spain: string;
  china: string;
  nicaragua: string;
  pakistan: string;
  austria: string;
  india: string;
  earth: string;
  verdaccio: string;
  license: string;
  time: string;
  [key: string]: string;
}

const icons: Icons = {
  brazil,
  spain,
  china,
  nicaragua,
  pakistan,
  india,
  austria,
  earth,
  verdaccio,
  license,
  time,
};

export interface Props {
  name: string;
  className?: string;
  onClick?: (event: React.SyntheticEvent<SVGElement | HTMLSpanElement>) => void;
  onMouseOver?: (event: React.MouseEvent<SVGSVGElement | HTMLSpanElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<SVGSVGElement | HTMLSpanElement, MouseEvent>) => void;
  size?: 'sm' | 'md';
  pointer?: boolean;
  img?: boolean;
  modifiers?: any;
}

const Icon: React.FC<Props> = ({ className, name, size, img, pointer, ...props }) => {
  const title = capitalize(name);
  return img ? (
    <ImgWrapper className={className} pointer={pointer} size={size} title={title} {...props}>
      <Img alt={title} src={icons[name]} />
    </ImgWrapper>
  ) : (
    <Svg className={className} pointer={pointer} size={size} {...props}>
      <title>{title}</title>
      <use xlinkHref={`${icons[name]}#${name}`} />
    </Svg>
  );
};

Icon.defaultProps = {
  size: 'sm',
  img: false,
  pointer: false,
};

export default Icon;
