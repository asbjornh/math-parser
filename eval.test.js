const chalk = require("chalk");
const eval = require("./eval");

const cases = [
  ["", 0],
  ["10", 10],

  // Add
  ["5+3", 5 + 3],
  ["1.2+4.3", 1.2 + 4.3],

  // Subtract
  ["5-3", 5 - 3],
  ["1.2-4.3", 1.2 - 4.3],
  ["2-2-2", 2 - 2 - 2],

  // Parenthesis
  // ["(50-5)*3", (50 - 5) * 3],
  // ["2-(2-2)", 2 - (2 - 2)],

  // Add and subtract
  ["15+8-4-2+7", 15 + 8 - 4 - 2 + 7],
  ["17.89-2.47+7.16", 17.89 - 2.47 + 7.16],
  ["15 + 8 - 4 - 2 + 7", 15 + 8 - 4 - 2 + 7],

  // Exponent
  ["2^3", Math.pow(2, 3)],

  // Multiply
  ["2*5", 2 * 5],

  // Divide
  ["10/4", 10 / 4],

  // Subtract, multiply and divide
  ["50-5*3*2+7", 50 - 5 * 3 * 2 + 7],
  [
    "84+15+4-4*3*9+24+4-54/3-5-7+47",
    84 + 15 + 4 - 4 * 3 * 9 + 24 + 4 - 54 / 3 - 5 - 7 + 47
  ],
  ["50-48/4/3+7*2*4+2+5+8", 50 - 48 / 4 / 3 + 7 * 2 * 4 + 2 + 5 + 8],
  ["5/2/2+1.5*3+4.58", 5 / 2 / 2 + 1.5 * 3 + 4.58],
  ["25/3+1.34*2.56+1.49+2.36/1.48", 25 / 3 + 1.34 * 2.56 + 1.49 + 2.36 / 1.48],
  ["2*3+5-4-2*5+7", 2 * 3 + 5 - 4 - 2 * 5 + 7],

  // Subtract, multiply, divide with exponents
  ["5/2^2+1.5*3+4.58", 5 / Math.pow(2, 2) + 1.5 * 3 + 4.58],
  ["2*3+5-4-2^5+7", 2 * 3 + 5 - 4 - Math.pow(2 * 5) + 7]
];

const hasError = cases.some(([expression, expected]) => {
  const evaluated = eval(expression);
  const relativeError = (evaluated - expected) / expected;
  const threshold = 1.0e-12;

  if (Math.abs(relativeError) > threshold) {
    console.log(chalk.red(`Failed for '${chalk.green(expression)}'`));
    console.log(
      `${chalk.dim("  Expected:")} ${chalk.green(expected)}${chalk.dim(
        ", actual: "
      )}${chalk.red(evaluated)}`
    );
    return true;
  } else {
    console.log(chalk.green(`Passed for '${expression}'`));
    return false;
  }
});

if (hasError) {
  process.exit(1);
}
