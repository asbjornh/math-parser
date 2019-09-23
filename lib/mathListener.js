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


// Enter a parse tree produced by mathParser#term.
mathListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by mathParser#term.
mathListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by mathParser#number.
mathListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by mathParser#number.
mathListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by mathParser#innerNumber.
mathListener.prototype.enterInnerNumber = function(ctx) {
};

// Exit a parse tree produced by mathParser#innerNumber.
mathListener.prototype.exitInnerNumber = function(ctx) {
};


// Enter a parse tree produced by mathParser#exponent.
mathListener.prototype.enterExponent = function(ctx) {
};

// Exit a parse tree produced by mathParser#exponent.
mathListener.prototype.exitExponent = function(ctx) {
};


// Enter a parse tree produced by mathParser#add.
mathListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by mathParser#add.
mathListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by mathParser#subtract.
mathListener.prototype.enterSubtract = function(ctx) {
};

// Exit a parse tree produced by mathParser#subtract.
mathListener.prototype.exitSubtract = function(ctx) {
};


// Enter a parse tree produced by mathParser#multiply.
mathListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by mathParser#multiply.
mathListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by mathParser#divide.
mathListener.prototype.enterDivide = function(ctx) {
};

// Exit a parse tree produced by mathParser#divide.
mathListener.prototype.exitDivide = function(ctx) {
};



exports.mathListener = mathListener;