/**
 * @prettier
 */

import React from 'react';
import capitalize from 'lodash/capitalize';

import { Svg, Img, ImgWrapper } from './styles';
import { IProps, IIconsMap } from './types';

// @ts-ignore
import brazil from './img/brazil.svg';
// @ts-ignore
import china from './img/china.svg';
// @ts-ignore
import india from './img/india.svg';
// @ts-ignore
import nicaragua from './img/nicaragua.svg';
// @ts-ignore
import pakistan from './img/pakistan.svg';
// @ts-ignore
import austria from './img/austria.svg';
// @ts-ignore
import spain from './img/spain.svg';
// @ts-ignore
import earth from './img/earth.svg';
// @ts-ignore
import verdaccio from './img/verdaccio.svg';
// @ts-ignore
import filebinary from './img/filebinary.svg';
// @ts-ignore
import law from './img/law.svg';
// @ts-ignore
import license from './img/license.svg';
// @ts-ignore
import time from './img/time.svg';
// @ts-ignore
import version from './img/version.svg';

export const Icons: IIconsMap = {
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
};

const Icon: React.FC<IProps> = ({ className, name, size = 'sm', img = false, pointer = false, ...props }) => {
  // @ts-ignore
  const title = capitalize(name);
  return img ? (
    <ImgWrapper className={className} pointer={pointer} size={size} title={title} name={name} {...props}>
      <Img alt={title} src={Icons[name]} />
    </ImgWrapper>
  ) : (
    // @ts-ignore
    <Svg className={className} pointer={pointer} size={size} {...props}>
      <title>{title}</title>
      <use xlinkHref={`${Icons[name]}#${name}`} />
    </Svg>
  );
};

export default Icon;
