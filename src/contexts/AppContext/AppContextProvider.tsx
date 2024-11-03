import { ReactNode, useEffect, useMemo, useState } from 'react';
import { AppContext, IAppContext, defaultValue } from './AppContext';
import { LOCAL_STORAGE_KEY } from './constants';
import { useReducedMotion } from './useReducedMotion';

const initializer = (initialState: IAppContext): IAppContext => {
  const state = { ...initialState };

  // Hydrate with persisted state from local storage
  const localStorageState = localStorage?.getItem(LOCAL_STORAGE_KEY);
  if (localStorageState) {
    const parsedState = JSON.parse(localStorageState);
    if (parsedState) {
      return parsedState;
    }
  }

  // Try to guess the users preferred color scheme
  if (typeof window !== 'undefined') {
    const schemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    state.mode = schemeQuery.matches ? 'dark' : 'light';
  }

  return state;
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState = useMemo(() => initializer(defaultValue), []);

  const [colorized, setColorized] = useState(initialState.colorized);
  const [mode, setMode] = useState(initialState.mode);
  const [sound, setSound] = useState(initialState.sound);

  const reducedMotion = useReducedMotion();

  // Update persisted state to local storage when state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ colorized, mode, sound }));
  }, [mode, colorized, sound]);

  const value: IAppContext = {
    colorized,
    mode,
    sound,
    reducedMotion,
    toggleColorized: () => setColorized((colorized) => !colorized),
    toggleMode: () => setMode((mode) => (mode === 'dark' ? 'light' : 'dark')),
    toggleSound: () => setSound((sound) => !sound),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
