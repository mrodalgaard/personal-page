import { useEffect, useMemo, useState } from 'react';
import getAge from 'util/getAge';

interface IProps {
  birthday: string;
  updateInterval: number;
}

const DEFAULT_AGE = 30;

const useAge = ({ birthday, updateInterval }: IProps) => {
  const [age, updateAge] = useState(0);

  const actualAge = useMemo(() => getAge(birthday) || DEFAULT_AGE, [birthday]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      updateAge((ageState) => {
        if (ageState >= actualAge) {
          clearInterval(intervalId);
          return ageState;
        }
        return ageState + 1;
      });
    }, updateInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [actualAge, updateInterval]);

  return age;
};

export default useAge;
