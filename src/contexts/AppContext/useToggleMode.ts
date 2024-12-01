import { Mode, modeZodType } from 'contexts/ThemeContext';
import { useMatchMedia } from 'hooks/useMatchMedia';
import { useStorageState } from './useStorageState';

export const useToggleMode = (defaultMode: Mode) => {
  // Persist mode to local storage
  const [mode, setMode] = useStorageState('mode', modeZodType, defaultMode);

  const prefersDarkMode = useMatchMedia('(prefers-color-scheme: dark)');

  // Toggle mode depending on current mode and user preference
  const toggleMode = () => {
    switch (mode) {
      case Mode.system:
        return setMode(prefersDarkMode ? Mode.light : Mode.dark);
      case Mode.light:
        return setMode(prefersDarkMode ? Mode.dark : Mode.system);
      case Mode.dark:
        return setMode(prefersDarkMode ? Mode.system : Mode.light);
    }
  };

  return { mode, toggleMode };
};
