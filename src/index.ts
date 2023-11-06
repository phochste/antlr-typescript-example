import { CharStream, CommonTokenStream }  from 'antlr4';
import cool_langLexer  from './grammars/cool_langLexer';
import cool_langParser  from './grammars/cool_langParser';

const input = `
var one;
var two;
var three;
three = one + two;
if (two + two) then {
  STOP
} else {
  if (one * one) then { CONTINUE }
}
`; 
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new cool_langLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new cool_langParser(tokens);
const tree = parser.file();

console.log(tree.toStringTree(null, parser));