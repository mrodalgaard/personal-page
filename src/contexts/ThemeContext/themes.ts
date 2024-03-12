import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme['colors'] = {
  primary: '#333',
  secondary: '#c9282d',
  background: '#fff',
  text: '#333',
};

export const dark: DefaultTheme['colors'] = {
  primary: '#ccc',
  secondary: '#c9282d',
  background: '#333',
  text: '#fff',
};

export const base: DefaultTheme = {
  breakpoints: ['550px', '1800px'],
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px'],
  colorized: false,
  colors: light,
  envelopeHeight: 200,
};
