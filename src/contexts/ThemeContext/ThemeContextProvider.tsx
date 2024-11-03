import { useAppContext } from 'contexts/AppContext';
import { ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { base, dark, light } from './themes';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    overflow: hidden;
  }

  body {
    height: 100%;
    overflow: auto;

    // Custom font
    font-family: "Cutive Mono", sans-serif;
    font-weight: 400;
    font-style: normal;

    // Set zig-zag background for image to fade into
    background-color: #ccc;
    background-image: linear-gradient(135deg, #919191 25%, transparent 25%),
      linear-gradient(225deg, #919191 25%, transparent 25%), linear-gradient(45deg, #919191 25%, transparent 25%),
      linear-gradient(315deg, #919191 25%, #ccc 25%);
    background-position: 40px 0, 40px 0, 0 0, 0 0;
    background-size: 80px 80px;
    background-repeat: repeat;

    // Custom cursor
    cursor: ${({
      theme,
    }) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='${encodeURIComponent(
      theme.colors.primary
    )}'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E%0A")
    `},
    auto;

    -webkit-tap-highlight-color: rgba(201, 40, 45, 0.6);

    ::selection {
      background: #ddd;
    }
  }

  // Turn off default view transition animations
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }
`;

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const { colorized, mode } = useAppContext();

  // Extend base theme with colorized state and light or dark mode
  const themeExtended = { ...base, colorized, colors: mode === 'dark' ? dark : light };

  return (
    <ThemeProvider theme={themeExtended}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};
