import { CharStream, CommonTokenStream, ParseTreeWalker }  from 'antlr4';
import mylangLexer from './grammars/mylangLexer';
import mylangParser, { ExprContext, ProgContext } from './grammars/mylangParser';
import mylangListener from './grammars/mylangListener';

const input = `1+2`; 

class MyTreeWalker extends mylangListener {

  exitProg = (_ctx: ProgContext) => {
      console.log("In MyStartRule");
  };
  
  exitExpr = (ctx: ExprContext) => {
      if (ctx.getChildCount() == 3) {
        console.log(
          `>>` + 
          ctx.getChild(0).getText() + 
          ctx.getChild(1).getText() +
          ctx.getChild(2).getText()
        );
      }
  }
}

const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new mylangLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new mylangParser(tokens);
const tree = parser.prog();

const walker = new MyTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);