import { calc } from "./calculator.js";

it("should get the sum of two numbers", () => {
  const result = calc("3 + 5");
  expect(result).toEqual("3 + 5 = 8");
});

it("should get the difference of two numbers", () => {
  const result = calc("10 - 2");
  expect(result).toEqual("10 - 2 = 8");
});

it("should get the product of two numbers", () => {
  const result = calc("2 * 4");
  expect(result).toEqual("2 * 4 = 8");
});

it("should get the quotient of two numbers", () => {
  const result = calc("24 / 3");
  expect(result).toEqual("24 / 3 = 8");
});

it("should get null if the argument is not the string", () => {
  const result = calc([24, "/", 3]);
  expect(result).toEqual(null);
});
