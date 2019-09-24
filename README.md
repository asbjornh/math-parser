# Math parser

Parses or calculates the value of strings containing arithmetic expressions. This is strictly just for fun. Do not use it for anything serious.

## Prerequisites

- [Antlr](https://www.antlr.org/)

## Generate parser

After installation, you can run Antlr with the arguments `math.g4 -Dlanguage=JavaScript -o lib -visitor` in the root directory in order to regenerate the parser. Alternatively, use `build.sh` which may or may not work on your system depending on how Antlr was installed and aliased.

## Usage

- `parse.js` parses an arithmetic expression (string) to a parse tree
- `eval.js` evaluates the value of an arithmatic expression (string) to a number
- `print.js` creates a pretty print version of a parsed arithmatic expression (string)

See `index.js` for example usage.
