const MathVisitor = require("./lib/mathVisitor").mathVisitor;
const parse = require("./parser");

class Visitor extends MathVisitor {
  constructor() {
    super();
    this.shouldLog = false;
  }

  trace(label, input) {
    this.shouldLog && console.log(label, input);
    return input;
  }

  start(ctx, shouldLog) {
    this.shouldLog = shouldLog;
    return ctx.expr()
      ? this.visit(ctx.expr())
      : ctx.presedenceExpr()
      ? this.visit(ctx.presedenceExpr())
      : ctx.number()
      ? this.visit(ctx.number())
      : 0;
  }

  visitParenthesizedExpr(ctx) {
    return this.visit(ctx.expr());
  }

  visitExponent(ctx) {
    const [l, r] = this.visit(ctx.plainNumber());
    return Math.pow(l, r);
  }

  visitPlainNumber(ctx) {
    return parseFloat(ctx.getText());
  }

  visitNumber(ctx) {
    return ctx.exponent()
      ? this.visit(ctx.exponent())
      : this.visit(ctx.plainNumber());
  }

  visitOperator(ctx) {
    return ctx.getText() === "+" ? (a, b) => a + b : (a, b) => a - b;
  }

  visitPresedenceExpr(ctx) {
    const func = this.visit(ctx.presedenceOperator());
    const o = ctx.presedenceOperator().getText();

    if (ctx.parenthesizedExpr()) {
      const l = this.visit(ctx.parenthesizedExpr());
      const r = this.visit(ctx.number())[0];
      const val = func(l, r);
      return this.trace(`PAREN_PRES_EXP ${l} ${o} ${r} ->`, val);
    }

    if (ctx.presedenceExpr()) {
      const l = this.visit(ctx.presedenceExpr());
      const r = this.visit(ctx.number())[0];
      const val = func(l, r);
      return this.trace(`PRES_EXP ${l} ${o} ${r} ->`, val);
    }

    const [l, r] = this.visit(ctx.number());
    const val = func(l, r);
    return this.trace(`PRES_NUM ${l} ${o} ${r} ->`, val);
  }

  visitPresedenceOperator(ctx) {
    return ctx.getText() === "*" ? (a, b) => a * b : (a, b) => a / b;
  }

  visitExpr(ctx) {
    const func = this.visit(ctx.operator());
    const o = ctx.operator().getText();

    if (ctx.expr() && ctx.presedenceExpr()) {
      const l = this.visit(ctx.expr());
      const r = this.visit(ctx.presedenceExpr());
      const val = func(l, r);
      return this.trace(`EXPR+PRES ${l} ${o} ${r} ->`, val);
    }

    if (ctx.expr()) {
      const l = this.visit(ctx.expr());
      const r = this.visit(ctx.number())[0];
      const val = func(l, r);
      return this.trace(`EXPR ${l} ${o} ${r} ->`, val);
    }

    if (ctx.presedenceExpr()) {
      const l = this.visit(ctx.number())[0];
      const r = this.visit(ctx.presedenceExpr());
      const val = func(l, r);
      return this.trace(`PRES ${l} ${o} ${r} ->`, val);
    }

    const [l, r] = this.visit(ctx.number());
    const val = func(l, r);
    return this.trace(`NUMS ${l} ${o} ${r} ->`, val);
  }
}

module.exports = (input, shouldLog) => {
  const tree = parse(input, shouldLog);

  return new Visitor().start(tree, shouldLog);
};
