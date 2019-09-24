// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000eN\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0006\n.\n\n\r\n\u000e\n/\u0003\u000b\u0006\u000b3\n\u000b\r\u000b",
    "\u000e\u000b4\u0003\u000b\u0003\u000b\u0007\u000b9\n\u000b\f\u000b\u000e",
    "\u000b<\u000b\u000b\u0003\u000b\u0003\u000b\u0006\u000b@\n\u000b\r\u000b",
    "\u000e\u000bA\u0005\u000bD\n\u000b\u0003\f\u0003\f\u0003\r\u0006\rI",
    "\n\r\r\r\u000e\rJ\u0003\r\u0003\r\u0002\u0002\u000e\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u0003\u0002\u0003\u0003\u00022;\u0002S",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0003\u001b\u0003\u0002\u0002\u0002\u0005\u001e\u0003\u0002\u0002\u0002",
    "\u0007 \u0003\u0002\u0002\u0002\t\"\u0003\u0002\u0002\u0002\u000b$\u0003",
    "\u0002\u0002\u0002\r&\u0003\u0002\u0002\u0002\u000f(\u0003\u0002\u0002",
    "\u0002\u0011*\u0003\u0002\u0002\u0002\u0013-\u0003\u0002\u0002\u0002",
    "\u0015C\u0003\u0002\u0002\u0002\u0017E\u0003\u0002\u0002\u0002\u0019",
    "H\u0003\u0002\u0002\u0002\u001b\u001c\u0007*\u0002\u0002\u001c\u001d",
    "\u0007+\u0002\u0002\u001d\u0004\u0003\u0002\u0002\u0002\u001e\u001f",
    "\u0007*\u0002\u0002\u001f\u0006\u0003\u0002\u0002\u0002 !\u0007+\u0002",
    "\u0002!\b\u0003\u0002\u0002\u0002\"#\u0007`\u0002\u0002#\n\u0003\u0002",
    "\u0002\u0002$%\u0007-\u0002\u0002%\f\u0003\u0002\u0002\u0002&\'\u0007",
    "/\u0002\u0002\'\u000e\u0003\u0002\u0002\u0002()\u0007,\u0002\u0002)",
    "\u0010\u0003\u0002\u0002\u0002*+\u00071\u0002\u0002+\u0012\u0003\u0002",
    "\u0002\u0002,.\u0005\u0017\f\u0002-,\u0003\u0002\u0002\u0002./\u0003",
    "\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u0002",
    "0\u0014\u0003\u0002\u0002\u000213\u0005\u0017\f\u000221\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u000256\u0003\u0002\u0002\u00026:\u00070\u0002\u000279",
    "\u0005\u0017\f\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002",
    ":8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;D\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002=?\u00070\u0002\u0002>@\u0005\u0017",
    "\f\u0002?>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BD\u0003\u0002\u0002\u0002",
    "C2\u0003\u0002\u0002\u0002C=\u0003\u0002\u0002\u0002D\u0016\u0003\u0002",
    "\u0002\u0002EF\t\u0002\u0002\u0002F\u0018\u0003\u0002\u0002\u0002GI",
    "\u0007\"\u0002\u0002HG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002",
    "JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002",
    "\u0002LM\b\r\u0002\u0002M\u001a\u0003\u0002\u0002\u0002\t\u0002/4:A",
    "CJ\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function mathLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

mathLexer.prototype = Object.create(antlr4.Lexer.prototype);
mathLexer.prototype.constructor = mathLexer;

Object.defineProperty(mathLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

mathLexer.EOF = antlr4.Token.EOF;
mathLexer.T__0 = 1;
mathLexer.T__1 = 2;
mathLexer.T__2 = 3;
mathLexer.T__3 = 4;
mathLexer.T__4 = 5;
mathLexer.T__5 = 6;
mathLexer.T__6 = 7;
mathLexer.T__7 = 8;
mathLexer.INT = 9;
mathLexer.FLOAT = 10;
mathLexer.DIGIT = 11;
mathLexer.SP = 12;

mathLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

mathLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

mathLexer.prototype.literalNames = [ null, "'()'", "'('", "')'", "'^'", 
                                     "'+'", "'-'", "'*'", "'/'" ];

mathLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, "INT", "FLOAT", 
                                      "DIGIT", "SP" ];

mathLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "INT", "FLOAT", 
                                  "DIGIT", "SP" ];

mathLexer.prototype.grammarFileName = "math.g4";



exports.mathLexer = mathLexer;

