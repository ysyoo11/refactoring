// Composition (Delegation)
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log('Basic printing');
  }
}

class RedPrinterHeader {
  print() {
    console.log('🔴 printing');
  }
}
class BlackPrinterHeader {
  print() {
    console.log('⚫️ printing');
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];
printers.forEach((printer) => printer.print());

/**
 * 위임을 이용하면 전달된 위임자에 따라서 다른 행동을 할 수 있게 만들 수 있다
 * 프린터가 네트워크를 해야된다면 네트워크를 상속할 수 있고,
 * 상속은 정말 필요한 경우를 대비해서 남겨둘 수 있다
 * 이렇게 위임을 쓰면 레고를 조립하듯이 원하는 부품을 추가해나갈 수 있다
 *
 * 상속은 수직적인 관계를 이용해서 코드를 재사용, 확장한다는 개념
 * 상속의 한계는 딱 하나만 가능하다는 점.
 * 부모에 무언가 추가되면 무조건 자식 클래스들에도 추가되기 때문에 경우에 따라서는 부적합할 수도 있다
 * 따라서 수정, 유지보수가 어려워질 수 있다
 */
