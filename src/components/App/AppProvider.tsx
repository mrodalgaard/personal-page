import * as React from "react";
import { ReactNode, useReducer } from "react";
import { ActionType } from "../../store/actions";
import reducer from "../../store/reducer";
import { AppBackground } from "../../util/constants";
import Persist from "../../util/Persist";
import AppContext, { initialState } from "./AppContext";
import { AppColors } from "../../util/theme";

interface IProps {
  children: ReactNode;
}

const AppProvider = (props: IProps) => {
  const { children } = props;

  const persistedState = Persist.getPersistedState();

  const [state, dispatch] = useReducer(
    reducer,
    persistedState ? persistedState : initialState
  );

  Persist.persistState({
    ...state,
    // Map greyscale background to default to accommodate for background fade in
    background:
      state.background === AppBackground.greyscale
        ? AppBackground.default
        : state.background
  });

  // Inject dispatch actions into provider value
  const value = {
    ...state,
    toggleBackground: () => {
      dispatch({
        payload:
          state.background === AppBackground.colored
            ? AppBackground.greyscale
            : AppBackground.colored,
        type: ActionType.UPDATE_BACKGROUND
      });
    },
    toggleColor: () => {
      dispatch({
        payload:
          state.color === AppColors.primary
            ? AppColors.secondary
            : AppColors.primary,
        type: ActionType.UPDATE_COLOR
      });
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
