import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(() => !matchMedia(QUERY).matches);

  useEffect(() => {
    const mediaQueryList = matchMedia(QUERY);

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return reducedMotion;
};
