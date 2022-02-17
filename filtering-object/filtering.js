export const getAdults = (obj) => {
  const result = {};
  const minAge = 18;

  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};
