import { createContext } from 'react';
import { AppBackground } from '../../util/constants';
import { AppColors } from '../../util/theme';

export interface IAppState {
  color: AppColors;
  background: AppBackground;
  toggleBackground?: () => void;
  toggleColor?: () => void;
}

export const initialState: IAppState = {
  background: AppBackground.greyscale,
  color: AppColors.primary,
};

const AppContext = createContext(initialState);

export default AppContext;
