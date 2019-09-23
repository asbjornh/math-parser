const MathVisitor = require("./lib/mathVisitor").mathVisitor;
const parse = require("./parser");

class Visitor extends MathVisitor {
  start(ctx) {
    return ctx.expr()
      ? this.visit(ctx.expr())
      : ctx.presedenceExpr()
      ? this.visit(ctx.presedenceExpr())
      : "";
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }

  visitNumber(ctx) {
    return ctx.getText();
  }

  visitOperator(ctx) {
    return ctx.getText();
  }

  visitTerm(ctx) {
    const children = this.visitChildren(ctx).join(" ");
    return ctx.divide() || ctx.multiply() ? "(" + children + ")" : children;
  }

  visitExpr(ctx) {
    const children = this.visitChildren(ctx).join(" ");
    return ctx.add() || ctx.subtract() ? "(" + children + ")" : children;
  }
}

module.exports = input => {
  const tree = parse(input);

  return new Visitor().start(tree);
};
