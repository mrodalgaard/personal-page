import { useEffect, useState } from 'react';
import getAge from '../../util/getAge';

interface IProps {
  birthday: string;
  updateInterval: number;
}

const DEFAULT_AGE = 0;

const useAge = (props: IProps) => {
  const { birthday, updateInterval } = props;

  const [age, updateAge] = useState(DEFAULT_AGE);

  const actualAge = getAge(birthday) || DEFAULT_AGE;

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
