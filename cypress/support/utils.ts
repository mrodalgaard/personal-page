import { DefaultTheme } from 'styled-components';
import { darkColors, lightColors } from '../../src/contexts/ThemeContext/theme';

const hexToRGB = (hex: string) => {
  const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i) ?? [];
  return `rgb(${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)})`;
};

export const darkColorsRgb: DefaultTheme['colors'] = {
  primary: hexToRGB(darkColors.primary),
  secondary: hexToRGB(darkColors.secondary),
  background: hexToRGB(darkColors.background),
  text: hexToRGB(darkColors.text),
};

export const lightColorsRgb: DefaultTheme['colors'] = {
  primary: hexToRGB(lightColors.primary),
  secondary: hexToRGB(lightColors.secondary),
  background: hexToRGB(lightColors.background),
  text: hexToRGB(lightColors.text),
};
