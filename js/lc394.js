/**
 * @param {string} s
 * @return {string}
 */

const times = (s, k) => {
  let ss = "";
  for (let i = 0; i < k; ++i) {
    ss += s;
  }
  return ss;
};

const isCharSeq = s => /[a-zA-Z]+/.test(s);

const isNum = s => /\d+/.test(s);

class Parser {
  constructor(exp) {
    this.exp = exp;
  }

  parse() {
    this.cur = 0;
    let ret = "";
    while (this.peek()) {
      ret += this.primary();
    }
    return ret;
  }

  primary() {
    let ret = "";
    let num = 1;
    if (isNum(this.peek())) {
      num = this.number();
      this.eatIf("[");
      while (true) {
        if (isCharSeq(this.peek())) {
          ret += this.seq();
        } else if (isNum(this.peek())) {
          ret += this.primary();
        } else break;
      }
      this.eatIf("]");
    } else if (isCharSeq(this.peek())) {
      ret = this.seq();
    } else this.unexpected();

    return times(ret, num);
  }

  seq() {
    let s = "";
    while (this.peek() && isCharSeq(this.peek())) {
      s += this.eat();
    }
    return s;
  }

  number() {
    let d = 0;
    while (this.peek() && isNum(this.peek())) {
      d = d * 10 + +this.eat();
    }
    return d;
  }

  eatIf(str) {
    this.guard();
    if (this.peek() === str) return this.eat();
    this.unexpected();
  }

  eat() {
    this.guard();
    return this.exp[this.cur++];
  }

  peek() {
    if (this.cur < this.exp.length) return this.exp[this.cur];
  }

  guard() {
    if (this.cur >= this.exp.length) this.unexpected();
  }

  unexpected() {
    throw new Error("unexpected");
  }
}
var decodeString = function(s) {
  return new Parser(s).parse();
};

console.log(decodeString("3[a]2[b4[F]c]"));
