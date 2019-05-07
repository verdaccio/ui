import { SvgIconProps as MuiSvgIconProps } from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import React from 'react'

export interface SvgIconProps extends MuiSvgIconProps {
  className?: string
}

const useStyles = makeStyles({
  svg: {
    width: '1em',
    height: '1em',
    userSelect: 'none',
    display: 'inline-block',
    fill: 'currentColor',
  },
})

const SvgIcon: React.FC<SvgIconProps> = ({ className, ...props }) => {
  const classes = useStyles()
  return <svg {...props} className={classNames(classes.svg, className)} />
}

export default SvgIcon
