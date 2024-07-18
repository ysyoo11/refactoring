class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get audience() {
    return this.#audience;
  }

  get play() {
    return this.#play;
  }

  static create(audience, play) {
    switch (play.type) {
      case 'tragedy':
        return new Tragedy(audience, play);
      case 'comedy':
        return new Comedy(audience, play);
      default:
        throw new Error(`Unknown type: ${play.type}`);
    }
  }
}

class Tragedy extends Performance {
  get amount() {
    const base = 40000;
    return this.audience > 30 ? base + 1000 * (this.audience - 30) : base;
  }

  get credits() {
    return Math.max(this.audience - 30, 0);
  }
}

class Comedy extends Performance {
  get amount() {
    const base = 30000 + 300 * this.audience;
    return this.audience > 20
      ? base + 10000 + 500 * (this.audience - 20)
      : base;
  }

  get credits() {
    return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
  }
}

export function createStatement(invoice, plays) {
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map(
    (p) => new Performance(p.audience, plays[p.playID])
  );
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredits = totalCredits(statement.performances);
  return statement;

  function totalAmount(performances) {
    return performances.reduce((sum, p) => sum + p.amount, 0);
  }

  function totalCredits(performances) {
    return performances.reduce((sum, p) => sum + p.credits, 0);
  }
}
