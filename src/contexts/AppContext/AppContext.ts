import { AppTheme } from 'contexts/ThemeContext';
import { createContext } from 'react';

export interface IAppContext {
  colorized: boolean;
  theme: AppTheme;
  toggleColorized: () => void;
  toggleTheme: () => void;
}

export const defaultValue: IAppContext = {
  colorized: false,
  theme: 'light',
  toggleColorized: () => {},
  toggleTheme: () => {},
};

export const AppContext = createContext<IAppContext>(defaultValue);
