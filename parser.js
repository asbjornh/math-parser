const antlr4 = require("antlr4");
const Lexer = require("./lib/mathLexer").mathLexer;
const Parser = require("./lib/mathParser").mathParser;

class ErrorHandler {
  syntaxError(_recognizer, _offendingSymbol, _line, _column, errorMsg) {
    const error = new Error(errorMsg);
    error.stack = "";
    throw error;
  }
}

module.exports = input => {
  const chars = new antlr4.InputStream(input);
  const lexer = new Lexer(chars);

  const tokens = new antlr4.CommonTokenStream(lexer);

  const parser = new Parser(tokens);

  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorHandler());

  const tree = parser.start();

  return tree;
};
