/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class Lexer {
  constructor(rules) {
    for (const rule of rules) {
      if (rule[1].source[0] !== "^" || !rule[1].global) {
        throw new Error("INVALID REGEXP");
      }
      this.rules = rules;
    }
  }

  parse(input) {
    return this.parseNextAvailable(input, 0, 1, 1);
  }

  parseNextAvailable(input, index, rowBegin, colBegin) {
    let token;
    while (true) {
      token = this.parseNext(
        input,
        token ? token.pos.index + token.text.length : index,
        token ? token.pos.rowEnd : rowBegin,
        token ? token.pos.colEnd : colBegin
      );
      if (!token) return;
      else if (token.keep) return token;
    }
  }

  parseNext(input, indexStart, rowBegin, colBegin) {
    if (indexStart === input.length) {
      return;
    }
    let result;
    const substr = input.substring(indexStart);
    for (const [keep, regexp, kind] of this.rules) {
      regexp.lastIndex = 0;
      if (regexp.test(substr)) {
        const text = substr.substring(0, regexp.lastIndex);
        let rowEnd = rowBegin;
        let colEnd = colBegin;
        for (const ch of text) {
          switch (ch) {
            case "\r":
              break;
            case "\n":
              rowEnd++;
              colEnd = 1;
              break;
            default:
              colEnd++;
          }
        }

        const newResult = new Token(
          this,
          input,
          kind,
          text,
          {
            index: indexStart,
            rowBegin,
            colBegin,
            rowEnd,
            colEnd
          },
          keep
        );

        if (
          result === undefined ||
          result.text.length < newResult.text.length
        ) {
          result = newResult;
        }
      }
    }

    if (result === undefined) {
      throw new TokenError(
        {
          index: indexStart,
          rowBegin,
          rowEnd: rowBegin,
          colBegin,
          colEnd: colBegin
        },
        `Unable to tokenize the rest of input: ${input.substring(indexStart)}`
      );
    } else {
      return result;
    }
  }
}

class Token {
  constructor(lexer, input, kind, text, pos, keep) {
    this.lexer = lexer;
    this.input = input;
    this.kind = kind;
    this.text = text;
    this.pos = pos;
    this.keep = keep;
  }

  get next() {
    if (this.nexToken === undefined) {
      this.nexToken = this.lexer.parseNextAvailable(
        this.input,
        this.pos.index + this.text.length,
        this.pos.rowEnd,
        this.pos.colEnd
      );
    }
    return this.nexToken === null ? undefined : this.nexToken;
  }
}

class TokenError extends Error {
  constructor(pos, errMsg) {
    super(errMsg);
    this.pos = pos;
  }
}

const NUMBER = Symbol("NUMBER");
const MINUS = Symbol("MINUS");
const LEFT_BRACKET = Symbol("LEFT_BRACKET");
const RIGHT_BRACKET = Symbol("RIGHT_BRACKET");
const COMMA = Symbol("COMMA");
const SPACE = Symbol("SPACE");

const lex = str => {
  const lexer = new Lexer([
    [true, /^-?\d+/g, NUMBER],
    [true, /^\[/g, LEFT_BRACKET],
    [true, /^\]/g, RIGHT_BRACKET],
    [true, /^,/g, COMMA],
    [false, /^\s+/g, SPACE]
  ]);
  return lexer.parse(str);
};

class Parser {
  constructor(tok) {
    this.tok = tok;
  }

  parse() {
    return this.exp();
  }

  exp() {
    if (this.tok.kind === NUMBER) {
      return { type: "NUMBER", val: +this.eat().text };
    } else if (this.tok.kind === LEFT_BRACKET) {
      this.eat();
      const exp = { type: "ARRAY", val: [] };
      while (this.tok.kind !== RIGHT_BRACKET) {
        if (this.tok.kind === NUMBER) {
          exp.val.push({ type: "NUMBER", val: +this.eat().text });
        } else if (this.tok.kind === LEFT_BRACKET) {
          const sub = this.exp();
          exp.val.push(sub);
        }
        if (this.tok && this.tok.kind !== RIGHT_BRACKET) {
          this.eatIf(COMMA);
        }
      }
      this.eatIf(RIGHT_BRACKET);
      return exp;
    }
    this.unexpected();
  }

  eatIf(sym) {
    if (this.tok.kind === sym) {
      return this.eat();
    }
    this.unexpected();
  }

  peek() {
    return this.tok.next;
  }

  eat() {
    if (!this.tok) {
      this.unexpected();
    }
    const t = this.tok;
    this.tok = this.tok.next;
    return t;
  }

  unexpected() {
    throw new Error("unexpected token");
  }
}

const eval = ast => {
  if (ast.type === "NUMBER") {
    const ni = new NestedInteger();
    ni.setInteger(ast.val);
    return ni;
  } else if (ast.type === "ARRAY") {
    const ni = new NestedInteger();
    for (const ele of ast.val) {
      ni.add(eval(ele));
    }
    return ni;
  } else {
    throw new Error("unexpected ast");
  }
};

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  return eval(new Parser(lex(s)).parse());
};

deserialize(`[123,[456,[789]]]`);
