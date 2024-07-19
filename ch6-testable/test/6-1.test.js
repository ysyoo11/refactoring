import { printOwing } from '../6-1.js';

class Console {
  #content = '';
  constructor() {}
  log(message) {
    this.#content += `${message}\n`;
  }
  get content() {
    return this.#content;
  }
}

class Clock {
  constructor() {}
  get today() {
    return {
      getFullYear() {
        return 2024;
      },
      getMonth() {
        return 6;
      },
      getDate() {
        return 19;
      },
    };
  }
}

describe('printOwing', () => {
  it('should print owing', () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: '엘리',
    };
    const expected =
      '***********************\n' +
      `**** Customer Owes ****\n` +
      '***********************\n' +
      'name: 엘리\n' +
      'amount: 7\n' +
      'due: 18/08/2024\n';
    const console = new Console();
    const clock = new Clock();
    printOwing(invoice, console, clock);
    expect(console.content).toBe(expected);
  });
});
