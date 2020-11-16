import { render, RenderOptions } from '@testing-library/react';
import AppProvider from 'components/App/AppProvider';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

type Props = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: Props) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: AllTheProviders as React.FunctionComponent,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
