const antlr4 = require("antlr4");
const Lexer = require("./lib/mathLexer").mathLexer;
const Parser = require("./lib/mathParser").mathParser;

module.exports = input => {
  const chars = new antlr4.InputStream(input);
  const lexer = new Lexer(chars);

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new Parser(tokens);

  const tree = parser.start();

  return tree;
};
