import { useEffect, useMemo, useState } from 'react';
import { z } from 'zod';

type Value<T extends z.ZodType> = z.infer<T>;

const parseJSON = <T extends z.ZodType<unknown>>(json: string | null, zodType: T): Value<T> | undefined => {
  try {
    return zodType.parse(JSON.parse(json ?? ''));
  } catch {
    return undefined;
  }
};

export const useStorageState = <T extends z.ZodType<unknown>>(
  key: string,
  zodType: T,
  initialState: Value<T> | (() => Value<T>)
) => {
  // Rehydrate and validate persisted state from local storage
  const persistedState = useMemo(() => {
    return parseJSON(localStorage?.getItem(key), zodType);
  }, [key, zodType]);

  // Hooked react state for storage state
  const [state, setState] = useState(persistedState ?? initialState);

  // Persist state when updated
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        const newState = parseJSON(event.newValue, zodType);
        if (newState !== undefined && newState !== state) {
          setState(newState);
        }
      }
    };

    addEventListener('storage', handleStorage);
    return () => removeEventListener('storage', handleStorage);
  }, [key, zodType, state]);

  return [state, setState] as const;
};
