/**
 * @param {string} formula
 * @return {string}
 */

const merge = (m1, m2) => {
  for (const [k, v] of Object.entries(m2)) {
    m1[k] = (m1[k] || 0) + v;
  }
};

class Parser {
  constructor(exp) {
    this.exp = exp;
  }
  parse() {
    this.cur = 0;
    const m = {};
    while (this.peek()) {
      merge(m, this.primary());
    }
    return m;
  }

  primary() {
    const ch = this.peek();
    let m = {};
    if (ch === "(") {
      this.eat();
      m = this.primary();
      this.eatIf(")");

      const next = this.peek();
      const d = /\d/.test(next) ? this.number() : 1;
      for (const [key, val] of Object.entries(m)) {
        m[key] = val * d;
      }
    } else if (/[A-Z]/.test(ch)) {
      do {
        const atom = this.atom();
        const next = this.peek();
        const d = /\d/.test(next) ? this.number() : 1;
        m[atom] = (m[atom] || 0) + d;
      } while (/[A-Z]/.test(this.peek()));
    }
    while (this.peek() === "(" || /[A-Z]/.test(this.peek())) {
      merge(m, this.primary());
    }
    return m;
  }

  atom() {
    if (!/[A-Z]/.test(this.peek())) {
      this.unexpected();
    }
    let ele = this.eat();
    while (this.peek() && /[a-z]/.test(this.peek())) {
      ele += this.eat();
    }
    return ele;
  }

  number() {
    if (!/\d/.test(this.peek())) this.unexpected();
    let d = 0;
    while (/\d/.test(this.peek())) d = d * 10 + +this.eat();
    return d;
  }

  peek() {
    if (this.cur >= this.exp.length) return;
    return this.exp[this.cur];
  }
  eat() {
    this.guard();
    return this.exp[this.cur++];
  }

  eatIf(str) {
    this.guard();
    if (this.peek() === str) return this.eat();
    this.unexpected();
  }

  guard() {
    if (this.cur >= this.exp.length) this.unexpected();
  }

  unexpected() {
    throw new Error("unexpected");
  }
}
var countOfAtoms = function(formula) {
  const m = new Parser(formula).parse();
  const sorted = Object.entries(m).sort((p, q) =>
    p[0] < q[0] ? -1 : p[0] > q[0] ? 1 : 0
  );
  let ret = "";
  for (const [key, val] of sorted) {
    ret += val > 1 ? `${key}${val}` : key;
  }
  return ret;
};
