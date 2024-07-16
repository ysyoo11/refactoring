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
