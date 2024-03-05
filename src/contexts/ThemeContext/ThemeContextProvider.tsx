import { useAppContext } from 'contexts/AppContext';
import { ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { base, dark, light } from './themes';

const GlobalStyle = createGlobalStyle`
  body {
    // Custom cursor
    cursor: ${({
      theme,
    }) => `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='${encodeURIComponent(
      theme.colors.primary
    )}'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E%0A")
    `},
    auto;
  }
`;

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const { colorized, theme } = useAppContext();

  // Extend base theme with colorized state and light or dark mode
  const themeExtended = { ...base, colorized, colors: theme === 'dark' ? dark : light };

  return (
    <ThemeProvider theme={themeExtended}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};
