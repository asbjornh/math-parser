const eval = require("./eval");
const print = require("./print");

const expression = "(50-5)*3";
console.log(expression, "->", print(expression));
console.log(eval(expression, true));
