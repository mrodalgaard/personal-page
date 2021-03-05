import { useMemo } from 'react';
import { DEFAULT_AGE } from 'util/constants';

interface IProps {
  birthday: string;
}

const useAge = ({ birthday }: IProps) => {
  return useMemo(() => {
    const today = new Date();
    const birthDate = new Date(birthday);

    if (isNaN(birthDate.getTime()) || today < birthDate) {
      return DEFAULT_AGE;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }, [birthday]);
};

export default useAge;
