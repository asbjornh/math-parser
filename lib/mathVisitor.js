// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by mathParser.

function mathVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

mathVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
mathVisitor.prototype.constructor = mathVisitor;

// Visit a parse tree produced by mathParser#start.
mathVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#expr.
mathVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#term.
mathVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#number.
mathVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#innerNumber.
mathVisitor.prototype.visitInnerNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#exponent.
mathVisitor.prototype.visitExponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#add.
mathVisitor.prototype.visitAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#subtract.
mathVisitor.prototype.visitSubtract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#multiply.
mathVisitor.prototype.visitMultiply = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#divide.
mathVisitor.prototype.visitDivide = function(ctx) {
  return this.visitChildren(ctx);
};



exports.mathVisitor = mathVisitor;