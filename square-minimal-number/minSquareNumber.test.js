import getSquare from "./minSquareNumber";

it("should get the square of the smallest number from the array", () => {
  const result = getSquare([-777, 3, -2, 6.8, 45, -20]);
  expect(result).toEqual(4);
});

it("should get null if the argument is not an array", () => {
  const result = getSquare("It is not an array");
  expect(result).toEqual(null);
});

it("should get null if the argument is an empty array", () => {
  const result = getSquare([]);
  expect(result).toEqual(null);
});
