import { useMemo } from 'react';

export const Age = ({ children, birthday }: { children: React.ReactNode; birthday: string }) => {
  const age = useMemo(() => {
    const today = new Date();
    const birthDate = new Date(birthday);

    if (isNaN(birthDate.getTime()) || today < birthDate) {
      return children;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }, [birthday, children]);

  return <>{age}</>;
};
