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


// Visit a parse tree produced by mathParser#presedenceExpr.
mathVisitor.prototype.visitPresedenceExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#parenthesizedExpr.
mathVisitor.prototype.visitParenthesizedExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#number.
mathVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#plainNumber.
mathVisitor.prototype.visitPlainNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#exponent.
mathVisitor.prototype.visitExponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#operator.
mathVisitor.prototype.visitOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mathParser#presedenceOperator.
mathVisitor.prototype.visitPresedenceOperator = function(ctx) {
  return this.visitChildren(ctx);
};



exports.mathVisitor = mathVisitor;