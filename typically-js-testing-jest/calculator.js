export const getSquaredArray = (numbers) =>
  numbers.map((number) => number * number);

export const getOddNumbers = (numbers) =>
  numbers.filter((number) => number % 2 === 1);

export default (firstNumber, secondNumber) => firstNumber + secondNumber;
