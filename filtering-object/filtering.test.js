import { getAdults } from "./filtering.js";

it("should get an object with people 18 and over years old", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should get an empty object if an empty object is an argument", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it("the input object must not change", () => {
  const input = { "John Doe": 19, Tom: 17, Bob: 18 };
  const result = getAdults(input);
  expect(input).toEqual({ "John Doe": 19, Tom: 17, Bob: 18 });
});
