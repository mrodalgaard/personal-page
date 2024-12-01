import { Mode } from 'contexts/ThemeContext';
import { createContext } from 'react';

export interface AppContextType {
  colorized: boolean;
  mode: Mode;
  sound: boolean;
  reducedMotion: boolean;
  toggleColorized: () => void;
  toggleMode: () => void;
  toggleSound: () => void;
}

export const defaultContext: AppContextType = {
  colorized: false,
  mode: Mode.light,
  sound: false,
  reducedMotion: false,
  toggleColorized: () => {},
  toggleMode: () => {},
  toggleSound: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContext);
