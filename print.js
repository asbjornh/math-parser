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

  visitNumber(ctx) {
    return ctx.getText();
  }

  visitOperator(ctx) {
    return ctx.getText();
  }

  visitParenthesizedExpr(ctx) {
    return "(" + this.visitChildren(ctx).join(" ") + ")";
  }

  visitPresedenceExpr(ctx) {
    return "(" + this.visitChildren(ctx).join(" ") + ")";
  }

  visitPresedenceOperator(ctx) {
    return ctx.getText();
  }

  visitExpr(ctx) {
    return "(" + this.visitChildren(ctx).join(" ") + ")";
  }
}

module.exports = input => {
  const tree = parse(input);

  return new Visitor().start(tree);
};
