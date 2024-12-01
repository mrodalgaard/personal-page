import { useEffect, useState } from 'react';

export const useMatchMedia = (query: string, defaultMatch = false) => {
  const [match, setMatch] = useState(() => matchMedia?.(query).matches ?? defaultMatch);

  useEffect(() => {
    const mediaQueryList = matchMedia?.(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatch(event.matches);
    };

    mediaQueryList?.addEventListener('change', listener);

    return () => {
      mediaQueryList?.removeEventListener('change', listener);
    };
  }, [query]);

  return match;
};
