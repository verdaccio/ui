

import { MouseEvent } from 'react';
import { Icons } from './Icon';

export interface IIconsMap {
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
  law: string;
  version: string;
  filebinary: string;
  [key: string]: string;
}

export interface IProps {
  name: keyof typeof Icons;
  className?: string;
  onClick?: (event: MouseEvent<SVGElement | HTMLSpanElement>) => void;
  size?: 'sm' | 'md';
  pointer?: boolean;
  img?: boolean;
  modifiers?: any;
}
