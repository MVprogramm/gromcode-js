export const reverseArray = (arr) => {
  if (typeof arr === "string" || arr.length === undefined) {
    return null;
  }

  const result = [...arr];

  return result.reverse();
};
