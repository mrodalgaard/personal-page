import { ReactNode, useEffect, useMemo, useState } from 'react';
import { AppContext, IAppContext, defaultValue } from './AppContext';
import { LOCAL_STORAGE_KEY } from './constants';

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
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    state.theme = themeQuery.matches ? 'dark' : 'light';
  }

  return state;
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState = useMemo(() => initializer(defaultValue), []);

  const [colorized, setColorized] = useState(initialState.colorized);
  const [theme, setTheme] = useState(initialState.theme);

  // Update persisted state to local storage when state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ colorized, theme }));
  }, [theme, colorized]);

  const value: IAppContext = {
    colorized,
    theme,
    toggleColorized: () => setColorized((colorized) => !colorized),
    toggleTheme: () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark')),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
