import { formatToUSD } from '../utils/usd.js';

export class Renderer {
  #statement;
  constructor(statement) {
    this.#statement = statement;
  }

  plainText() {
    let result = `청구 내역 (고객명: ${this.#statement.customer})\n`;

    for (const perf of this.#statement.performances) {
      result += `  ${perf.play.name}: ${formatToUSD(perf.amount / 100)} (${
        perf.audience
      }석)\n`;
    }

    result += `총액: ${formatToUSD(this.#statement.totalAmount / 100)}\n`;
    result += `적립 포인트: ${this.#statement.totalCredits}점\n`;
    return result;
  }

  html() {
    let result = `<h1>청구 내역 (고객명: ${this.#statement.customer})</h1>\n`;
    result += '<table>\n';
    result += '<tr><th>play</th><th>석</th><th>cost</th></tr>';
    for (const perf of this.#statement.performances) {
      result += `  <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
      result += `<td>${formatToUSD(perf.amount / 100)}</td></tr>\n`;
    }

    result += `</table>\n`;
    result += `<p>총액: <em>${formatToUSD(
      this.#statement.totalAmount / 100
    )}</em></p>\n`;
    result += `<p>적립 포인트: <em>${
      this.#statement.totalCredits
    }</em>점</p>\n`;
    return result;
  }
}
