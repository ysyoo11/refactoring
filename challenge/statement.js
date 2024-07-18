import { Play } from './modules/play.js';
import { Invoice } from './modules/invoice.js';
import { Performance } from './modules/performance.js';
import { Statement } from './modules/statement.js';
import { Renderer } from './modules/renderer.js';

export function statement(invoice, plays) {
  return new Renderer(Statement.create(invoice, plays)).plainText();
}

export function htmlStatement(invoice, plays) {
  return new Renderer(Statement.create(invoice, plays)).html();
}

// 사용예:
const playsJSON = {
  hamlet: Play.createTragedyPlay('Hamlet'),
  'as-like': Play.createComedyPlay('As You Like It'),
  othello: Play.createTragedyPlay('Othello'),
};

const performances = [
  new Performance('hamlet', 55),
  new Performance('as-like', 35),
  new Performance('othello', 40),
];
const invoicesJSON = [new Invoice('BigCo', performances)];

const result = statement(invoicesJSON[0], playsJSON);
// console.log(htmlStatement(invoicesJSON[0], playsJSON));
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
