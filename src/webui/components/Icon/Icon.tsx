/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles'

import getIcon from './get-icon'
import colors from '../../utils/styles/colors';

const icons = {
  brazil: 'brazil',
  spain: 'spain',
  china: 'china',
  nicaragua: 'nicaragua',
  pakistan: 'pakistan',
  india: 'india',
  austria: 'austria',
  earth:'earth',
  verdaccio: 'verdaccio',
  filebinary: 'filebinary',
  law: 'law',
  license: 'license',
  time: 'time',
  version: 'version',
};

export type Icons = keyof typeof icons

interface Props  {
  icon: Icons
  size?: 'md' | 'sm'
  className?: string
  margin?: string
  padding?: string
  grey?: boolean
  pointer?: boolean
  onClick?: (event: React.PointerEvent<Element> | React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const useStyles = makeStyles({
  container: {
    // TODO => There will be a proper Flex component 
    display: 'inline-flex',
    alignItems: 'center',
  },
  icon: (({ grey, margin, padding, pointer, size }) => ({
    // TODO => the styles below will be parrt of the theme. 
    // As soon as it is created we will create proper style helpers and replace these kind of stuff
    color: grey ? colors.greyLight2 : 'inherit',
    margin,
    padding,
    pointer: pointer ? 'pointer' : 'auto',
    fontSize: size === 'md' ? 18 : 14
  }))
})

const Icon: React.FC<Props> = ({ icon, className, onClick, ...props }) => {
  const classes = useStyles(props)
  const Component = getIcon(icon)

  return (
    <div className={classes.container}>
      <Component className={classes.icon} fontSize="inherit" onClick={onClick} />
    </div>
  )
}

Icon.defaultProps = {
  size: 'sm',
  grey: false,
  pointer: false
}

export default Icon

