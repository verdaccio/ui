import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import capitalize from 'lodash/capitalize';
import React, { MouseEvent } from 'react';

import austria from './img/austria.svg';
import brazil from './img/brazil.svg';
import china from './img/china.svg';
import czech from './img/czech.svg';
import earth from './img/earth.svg';
import filebinary from './img/filebinary.svg';
import france from './img/france.svg';
import germany from './img/germany.svg';
import india from './img/india.svg';
import japan from './img/japan.svg';
import khmer from './img/khmer.svg';
import law from './img/law.svg';
import license from './img/license.svg';
import nicaragua from './img/nicaragua.svg';
import pakistan from './img/pakistan.svg';
import spain from './img/spain.svg';
import taiwan from './img/taiwan.svg';
import time from './img/time.svg';
import ukraine from './img/ukraine.svg';
import usa from './img/usa.svg';
import verdaccio from './img/verdaccio.svg';
import version from './img/version.svg';
import { Svg, Img, ImgWrapper } from './styles';

export interface IconsMap {
  brazil: string;
  czech: string;
  spain: string;
  china: string;
  usa: string;
  nicaragua: string;
  pakistan: string;
  austria: string;
  france: string;
  germany: string;
  india: string;
  japan: string;
  ukraine: string;
  khmer: string;
  taiwan: string;
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
  czech,
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
  france,
  japan,
  ukraine,
  khmer,
  taiwan,
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
