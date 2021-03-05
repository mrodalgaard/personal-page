import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import useAge from './useAge';

describe('useAge', () => {
  it('returns an age', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    const birthday = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

    const age = renderHook(() => useAge({ birthday }));

    expect(age.result.current).toBe(10);
  });

  it('handles invalid inputs', () => {
    const DEFAULT_AGE = 30;

    let age = renderHook(() => useAge({ birthday: '55-55-2010' }));
    expect(age.result.current).toBe(DEFAULT_AGE);

    age = renderHook(() => useAge({ birthday: '' }));
    expect(age.result.current).toBe(DEFAULT_AGE);

    age = renderHook(() => useAge({ birthday: 'DUMMY' }));
    expect(age.result.current).toBe(DEFAULT_AGE);

    age = renderHook(() => useAge({ birthday: '12-12-2050' }));
    expect(age.result.current).toBe(DEFAULT_AGE);
  });
});
