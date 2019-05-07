import React from 'react'
import { SvgIconProps } from '../../SvgIcon'

import VerdaccioSvg from './verdaccio.svg'

const Verdaccio: React.FC<SvgIconProps> = ({ className }) => (
  <img alt="Verdaccio" src={VerdaccioSvg} width="16px" height="14px" className={className} />
)

export default Verdaccio
