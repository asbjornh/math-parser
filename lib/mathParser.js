// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var mathListener = require('./mathListener').mathListener;
var mathVisitor = require('./mathVisitor').mathVisitor;

var grammarFileName = "math.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r[\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\u0019\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003 \n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003&\n\u0003\u0005\u0003(\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003.\n\u0003\u0007",
    "\u00030\n\u0003\f\u0003\u000e\u00033\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004>\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004D\n\u0004\f\u0004\u000e\u0004G\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u0006O\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0002\u0004\u0004\u0006\u000b",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0005\u0003\u0002\n",
    "\u000b\u0003\u0002\u0006\u0007\u0003\u0002\b\t\u0002]\u0002\u0018\u0003",
    "\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002\u0002\u0006=\u0003\u0002",
    "\u0002\u0002\bH\u0003\u0002\u0002\u0002\nN\u0003\u0002\u0002\u0002\f",
    "P\u0003\u0002\u0002\u0002\u000eR\u0003\u0002\u0002\u0002\u0010V\u0003",
    "\u0002\u0002\u0002\u0012X\u0003\u0002\u0002\u0002\u0014\u0019\u0005",
    "\u0004\u0003\u0002\u0015\u0019\u0005\u0006\u0004\u0002\u0016\u0019\u0005",
    "\n\u0006\u0002\u0017\u0019\u0007\u0002\u0002\u0003\u0018\u0014\u0003",
    "\u0002\u0002\u0002\u0018\u0015\u0003\u0002\u0002\u0002\u0018\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u0003\u0003",
    "\u0002\u0002\u0002\u001a(\b\u0003\u0001\u0002\u001b\u001c\u0005\n\u0006",
    "\u0002\u001c\u001f\u0005\u0010\t\u0002\u001d \u0005\n\u0006\u0002\u001e",
    " \u0005\u0006\u0004\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f",
    "\u001e\u0003\u0002\u0002\u0002 (\u0003\u0002\u0002\u0002!\"\u0005\u0006",
    "\u0004\u0002\"%\u0005\u0010\t\u0002#&\u0005\n\u0006\u0002$&\u0005\u0004",
    "\u0003\u0002%#\u0003\u0002\u0002\u0002%$\u0003\u0002\u0002\u0002&(\u0003",
    "\u0002\u0002\u0002\'\u001a\u0003\u0002\u0002\u0002\'\u001b\u0003\u0002",
    "\u0002\u0002\'!\u0003\u0002\u0002\u0002(1\u0003\u0002\u0002\u0002)*",
    "\f\u0003\u0002\u0002*-\u0005\u0010\t\u0002+.\u0005\u0006\u0004\u0002",
    ",.\u0005\n\u0006\u0002-+\u0003\u0002\u0002\u0002-,\u0003\u0002\u0002",
    "\u0002.0\u0003\u0002\u0002\u0002/)\u0003\u0002\u0002\u000203\u0003\u0002",
    "\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u00022\u0005",
    "\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000245\b\u0004\u0001\u0002",
    "56\u0005\n\u0006\u000267\u0005\u0012\n\u000278\u0005\n\u0006\u00028",
    ">\u0003\u0002\u0002\u00029:\u0005\b\u0005\u0002:;\u0005\u0012\n\u0002",
    ";<\u0005\n\u0006\u0002<>\u0003\u0002\u0002\u0002=4\u0003\u0002\u0002",
    "\u0002=9\u0003\u0002\u0002\u0002>E\u0003\u0002\u0002\u0002?@\f\u0004",
    "\u0002\u0002@A\u0005\u0012\n\u0002AB\u0005\n\u0006\u0002BD\u0003\u0002",
    "\u0002\u0002C?\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u0007\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002HI\u0007\u0003\u0002\u0002IJ\u0005\u0004",
    "\u0003\u0002JK\u0007\u0004\u0002\u0002K\t\u0003\u0002\u0002\u0002LO",
    "\u0005\u000e\b\u0002MO\u0005\f\u0007\u0002NL\u0003\u0002\u0002\u0002",
    "NM\u0003\u0002\u0002\u0002O\u000b\u0003\u0002\u0002\u0002PQ\t\u0002",
    "\u0002\u0002Q\r\u0003\u0002\u0002\u0002RS\u0005\f\u0007\u0002ST\u0007",
    "\u0005\u0002\u0002TU\u0005\f\u0007\u0002U\u000f\u0003\u0002\u0002\u0002",
    "VW\t\u0003\u0002\u0002W\u0011\u0003\u0002\u0002\u0002XY\t\u0004\u0002",
    "\u0002Y\u0013\u0003\u0002\u0002\u0002\u000b\u0018\u001f%\'-1=EN"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'^'", "'+'", "'-'", "'/'", "'*'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "INT", 
                      "FLOAT", "DIGIT", "SP" ];

var ruleNames =  [ "start", "expr", "presedenceExpr", "parenthesizedExpr", 
                   "number", "plainNumber", "exponent", "operator", "presedenceOperator" ];

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
mathParser.INT = 8;
mathParser.FLOAT = 9;
mathParser.DIGIT = 10;
mathParser.SP = 11;

mathParser.RULE_start = 0;
mathParser.RULE_expr = 1;
mathParser.RULE_presedenceExpr = 2;
mathParser.RULE_parenthesizedExpr = 3;
mathParser.RULE_number = 4;
mathParser.RULE_plainNumber = 5;
mathParser.RULE_exponent = 6;
mathParser.RULE_operator = 7;
mathParser.RULE_presedenceOperator = 8;


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

StartContext.prototype.presedenceExpr = function() {
    return this.getTypedRuleContext(PresedenceExprContext,0);
};

StartContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
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
        this.state = 22;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 19;
            this.presedenceExpr(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 20;
            this.number();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 21;
            this.match(mathParser.EOF);
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

ExprContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

ExprContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

ExprContext.prototype.presedenceExpr = function() {
    return this.getTypedRuleContext(PresedenceExprContext,0);
};

ExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
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
        this.state = 37;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            break;

        case 2:
            this.state = 25;
            this.number();
            this.state = 26;
            this.operator();
            this.state = 29;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            switch(la_) {
            case 1:
                this.state = 27;
                this.number();
                break;

            case 2:
                this.state = 28;
                this.presedenceExpr(0);
                break;

            }
            break;

        case 3:
            this.state = 31;
            this.presedenceExpr(0);
            this.state = 32;
            this.operator();
            this.state = 35;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 33;
                this.number();
                break;

            case 2:
                this.state = 34;
                this.expr(0);
                break;

            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 47;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, mathParser.RULE_expr);
                this.state = 39;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 40;
                this.operator();
                this.state = 43;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 41;
                    this.presedenceExpr(0);
                    break;

                case 2:
                    this.state = 42;
                    this.number();
                    break;

                } 
            }
            this.state = 49;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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


function PresedenceExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_presedenceExpr;
    return this;
}

PresedenceExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PresedenceExprContext.prototype.constructor = PresedenceExprContext;

PresedenceExprContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

PresedenceExprContext.prototype.presedenceOperator = function() {
    return this.getTypedRuleContext(PresedenceOperatorContext,0);
};

PresedenceExprContext.prototype.parenthesizedExpr = function() {
    return this.getTypedRuleContext(ParenthesizedExprContext,0);
};

PresedenceExprContext.prototype.presedenceExpr = function() {
    return this.getTypedRuleContext(PresedenceExprContext,0);
};

PresedenceExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterPresedenceExpr(this);
	}
};

PresedenceExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitPresedenceExpr(this);
	}
};

PresedenceExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitPresedenceExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



mathParser.prototype.presedenceExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new PresedenceExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, mathParser.RULE_presedenceExpr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mathParser.INT:
        case mathParser.FLOAT:
            this.state = 51;
            this.number();
            this.state = 52;
            this.presedenceOperator();
            this.state = 53;
            this.number();
            break;
        case mathParser.T__0:
            this.state = 55;
            this.parenthesizedExpr();
            this.state = 56;
            this.presedenceOperator();
            this.state = 57;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new PresedenceExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, mathParser.RULE_presedenceExpr);
                this.state = 61;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 62;
                this.presedenceOperator();
                this.state = 63;
                this.number(); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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


function ParenthesizedExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_parenthesizedExpr;
    return this;
}

ParenthesizedExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParenthesizedExprContext.prototype.constructor = ParenthesizedExprContext;

ParenthesizedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParenthesizedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterParenthesizedExpr(this);
	}
};

ParenthesizedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitParenthesizedExpr(this);
	}
};

ParenthesizedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitParenthesizedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.ParenthesizedExprContext = ParenthesizedExprContext;

mathParser.prototype.parenthesizedExpr = function() {

    var localctx = new ParenthesizedExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, mathParser.RULE_parenthesizedExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(mathParser.T__0);
        this.state = 71;
        this.expr(0);
        this.state = 72;
        this.match(mathParser.T__1);
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

NumberContext.prototype.exponent = function() {
    return this.getTypedRuleContext(ExponentContext,0);
};

NumberContext.prototype.plainNumber = function() {
    return this.getTypedRuleContext(PlainNumberContext,0);
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
        this.state = 76;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.exponent();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.plainNumber();
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


function PlainNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_plainNumber;
    return this;
}

PlainNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlainNumberContext.prototype.constructor = PlainNumberContext;

PlainNumberContext.prototype.INT = function() {
    return this.getToken(mathParser.INT, 0);
};

PlainNumberContext.prototype.FLOAT = function() {
    return this.getToken(mathParser.FLOAT, 0);
};

PlainNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterPlainNumber(this);
	}
};

PlainNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitPlainNumber(this);
	}
};

PlainNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitPlainNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.PlainNumberContext = PlainNumberContext;

mathParser.prototype.plainNumber = function() {

    var localctx = new PlainNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, mathParser.RULE_plainNumber);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        _la = this._input.LA(1);
        if(!(_la===mathParser.INT || _la===mathParser.FLOAT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

ExponentContext.prototype.plainNumber = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PlainNumberContext);
    } else {
        return this.getTypedRuleContext(PlainNumberContext,i);
    }
};

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
    this.enterRule(localctx, 12, mathParser.RULE_exponent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.plainNumber();
        this.state = 81;
        this.match(mathParser.T__2);
        this.state = 82;
        this.plainNumber();
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


function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;


OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.OperatorContext = OperatorContext;

mathParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, mathParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        _la = this._input.LA(1);
        if(!(_la===mathParser.T__3 || _la===mathParser.T__4)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function PresedenceOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mathParser.RULE_presedenceOperator;
    return this;
}

PresedenceOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PresedenceOperatorContext.prototype.constructor = PresedenceOperatorContext;


PresedenceOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.enterPresedenceOperator(this);
	}
};

PresedenceOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof mathListener ) {
        listener.exitPresedenceOperator(this);
	}
};

PresedenceOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mathVisitor ) {
        return visitor.visitPresedenceOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mathParser.PresedenceOperatorContext = PresedenceOperatorContext;

mathParser.prototype.presedenceOperator = function() {

    var localctx = new PresedenceOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, mathParser.RULE_presedenceOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        _la = this._input.LA(1);
        if(!(_la===mathParser.T__5 || _la===mathParser.T__6)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


mathParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
	case 2:
			return this.presedenceExpr_sempred(localctx, predIndex);
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

mathParser.prototype.presedenceExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.mathParser = mathParser;
