/**
 * @param {string} s
 * @return {number}
 */

const LEFT_PARENTH = "LEFT_PARENTH";
const RIGHT_PARENTH = "RIGHT_PARENTH";
const NUMBER = "NUMBER";
const ADD_OP = "ADD_OP";
const SUB_OP = "SUB_OP";
const MUL_OP = "MUL_OP";
const DIV_OP = "DIV_OP";
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
const MUL_TOKEN = new Token(MUL_OP, "*");
const DIV_TOKEN = new Token(DIV_OP, "/");
const EOF_TOKEN = new Token(EOF);

const OpPrecedence = {
  "-": 1,
  "+": 1,
  "*": 10,
  "/": 10
};

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
        case ch === "*":
          this.eat();
          toks.push(MUL_TOKEN);
          break;
        case ch === "/":
          this.eat();
          toks.push(DIV_TOKEN);
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
      if (
        next.type === ADD_OP ||
        next.type === SUB_OP ||
        next.type == MUL_OP ||
        next.type == DIV_OP
      ) {
        this.eat();
        const q = this.primary();
        if (stack.length === 1) {
          const be = new BinaryExp(next.val);
          stack.push(q);
          stack.push(be);
        } else {
          const top = stack[stack.length - 1];
          if (OpPrecedence[top.val] >= OpPrecedence[next.val]) {
            const op = stack.pop();
            op.right = stack.pop();
            op.left = stack.pop();
            stack.push(op);
            stack.push(q);
            stack.push(new BinaryExp(next.val));
          } else {
            const op = stack.pop();
            const right = stack.pop();
            const newOp = new BinaryExp(next.val);
            newOp.left = right;
            newOp.right = q;
            stack.push(newOp);
            stack.push(op);
          }
        }
      } else {
        break;
      }
    }
    if (stack.length === 3) {
      const op = stack.pop();
      op.right = stack.pop();
      op.left = stack.pop();
      return op;
    } else if (stack.length === 1) {
      return stack.pop();
    } else this.unexpected();
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
  } else if (ast.val === "*") {
    return evalAst(ast.left) * evalAst(ast.right);
  } else if (ast.val === "/") {
    return Math.floor(evalAst(ast.left) / evalAst(ast.right));
  } else {
    return ast.val;
  }
}

function evalAst1(ast) {
  const ops = [];
  const stack = [ast];
  while (stack.length) {
    const t = stack.pop();
    ops.push(t.val);
    if (t.right) stack.push(t.right);
    if (t.left) stack.push(t.left);
  }
  operands = [];
  while (ops.length) {
    const op = ops.pop();
    switch (op) {
      case "+":
        operands.push(operands.pop() + operands.pop());
        break;
      case "-":
        operands.push(operands.pop() - operands.pop());
        break;
      case "*":
        operands.push(operands.pop() * operands.pop());
        break;
      case "/":
        operands.push(Math.floor(operands.pop() / operands.pop()));
        break;
      default:
        operands.push(op);
    }
  }
  return operands.pop();
}

var calculate = function(s) {
  // console.log(s);
  const toks = new Lexer(s).lex();
  // console.log(toks);
  const ast = new Parser(toks).parse();
  // console.log(ast);
  // return evalAst(ast);
  return evalAst1(ast);
};

// console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
console.log(calculate("3+5 / 2 + (1 + 3 / 4) * 2"));
