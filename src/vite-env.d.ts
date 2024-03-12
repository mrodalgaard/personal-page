/// <reference types="vite/client" />

import 'styled-components';

// Override DefaultTheme to get accurate typings for your project
declare module 'styled-components' {
  export interface DefaultTheme {
    colorized: boolean;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    envelopeHeight: number;
  }
}
