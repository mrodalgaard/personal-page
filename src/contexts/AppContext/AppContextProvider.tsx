import { useMatchMedia } from 'hooks/useMatchMedia';
import { ReactNode, useEffect } from 'react';
import { AnalyticsEvent, setUserProperty } from 'utils/analytics';
import { z } from 'zod';
import { AppContext, defaultContext } from './AppContext';
import { useStorageState } from './useStorageState';
import { useToggleMode } from './useToggleMode';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { mode, toggleMode } = useToggleMode(defaultContext.mode);
  const reducedMotion = !useMatchMedia('(prefers-reduced-motion: no-preference)', defaultContext.reducedMotion);

  const [colorized, setColorized] = useStorageState('colorized', z.boolean(), defaultContext.colorized);
  const [sound, setSound] = useStorageState('sound', z.boolean(), defaultContext.sound);

  // Log user preference changes to analytics
  useEffect(() => {
    setUserProperty(AnalyticsEvent.Mode, mode);
    setUserProperty(AnalyticsEvent.Colorized, colorized);
    setUserProperty(AnalyticsEvent.Sound, sound);
  }, [mode, colorized, sound]);

  return (
    <AppContext.Provider
      value={{
        colorized,
        mode,
        sound,
        reducedMotion,
        toggleColorized: () => setColorized((colorized) => !colorized),
        toggleMode,
        toggleSound: () => setSound((sound) => !sound),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
