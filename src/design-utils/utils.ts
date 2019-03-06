/**
 * @prettier
 */
import { PaletteColor, TypeText } from '@material-ui/core/styles/createPalette';
import { Palette, theme } from './theme';

export const getColor = (color: string): string | undefined => {
  if (!color) return undefined;

  const [colorKey, colorVariant] = color.split('.');
  const shade = theme.palette[colorKey as Palette];
  if (shade) {
    if (typeof shade === 'string') {
      return shade;
    }
    if (typeof shade === 'object') {
      if (isPaletteColor(shade) && shade[colorVariant as keyof PaletteColor]) {
        return shade[colorVariant as keyof PaletteColor];
      }
      if (isTypeText(shade) && shade[colorVariant as keyof TypeText]) {
        return shade[colorVariant as keyof TypeText];
      }

      return undefined;
    }
  }

  console.error(`You passed an invalid color: ${color}`);
  return undefined;
};

const isPaletteColor = (color: PaletteColor | TypeText): color is PaletteColor => (color as PaletteColor) !== undefined;
const isTypeText = (color: PaletteColor | TypeText): color is TypeText => (color as TypeText) !== undefined;
