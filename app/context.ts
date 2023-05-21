import { createContext } from 'react';
import theme from 'utils/theme';

export enum AppBackground {
  greyscale,
  colored,
}

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

export default createContext(initialState);
