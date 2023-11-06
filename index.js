import antlr4 from 'antlr4';
import ECMAScriptLexer from './lib/ECMAScriptLexer.js'
import ECMAScriptParser from './lib/ECMAScriptParser.js';
//import ECMAScriptListener from './lib/ECMAScriptListener.js';

const input = "your text to parse here"
const chars = new antlr4.InputStream(input);
const lexer = new ECMAScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ECMAScriptParser(tokens);
const tree = parser.MyStartRule();