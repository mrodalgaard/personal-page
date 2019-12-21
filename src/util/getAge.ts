const getAge = (birthday: string): number | undefined => {
  const today = new Date();
  const birthDate = new Date(birthday);

  if (isNaN(birthDate.getTime()) || today < birthDate) {
    return undefined;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default getAge;
