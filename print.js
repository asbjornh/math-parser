const MathVisitor = require("./lib/mathVisitor").mathVisitor;
const parse = require("./parse");

class Visitor extends MathVisitor {
  start(ctx) {
    return ctx.expr() ? this.visit(ctx.expr()) : "";
  }

  visitExpr(ctx) {
    const operator = ctx.add() || ctx.subtract();
    const children = this.visitChildren(ctx).join(" ");
    return operator ? "(" + children + ")" : children;
  }

  visitTerm(ctx) {
    const operator = ctx.divide() || ctx.multiply();
    const children = this.visitChildren(ctx).join(" ");
    return operator ? "(" + children + ")" : children;
  }

  visitFactor(ctx) {
    const exponent = ctx.exponent();
    const children = this.visitChildren(ctx).join(exponent ? " " : "");
    return exponent ? "(" + children + ")" : children;
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  visitNumber(ctx) {
    return ctx.getText();
  }
}

module.exports = input => {
  const tree = parse(input);

  return new Visitor().start(tree);
};
