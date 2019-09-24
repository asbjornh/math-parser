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
    return ctx.expr() ? this.visit(ctx.expr()) : 0;
  }

  visitExpr(ctx) {
    const operator = ctx.add() || ctx.subtract();
    const o = ctx.add() ? "+" : "-";

    if (!operator) return this.visit(ctx.term());

    const func = this.visit(operator);
    const l = this.visit(ctx.expr());
    const r = this.visit(ctx.term());
    const val = func(l, r);
    return this.trace(`EXPR ${l} ${o} ${r} ->`, val);
  }

  visitTerm(ctx) {
    const operator = ctx.multiply() || ctx.divide();
    const o = ctx.multiply() ? "*" : "/";

    if (!operator) return this.visit(ctx.factor());

    const func = this.visit(operator);
    const l = this.visit(ctx.term());
    const r = this.visit(ctx.factor());
    const val = func(l, r);
    return this.trace(`TERM ${l} ${o} ${r} ->`, val);
  }

  visitFactor(ctx) {
    const exponent = ctx.exponent();
    const l = this.visit(ctx.number());

    if (!exponent) return l;

    const r = this.visit(ctx.factor());
    return exponent
      ? this.trace(`NUM ${l} ^ ${r} ->`, this.visit(exponent)(l, r))
      : l;
  }

  visitNumber(ctx) {
    return ctx.expr() ? this.visit(ctx.expr()) : parseFloat(ctx.getText());
  }

  visitExponent() {
    return (a, b) => Math.pow(a, b);
  }

  visitAdd() {
    return (a, b) => a + b;
  }

  visitSubtract() {
    return (a, b) => a - b;
  }

  visitMultiply() {
    return (a, b) => a * b;
  }

  visitDivide() {
    return (a, b) => a / b;
  }
}

module.exports = (input, shouldLog) => {
  return new Visitor().start(parse(input), shouldLog);
};
