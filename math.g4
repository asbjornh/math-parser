grammar math;
start: expr | EOF;
expr: term | expr (add | subtract) term;
term: number | term (multiply | divide) number;
number: innerNumber | innerNumber exponent innerNumber;

innerNumber: INT | FLOAT;

exponent: '^';
add: '+';
subtract: '-';
multiply: '*';
divide: '/';

INT: DIGIT+;
FLOAT: DIGIT+ '.' DIGIT* | '.' DIGIT+;
DIGIT: [0-9];
SP: ' '+ -> skip;

