grammar math;
start: expr | presedenceExpr | number | EOF;
expr:
	| number operator (number | presedenceExpr)
	| presedenceExpr operator (number | expr)
	| expr operator (presedenceExpr | number);
presedenceExpr:
	number presedenceOperator number
	| presedenceExpr presedenceOperator number
	| parenthesizedExpr presedenceOperator number;
parenthesizedExpr: '(' expr ')';

number: exponent | plainNumber;
plainNumber: INT | FLOAT;
exponent: plainNumber '^' plainNumber;
operator: '+' | '-';
presedenceOperator: '/' | '*';

INT: DIGIT+;
FLOAT: DIGIT+ '.' DIGIT* | '.' DIGIT+;
DIGIT: [0-9];
SP: ' '+ -> skip;