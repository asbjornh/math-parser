grammar math;
start: expr | '()' | EOF;
expr: term | expr (add | subtract) term;
term: factor | term (multiply | divide) factor;
factor: number | number exponent factor;
number: INT | FLOAT | '(' expr ')';

exponent: '^';
add: '+';
subtract: '-';
multiply: '*';
divide: '/';

INT: DIGIT+;
FLOAT: DIGIT+ '.' DIGIT* | '.' DIGIT+;
DIGIT: [0-9];
SP: ' '+ -> skip;

