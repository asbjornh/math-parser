// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by mathParser.
function mathListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

mathListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
mathListener.prototype.constructor = mathListener;

// Enter a parse tree produced by mathParser#start.
mathListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by mathParser#start.
mathListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by mathParser#expr.
mathListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by mathParser#expr.
mathListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by mathParser#presedenceExpr.
mathListener.prototype.enterPresedenceExpr = function(ctx) {
};

// Exit a parse tree produced by mathParser#presedenceExpr.
mathListener.prototype.exitPresedenceExpr = function(ctx) {
};


// Enter a parse tree produced by mathParser#parenthesizedExpr.
mathListener.prototype.enterParenthesizedExpr = function(ctx) {
};

// Exit a parse tree produced by mathParser#parenthesizedExpr.
mathListener.prototype.exitParenthesizedExpr = function(ctx) {
};


// Enter a parse tree produced by mathParser#number.
mathListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by mathParser#number.
mathListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by mathParser#plainNumber.
mathListener.prototype.enterPlainNumber = function(ctx) {
};

// Exit a parse tree produced by mathParser#plainNumber.
mathListener.prototype.exitPlainNumber = function(ctx) {
};


// Enter a parse tree produced by mathParser#exponent.
mathListener.prototype.enterExponent = function(ctx) {
};

// Exit a parse tree produced by mathParser#exponent.
mathListener.prototype.exitExponent = function(ctx) {
};


// Enter a parse tree produced by mathParser#operator.
mathListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by mathParser#operator.
mathListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by mathParser#presedenceOperator.
mathListener.prototype.enterPresedenceOperator = function(ctx) {
};

// Exit a parse tree produced by mathParser#presedenceOperator.
mathListener.prototype.exitPresedenceOperator = function(ctx) {
};



exports.mathListener = mathListener;