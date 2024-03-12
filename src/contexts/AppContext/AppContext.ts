import { AppTheme } from 'contexts/ThemeContext';
import { createContext } from 'react';

export interface IAppContext {
  colorized: boolean;
  theme: AppTheme;
  sound: boolean;
  toggleColorized: () => void;
  toggleTheme: () => void;
  toggleSound: () => void;
}

export const defaultValue: IAppContext = {
  colorized: false,
  theme: 'light',
  sound: false,
  toggleColorized: () => {},
  toggleTheme: () => {},
  toggleSound: () => {},
};

export const AppContext = createContext<IAppContext>(defaultValue);
