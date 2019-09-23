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

  visitExponent() {
    return (a, b) => Math.pow(a, b);
  }

  visitInnerNumber(ctx) {
    return parseFloat(ctx.getText());
  }

  visitNumber(ctx) {
    const [l, r] = this.visit(ctx.innerNumber());
    const exponent = ctx.exponent();

    if (!exponent) return l;

    return this.trace(`NUM ${l} ^ ${r} ->`, this.visit(exponent)(l, r));
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

  visitTerm(ctx) {
    const operator = ctx.multiply() || ctx.divide();
    const o = ctx.multiply() ? "*" : "/";

    if (!operator) return this.visit(ctx.number());

    const func = this.visit(operator);
    const l = this.visit(ctx.term());
    const r = this.visit(ctx.number());
    const val = func(l, r);
    return this.trace(`TERM ${l} ${o} ${r} ->`, val);
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
}

module.exports = (input, shouldLog) => {
  const tree = parse(input, shouldLog);

  return new Visitor().start(tree, shouldLog);
};
