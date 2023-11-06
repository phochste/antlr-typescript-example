grammar cool_lang;

file:          (expr ';' | declaration ';' | assignment ';')+ EOF;
declaration:   VAR IDENTIFIER;
expr:          IDENTIFIER (OP IDENTIFIER)?;
assignment:    IDENTIFIER '=' (NUMBER | expr);
if_statement:  IF '(' expr ')' THEN '{' command '}' (ELSE '{' command '}')?;
command:       STOP | CONTINUE | if_statement | assignment;
IDENTIFIER:    WORD (NUMBER | WORD)*;
IF:            'if';
THEN:          'then';
ELSE:          'else';
OP:            '+' | '-' | '*' | '/';
STOP:          'stop';
CONTINUE:      'continue';
VAR:           'var';

NUMBER:        [1–9]+;
WORD:          [a-z]+;
SPACES:        [\t\r\n ]+ -> skip;