import { getSquaredArray, getOddNumbers } from "./calculator.js";
import getSum from "./calculator.js";

it("should get the squares of the numbers from the array", () => {
  const testSquare = getSquaredArray([1, 2, 3]);

  expect(testSquare).toEqual([1, 4, 9]);
});

it("should get the odd numbers from the array", () => {
  const testOdd = getOddNumbers([1, 2, 3]);

  expect(testOdd).toEqual([1, 3]);
});

it("should get the sum of two numbers", () => {
  const testSum = getSum(1, 2);

  expect(testSum).toEqual(3);
});
