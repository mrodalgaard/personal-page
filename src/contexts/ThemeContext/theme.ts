import { DefaultTheme } from 'styled-components';

const breakpoints = {
  sm: '600px',
  md: '900px',
  lg: '1200px',
};

const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
};

const typography = (type: 'title' | 'input' | 'body') => {
  switch (type) {
    case 'title':
      return `
        font-size: 190px;
      `;
    case 'input':
      return `
        font-size: 30px;
      `;
    case 'body':
      return `
        font-size: 14px;
      `;
  }
};

// Spacing: 0px, 4px, 8px, 16px, 24px, 32px
const spacing = (factor: 0 | 0.5 | 1 | 2 | 3 | 4) => `${factor * 8}px`;

const sizes = {
  envelope: '200px',
  mail: '64px',
};

export const lightColors: DefaultTheme['colors'] = {
  primary: '#333',
  secondary: '#c9282d',
  background: '#fff',
  text: '#333',
};

export const darkColors: DefaultTheme['colors'] = {
  primary: '#ccc',
  secondary: '#c9282d',
  background: '#333',
  text: '#fff',
};

export const theme: DefaultTheme = {
  mediaQueries,
  font: 'Cutive Mono',
  typography,
  spacing,
  sizes,
  colors: lightColors,
  colorized: false,
};
