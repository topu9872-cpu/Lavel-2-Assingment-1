/**
 * ! PROBLEM 1
 */

const multiplyValue = (value: number, multiplier?: number) => {
  return value * (multiplier ?? 2);
};

console.log(multiplyValue(10, 0));
console.log(multiplyValue(10));
