import { IAppState } from 'context';
import { Dispatch, Reducer, useEffect, useReducer } from 'react';
import { LOCALSTORAGE_KEY } from 'utils/constants';
import { IAction } from './actions';

const initializer = (initialState: IAppState): IAppState => {
  if (typeof localStorage === 'undefined') {
    return initialState;
  }
  const localStorageState = localStorage.getItem(LOCALSTORAGE_KEY);
  if (localStorageState) {
    return JSON.parse(localStorageState) || initialState;
  }
  return initialState;
};

export default function usePersistedReducer(
  reducer: Reducer<IAppState, any>,
  initialState: IAppState
): [IAppState, Dispatch<IAction>] {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
