import { reverseArray } from "./reverseArray.js";

it("should get the reversed array", () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it("should get null if the argument is not an array", () => {
  const result = reverseArray("It is not an array");
  expect(result).toEqual(null);
});

it("the argument should not be changed", () => {
  let arg = [1, 2, 3];
  const result = reverseArray(arg);
  expect(arg).toEqual([1, 2, 3]);
});
