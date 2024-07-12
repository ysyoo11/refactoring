import { strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);

// 이렇게 assert를 쓰기 보다는 다른 방식으로 우아하게 처리하는게 더 좋음
// 예를 들면, assert를 한 번 감싸서 클라이언트에서 에러가 발생했을 경우 앱을 죽게하는게 아니라 bug report를 보내게 만든다던지,
// number를 디폴트 0으로 만들어준다던지 등
