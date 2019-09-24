const MathVisitor = require("./lib/mathVisitor").mathVisitor;
const parse = require("./parse");

class Visitor extends MathVisitor {
  start(ctx) {
    return ctx.expr() ? this.visit(ctx.expr()) : "";
  }

  visitExpr(ctx) {
    const children = this.visitChildren(ctx).join(" ");
    return ctx.add() || ctx.subtract() ? "(" + children + ")" : children;
  }

  visitTerm(ctx) {
    const children = this.visitChildren(ctx).join(" ");
    return ctx.divide() || ctx.multiply() ? "(" + children + ")" : children;
  }

  visitFactor(ctx) {
    return this.visitChildren(ctx).join("");
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
