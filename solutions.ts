/**
 * ! PROBLEM 1
 */

const multiplyValue = (value: number, multiplier?: number) => {
  return value * (multiplier ?? 2);
};

// console.log(multiplyValue(10, 0));
// console.log(multiplyValue(10));

/**
 * ! PROBLEM 2
 */

const processInput = (value: unknown) => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (value === true) {
    return "Active";
  } else if (value === false) {
    return "Inactive";
  }
};

console.log(processInput("            TYPESCRIPT "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
