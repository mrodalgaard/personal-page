import { Mode } from 'contexts/ThemeContext';
import { createContext } from 'react';

export interface IAppContext {
  colorized: boolean;
  mode: Mode;
  sound: boolean;
  toggleColorized: () => void;
  toggleMode: () => void;
  toggleSound: () => void;
}

export const defaultValue: IAppContext = {
  colorized: false,
  mode: 'light',
  sound: false,
  toggleColorized: () => {},
  toggleMode: () => {},
  toggleSound: () => {},
};

export const AppContext = createContext<IAppContext>(defaultValue);
