/// <reference types="react-scripts" />

import theme from 'util/theme';

// Strongly typed theme provider
type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
