import { withdraw } from "./withdraw.js";

it("John's account should decrease by 50 dollars", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("User's account should not decrease because there is not enough money", () => {
  const usersAmount = -6;
  const result = withdraw(
    ["Ann", "John", "User"],
    [1400, 87, usersAmount],
    "User",
    10
  );
  expect(usersAmount).toEqual(-6);
});

it("should get -1 if there is not enough money", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});
