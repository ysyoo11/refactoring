// Inheritance
class Printer {
  print() {
    console.log('Basic printing');
  }
}

class Network {
  send() {}
}

class RedPrinter extends Printer {
  print() {
    console.log('🔴 printing');
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print());

/**
 * 상속의 문제점,
 * 다중 상속이 되지 않는다
 * RedPrinter에서 Network 클래스의 send 기능을 이용하고 싶은 경우,
 * 이미 Printer를 상속하기 때문에 Network를 상속할 수 없다
 * 따라서, 상속을 사용할 경우 수정과 확장이 어렵다
 * 이럴 때 상속을 쓰지 않고 composition (delegation)을 쓸 수 있다
 */
