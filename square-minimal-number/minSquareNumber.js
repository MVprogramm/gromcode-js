export default (arr) => {
  if (typeof arr === "string" || arr.length === undefined || arr.length === 0) {
    return null;
  }

  return (
    Math.min.apply(
      Math,
      arr.map((num) => Math.abs(num))
    ) ** 2
  );
};
