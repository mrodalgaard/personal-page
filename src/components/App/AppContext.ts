import { createContext } from 'react';
import { AppBackground } from 'util/constants';
import theme from 'util/theme';

export interface IAppState {
  color: string;
  background: AppBackground;
  toggleBackground?: () => void;
  toggleColor?: () => void;
}

export const initialState: IAppState = {
  background: AppBackground.greyscale,
  color: theme.primary,
};

const AppContext = createContext(initialState);

export default AppContext;
