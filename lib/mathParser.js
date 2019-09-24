// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var mathListener = require('./mathListener').mathListener;
var mathVisitor = require('./mathVisitor').mathVisitor;

var grammarFileName = "math.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000eS\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u001a\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\"\n\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003&\n\u0003\f\u0003\u000e\u0003)\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u00041\n\u0004\u0003\u0004\u0003\u0004\u0007\u00045\n\u0004",
    "\f\u0004\u000e\u00048\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005?\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006G\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0004\u0004\u0006\f\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0002\u0002Q\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0004\u001b\u0003\u0002\u0002\u0002\u0006",
    "*\u0003\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002\nF\u0003\u0002",
    "\u0002\u0002\fH\u0003\u0002\u0002\u0002\u000eJ\u0003\u0002\u0002\u0002",
    "\u0010L\u0003\u0002\u0002\u0002\u0012N\u0003\u0002\u0002\u0002\u0014",
    "P\u0003\u0002\u0002\u0002\u0016\u001a\u0005\u0004\u0003\u0002\u0017",
    "\u001a\u0007\u0003\u0002\u0002\u0018\u001a\u0007\u0002\u0002\u0003\u0019",
    "\u0016\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019",
    "\u0018\u0003\u0002\u0002\u0002\u001a\u0003\u0003\u0002\u0002\u0002\u001b",
    "\u001c\b\u0003\u0001\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d",
    "\'\u0003\u0002\u0002\u0002\u001e!\f\u0003\u0002\u0002\u001f\"\u0005",
    "\u000e\b\u0002 \"\u0005\u0010\t\u0002!\u001f\u0003\u0002\u0002\u0002",
    "! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0005\u0006",
    "\u0004\u0002$&\u0003\u0002\u0002\u0002%\u001e\u0003\u0002\u0002\u0002",
    "&)\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002",
    "\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002",
    "*+\b\u0004\u0001\u0002+,\u0005\b\u0005\u0002,6\u0003\u0002\u0002\u0002",
    "-0\f\u0003\u0002\u0002.1\u0005\u0012\n\u0002/1\u0005\u0014\u000b\u0002",
    "0.\u0003\u0002\u0002\u00020/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000223\u0005\b\u0005\u000235\u0003\u0002\u0002\u00024-\u0003\u0002",
    "\u0002\u000258\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003",
    "\u0002\u0002\u00027\u0007\u0003\u0002\u0002\u000286\u0003\u0002\u0002",
    "\u00029?\u0005\n\u0006\u0002:;\u0005\n\u0006\u0002;<\u0005\f\u0007\u0002",
    "<=\u0005\b\u0005\u0002=?\u0003\u0002\u0002\u0002>9\u0003\u0002\u0002",
    "\u0002>:\u0003\u0002\u0002\u0002?\t\u0003\u0002\u0002\u0002@G\u0007",
    "\u000b\u0002\u0002AG\u0007\f\u0002\u0002BC\u0007\u0004\u0002\u0002C",
    "D\u0005\u0004\u0003\u0002DE\u0007\u0005\u0002\u0002EG\u0003\u0002\u0002",
    "\u0002F@\u0003\u0002\u0002\u0002FA\u0003\u0002\u0002\u0002FB\u0003\u0002",
    "\u0002\u0002G\u000b\u0003\u0002\u0002\u0002HI\u0007\u0006\u0002\u0002",
    "I\r\u0003\u0002\u0002\u0002JK\u0007\u0007\u0002\u0002K\u000f\u0003\u0002",
    "\u0002\u0002LM\u0007\b\u0002\u0002M\u0011\u0003\u0002\u0002\u0002NO",
    "\u0007\t\u0002\u0002O\u0013\u0003\u0002\u0002\u0002PQ\u0007\n\u0002",
    "\u0002Q\u0015\u0003\u0002\u0002\u0002\t\u0019!\'06>F"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'()'", "'('", "')'", "'^'", "'+'", "'-'", "'*'", 
                     "'/'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "INT", "FLOAT", "DIGIT", "SP" ];

var ruleNames =  [ "start", "expr", "term", "factor", "number", "exponent", 
                   "add", "subtract", "multiply", "divide" ];

function mathParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

mathParser.prototype = Object.create(antlr4.Parser.prototype);
mathParser.prototype.constructor = mathParser;

