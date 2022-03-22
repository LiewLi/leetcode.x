/**
 * @param {string} expression
 * @return {boolean}
 */

const TRUE = Symbol("true");
const FALSE = Symbol("false");
const LEFT_PARENTH = Symbol("(");
const RIGHT_PARENTH = Symbol(")");
const NOT_OPERATOR = Symbol("!");
const AND_OPERATOR = Symbol("&");
const OR_OPERATPR = Symbol("|");
const COMMA = Symbol(",");
const EOF = Symbol("EOF");

const OPERATION = Symbol("operation");
const OPERAND = Symbol("operand");
const COMPOUND = Symbol("compound");

class Lexer {
  constructor(expression) {
    this.expression = expression;
  }

  lex() {
    this.current = 0;
    const toks = [];
    while (this.peek()) {
      const ch = this.peek();
      if (ch === "t") toks.push(TRUE);
      else if (ch === "f") toks.push(FALSE);
      else if (ch === "(") toks.push(LEFT_PARENTH);
      else if (ch === ")") toks.push(RIGHT_PARENTH);
      else if (ch === "!") toks.push(NOT_OPERATOR);
      else if (ch === "|") toks.push(OR_OPERATPR);
      else if (ch === "&") toks.push(AND_OPERATOR);
      else if (ch === ",") toks.push(COMMA);
      this.eat();
    }
    return toks;
  }

  peek() {
    if (this.current < this.expression.length) {
      return this.expression[this.current];
    }
  }

  eat() {
    if (this.current < this.expression.length) {
      return this.expression[this.current++];
    }
    this.unexpected();
  }

  unexpected() {
    throw new Error(`unexpected char at ${this.current}`);
  }
}

class Parser {
  constructor(toks) {
    this.toks = toks;
  }

  parse() {
    this.current = 0;
    const ast = this.exp();
    this.expect(EOF);
    return ast;
  }

  exp() {
    const tk = this.peek();

    if (tk === TRUE) return { type: OPERAND, val: true };
    else if (tk === FALSE) return { type: OPERAND, val: true };
    else if ([NOT_OPERATOR, OR_OPERATPR, AND_OPERATOR].includes(tk)) {
      const op = this.eat();
      this.eatIf(LEFT_PARENTH);
      const opNode = {
        type: OPERATION,
        val: op,
        arguments: []
      };
      do {
        const node = this.primary();
        opNode.arguments.push(node);
      } while (this.peek() === COMMA && this.eat());
      this.eatIf(RIGHT_PARENTH);
      return opNode;
    }
    this.unexpected();
  }

  primary() {
    const tk = this.peek();
    if (tk === TRUE) {
      this.eat();
      return { type: OPERAND, val: true };
    } else if (tk === FALSE) {
      this.eat();
      return { type: OPERAND, val: false };
    }
    return this.exp();
  }

  peek() {
    if (this.current < this.toks.length) return this.toks[this.current];
    return EOF;
  }

  eat() {
    if (this.current < this.toks.length) {
      return this.toks[this.current++];
    }
    this.unexpected();
  }

  eatIf(sym) {
    if (this.current < this.toks.length && this.toks[this.current] === sym) {
      return this.toks[this.current++];
    }
    this.unexpected();
  }

  expect(sym) {
    if (this.peek() !== sym) this.unexpected();
  }

  unexpected() {
    throw new Error(`unexpected token at ${this.current}`);
  }
}

eval = ast => {
  if (ast.type === OPERAND) {
    return ast.val;
  } else if (ast.type === OPERATION) {
    if (ast.val === NOT_OPERATOR && ast.arguments.length === 1) {
      return !eval(ast.arguments[0]);
    } else if (ast.val === OR_OPERATPR && ast.arguments.length > 0) {
      const ret = ast.arguments.map(eval);
      return ret.some(e => e);
    } else if (ast.val === AND_OPERATOR && ast.arguments.length > 0) {
      const ret = ast.arguments.map(eval);
      return ret.every(e => e);
    }
  }
  throw new Error("unexpected ast", ast);
};

var parseBoolExpr = function(expression) {
  const lexer = new Lexer(expression);
  const toks = lexer.lex();
  const parser = new Parser(toks);
  const ast = parser.parse();
  return eval(ast);
};
