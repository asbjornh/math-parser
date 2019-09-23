const eval = require("./eval");
const print = require("./print");

const expression = "1*2-2-2+3^3";
console.log(expression, "->", print(expression));
console.log(eval(expression, true));
