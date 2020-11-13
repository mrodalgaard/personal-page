import React, { ReactNode, useReducer } from 'react';
import createPersistedReducer from 'use-persisted-reducer';
import { ActionType } from '../../store/actions';
import reducer from '../../store/reducer';
import { AppBackground, LOCALSTORAGE_KEY } from '../../util/constants';
import { AppColors } from '../../util/theme';
import AppContext, { initialState } from './AppContext';

const usePersistedReducer: typeof useReducer = createPersistedReducer(
  LOCALSTORAGE_KEY
);

interface IProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IProps) => {
  // Persist state to localstorage after reducer has been called
  const [state, dispatch] = usePersistedReducer(reducer, initialState);

  // Inject dispatch actions into provider value
  const value = {
    ...state,
    toggleBackground: () => {
      dispatch({
        payload:
          state.background === AppBackground.colored
            ? AppBackground.greyscale
            : AppBackground.colored,
        type: ActionType.UPDATE_BACKGROUND,
      });
    },
    toggleColor: () => {
      dispatch({
        payload:
          state.color === AppColors.primary
            ? AppColors.secondary
            : AppColors.primary,
        type: ActionType.UPDATE_COLOR,
      });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
