/**
 * @param {string} s
 * @return {number}
 */

const LEFT_PARENTH = "LEFT_PARENTH";
const RIGHT_PARENTH = "RIGHT_PARENTH";
const NUMBER = "NUMBER";
const ADD_OP = "ADD_OP";
const SUB_OP = "SUB_OP";
const EOF = "EOF";

class Token {
  constructor(type, val) {
    this.type = type;
    this.val = val;
  }
}

const LEFT_PARENTH_TOKEN = new Token(LEFT_PARENTH, "(");
const RIGHT_PARENTH_TOKEN = new Token(RIGHT_PARENTH, ")");
const ADD_TOKEN = new Token(ADD_OP, "+");
const SUB_TOKEN = new Token(SUB_OP, "-");
const EOF_TOKEN = new Token(EOF);

class Lexer {
  constructor(s) {
    this.str = s;
    this.idx = 0;
  }

  lex() {
    const toks = [];
    while (this.idx < this.str.length) {
      const ch = this.peek();
      switch (true) {
        case /\d/.test(ch):
          toks.push(new Token(NUMBER, this.numExp()));
          break;
        case ch === "(":
          this.eat();
          toks.push(LEFT_PARENTH_TOKEN);
          break;
        case ch === ")":
          this.eat();
          toks.push(RIGHT_PARENTH_TOKEN);
          break;
        case ch === "+" || ch === "-":
          toks.push(this.eat() === "+" ? ADD_TOKEN : SUB_TOKEN);
          break;
        case /\s+/.test(ch):
          this.eat();
          break;
        default:
          this.unexpected();
      }
    }
    return toks;
  }

  numExp() {
    let d = 0;
    while (this.idx < this.str.length) {
      const ch = this.peek();
      if (/\d/.test(ch)) {
        this.eat();
        d = d * 10 + ch.charCodeAt(0) - "0".charCodeAt(0);
      } else {
        break;
      }
    }

    return d;
  }

  eat() {
    if (this.idx >= this.str.length) {
      this.unexpected();
    }
    return this.str[this.idx++];
  }

  peek() {
    if (this.idx >= this.str.length) {
      this.unexpected();
    }
    return this.str[this.idx];
  }

  unexpected() {
    throw new Error(`unexpected char at ${this.idx}`);
  }
}

class Parser {
  constructor(toks) {
    this.toks = toks;
    this.idx = 0;
    this.parenthLevel = 0;
  }

  parse() {
    return this.exp();
  }

  op() {
    const tk = this.peek();
    if ((tk.type != ADD_OP) | (tk.type != SUB_OP)) this.unexpected();
    return this.eat();
  }

  eatIf(type) {
    const tk = this.peek();
    if (tk.type === type) {
      return this.eat();
    } else {
      this.unexpected();
    }
  }

  exp() {
    const p = this.primary();
    const stack = [p];
    while (true) {
      const next = this.peek();
      if (next.type === ADD_OP || next.type === SUB_OP) {
        this.eat();
        const q = this.primary();
        const be = new BinaryExp(next.val);
        be.left = stack.pop();
        be.right = q;
        stack.push(be);
      } else {
        break;
      }
    }
    if (stack.length === 1) return stack.pop();
    else this.unexpected();
  }

  primary() {
    const tk = this.peek();
    switch (tk.type) {
      case NUMBER:
        return new BinaryExp(this.eat().val);
      case LEFT_PARENTH:
        this.eat();
        const inner = this.exp();
        this.eatIf(RIGHT_PARENTH);
        return inner;
      default:
        this.unexpected();
    }
  }

  eat() {
    if (this.idx >= this.toks.length) {
      this.unexpected();
    }
    return this.toks[this.idx++];
  }

  peek() {
    if (this.idx >= this.toks.length) {
      return EOF_TOKEN;
    }
    return this.toks[this.idx];
  }

  unexpected() {
    throw new Error(`unexpected token: ${this.idx}`);
  }
}

class BinaryExp {
  constructor(val) {
    this.left = null;
    this.val = val;
    this.right = null;
  }
}

function evalAst(ast) {
  if (ast.val === "+") {
    return evalAst(ast.left) + evalAst(ast.right);
  } else if (ast.val === "-") {
    return evalAst(ast.left) - evalAst(ast.right);
  } else {
    return ast.val;
  }
}

var calculate = function(s) {
  return evalAst(new Parser(new Lexer(s).lex()).parse());
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
