import React, { MouseEvent } from 'react';
import capitalize from 'lodash/capitalize';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

import { Svg, Img, ImgWrapper } from './styles';
import brazil from './img/brazil.svg';
import china from './img/china.svg';
import india from './img/india.svg';
import germany from './img/germany.svg';
import nicaragua from './img/nicaragua.svg';
import pakistan from './img/pakistan.svg';
import austria from './img/austria.svg';
import spain from './img/spain.svg';
import usa from './img/usa.svg';
import earth from './img/earth.svg';
import verdaccio from './img/verdaccio.svg';
import filebinary from './img/filebinary.svg';
import law from './img/law.svg';
import license from './img/license.svg';
import time from './img/time.svg';
import version from './img/version.svg';

export interface IconsMap {
  brazil: string;
  spain: string;
  china: string;
  usa: string;
  nicaragua: string;
  pakistan: string;
  austria: string;
  germany: string;
  india: string;
  earth: string;
  verdaccio: string;
  license: string;
  time: string;
  law: string;
  version: string;
  filebinary: string;
  [key: string]: string;
}

export const Icons: IconsMap = {
  brazil,
  spain,
  china,
  nicaragua,
  pakistan,
  india,
  austria,
  earth,
  verdaccio,
  filebinary,
  law,
  license,
  time,
  version,
  germany,
  usa,
};

export interface Props {
  name: keyof IconsMap;
  className?: string;
  onClick?: (event: MouseEvent<SVGElement | HTMLSpanElement>) => void;
  size?: Breakpoint;
  pointer?: boolean;
  img?: boolean;
  modifiers?: null | undefined;
}

/* eslint-disable verdaccio/jsx-spread */
const Icon: React.FC<Props> = ({ className, name, size = 'sm', img = false, pointer = false, ...props }) => {
  const title = capitalize(name.toString());
  return img ? (
    <ImgWrapper className={className} pointer={pointer} size={size} title={title} {...props}>
      <Img alt={title} src={Icons[name]} />
    </ImgWrapper>
  ) : (
    <Svg className={className} pointer={pointer} size={size} {...props}>
      <title>{title}</title>
      <use xlinkHref={`${Icons[name]}#${name}`} />
    </Svg>
  );
};

export default Icon;
