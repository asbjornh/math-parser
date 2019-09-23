// Generated from math.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\rI\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0006\t)\n\t\r\t\u000e\t*\u0003\n\u0006\n.",
    "\n\n\r\n\u000e\n/\u0003\n\u0003\n\u0007\n4\n\n\f\n\u000e\n7\u000b\n",
    "\u0003\n\u0003\n\u0006\n;\n\n\r\n\u000e\n<\u0005\n?\n\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0006\fD\n\f\r\f\u000e\fE\u0003\f\u0003\f\u0002",
    "\u0002\r\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0003\u0002\u0003\u0003",
    "\u00022;\u0002N\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003",
    "\u0002\u0002\u0002\u0005\u001b\u0003\u0002\u0002\u0002\u0007\u001d\u0003",
    "\u0002\u0002\u0002\t\u001f\u0003\u0002\u0002\u0002\u000b!\u0003\u0002",
    "\u0002\u0002\r#\u0003\u0002\u0002\u0002\u000f%\u0003\u0002\u0002\u0002",
    "\u0011(\u0003\u0002\u0002\u0002\u0013>\u0003\u0002\u0002\u0002\u0015",
    "@\u0003\u0002\u0002\u0002\u0017C\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0007*\u0002\u0002\u001a\u0004\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0007+\u0002\u0002\u001c\u0006\u0003\u0002\u0002\u0002\u001d\u001e",
    "\u0007`\u0002\u0002\u001e\b\u0003\u0002\u0002\u0002\u001f \u0007-\u0002",
    "\u0002 \n\u0003\u0002\u0002\u0002!\"\u0007/\u0002\u0002\"\f\u0003\u0002",
    "\u0002\u0002#$\u00071\u0002\u0002$\u000e\u0003\u0002\u0002\u0002%&\u0007",
    ",\u0002\u0002&\u0010\u0003\u0002\u0002\u0002\')\u0005\u0015\u000b\u0002",
    "(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+\u0012\u0003\u0002\u0002\u0002",
    ",.\u0005\u0015\u000b\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000201\u0003\u0002",
    "\u0002\u000215\u00070\u0002\u000224\u0005\u0015\u000b\u000232\u0003",
    "\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u00026?\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u00028:\u00070\u0002\u00029;\u0005\u0015\u000b\u0002:9\u0003\u0002",
    "\u0002\u0002;<\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002>-\u0003\u0002\u0002\u0002",
    ">8\u0003\u0002\u0002\u0002?\u0014\u0003\u0002\u0002\u0002@A\t\u0002",
    "\u0002\u0002A\u0016\u0003\u0002\u0002\u0002BD\u0007\"\u0002\u0002CB",
    "\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GH\b\f\u0002",
    "\u0002H\u0018\u0003\u0002\u0002\u0002\t\u0002*/5<>E\u0003\b\u0002\u0002"].join("");


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
mathLexer.INT = 8;
mathLexer.FLOAT = 9;
mathLexer.DIGIT = 10;
mathLexer.SP = 11;

mathLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

mathLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

mathLexer.prototype.literalNames = [ null, "'('", "')'", "'^'", "'+'", "'-'", 
                                     "'/'", "'*'" ];

mathLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, "INT", "FLOAT", "DIGIT", 
                                      "SP" ];

mathLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "INT", "FLOAT", "DIGIT", 
                                  "SP" ];

mathLexer.prototype.grammarFileName = "math.g4";



exports.mathLexer = mathLexer;

