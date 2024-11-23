/// <reference types="vite/client" />

import 'styled-components';

// Override DefaultTheme to get accurate typings for your project
declare module 'styled-components' {
  export interface DefaultTheme {
    mediaQueries: {
      sm: string;
      md: string;
      lg: string;
    };
    font: string;
    typography: (type: 'title' | 'input' | 'body') => string;
    spacing: (factor: 0 | 0.5 | 1 | 2 | 3 | 4) => string;
    sizes: {
      envelope: string;
      mail: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    colorized: boolean;
  }
}