Object.defineProperty(mathParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

mathParser.EOF = antlr4.Token.EOF;
mathParser.T__0 = 1;
mathParser.T__1 = 2;
mathParser.T__2 = 3;
mathParser.T__3 = 4;
mathParser.T__4 = 5;
mathParser.T__5 = 6;
mathParser.T__6 = 7;
mathParser.T__7 = 8;
mathParser.INT = 9;
mathParser.FLOAT = 10;
mathParser.DIGIT = 11;
mathParser.SP = 12;

mathParser.RULE_start = 0;
mathParser.RULE_expr = 1;
mathParser.RULE_term = 2;
mathParser.RULE_factor = 3;
mathParser.RULE_number = 4;
mathParser.RULE_exponent = 5;
mathParser.RULE_add = 6;
mathParser.RULE_subtract = 7;
mathParser.RULE_multiply = 8;
mathParser.RULE_divide = 9;


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StartContext.prototype.EOF = function() {
    return this.getToken(mathParser.EOF, 0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitStart(this);
	}
};

StartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.StartContext = StartContext;

mathParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, mathParser.RULE_start);
    try {
        this.state = 23;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mathParser.T__1:
        case mathParser.INT:
        case mathParser.FLOAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.expr(0);
            break;
        case mathParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            this.match(mathParser.T__0);
            break;
        case mathParser.EOF:
            this.enterOuterAlt(localctx, 3);
            this.state = 22;
            this.match(mathParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

ExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprContext.prototype.add = function() {
    return this.getTypedRuleContext(AddContext,0);
};

ExprContext.prototype.subtract = function() {
    return this.getTypedRuleContext(SubtractContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



mathParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, mathParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 37;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, mathParser.RULE_expr);
                this.state = 28;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 31;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case mathParser.T__4:
                    this.state = 29;
                    this.add();
                    break;
                case mathParser.T__5:
                    this.state = 30;
                    this.subtract();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 33;
                this.term(0); 
            }
            this.state = 39;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.multiply = function() {
    return this.getTypedRuleContext(MultiplyContext,0);
};

TermContext.prototype.divide = function() {
    return this.getTypedRuleContext(DivideContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};



mathParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, mathParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.factor();
        this._ctx.stop = this._input.LT(-1);
        this.state = 52;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, mathParser.RULE_term);
                this.state = 43;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 46;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case mathParser.T__6:
                    this.state = 44;
                    this.multiply();
                    break;
                case mathParser.T__7:
                    this.state = 45;
                    this.divide();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 48;
                this.factor(); 
            }
            this.state = 54;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

FactorContext.prototype.exponent = function() {
    return this.getTypedRuleContext(ExponentContext,0);
};

FactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.FactorContext = FactorContext;

mathParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, mathParser.RULE_factor);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.number();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 56;
            this.number();
            this.state = 57;
            this.exponent();
            this.state = 58;
            this.factor();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(mathParser.INT, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(mathParser.FLOAT, 0);
};

NumberContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.NumberContext = NumberContext;

mathParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, mathParser.RULE_number);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mathParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.match(mathParser.INT);
            break;
        case mathParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 63;
            this.match(mathParser.FLOAT);
            break;
        case mathParser.T__1:
            this.enterOuterAlt(localctx, 3);
            this.state = 64;
            this.match(mathParser.T__1);
            this.state = 65;
            this.expr(0);
            this.state = 66;
            this.match(mathParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_exponent;
    return this;
}

ExponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExponentContext.prototype.constructor = ExponentContext;


ExponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterExponent(this);
	}
};

ExponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitExponent(this);
	}
};

ExponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitExponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.ExponentContext = ExponentContext;

mathParser.prototype.exponent = function() {

    var localctx = new ExponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, mathParser.RULE_exponent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(mathParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AddContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_add;
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;


AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.AddContext = AddContext;

mathParser.prototype.add = function() {

    var localctx = new AddContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, mathParser.RULE_add);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(mathParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubtractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_subtract;
    return this;
}

SubtractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubtractContext.prototype.constructor = SubtractContext;


SubtractContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterSubtract(this);
	}
};

SubtractContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitSubtract(this);
	}
};

SubtractContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitSubtract(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.SubtractContext = SubtractContext;

mathParser.prototype.subtract = function() {

    var localctx = new SubtractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, mathParser.RULE_subtract);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(mathParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_multiply;
    return this;
}

MultiplyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;


MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.MultiplyContext = MultiplyContext;

mathParser.prototype.multiply = function() {

    var localctx = new MultiplyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, mathParser.RULE_multiply);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(mathParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DivideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_divide;
    return this;
}

DivideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideContext.prototype.constructor = DivideContext;


DivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterDivide(this);
	}
};

DivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitDivide(this);
	}
};

DivideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitDivide(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.DivideContext = DivideContext;

mathParser.prototype.divide = function() {

    var localctx = new DivideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, mathParser.RULE_divide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(mathParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


mathParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
	case 2:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

mathParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

mathParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.mathParser = mathParser;
