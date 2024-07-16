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
