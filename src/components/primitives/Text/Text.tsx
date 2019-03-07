/**
 * @prettier
 */

import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { getColor } from '../../../theme-utils/design-utils';

interface Props extends Omit<TypographyProps, 'color'> {
  color?: string;
  is?: 'p' | 'span' | 'a' | 'div';
}

const Text: React.FC<Props> = ({ color, is, ...props }) => {
  const setColor = (): React.CSSProperties | undefined => {
    if (!color) return;
    const paletteColor = getColor(color);
    if (paletteColor) {
      return { color: paletteColor };
    }
    return;
  };

  return <Typography {...props} component={is} style={{ ...setColor() }} />;
};

Text.defaultProps = {
  color: 'text.primary',
};

export default Text;
