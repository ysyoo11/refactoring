{
  // Composition (Delegation)
  class Printer {
    private printerHeader: PrinterHeader;
    constructor(printerHeader?: PrinterHeader) {
      this.printerHeader = printerHeader ?? new DefaultPrinterHeader();
    }
    print() {
      this.printerHeader.print();
    }
  }

  interface PrinterHeader {
    print(): void;
  }

  class DefaultPrinterHeader implements PrinterHeader {
    print() {
      console.log('Basic printing');
    }
  }
  class RedPrinterHeader implements PrinterHeader {
    print() {
      console.log('🔴 printing');
    }
  }
  class BlackPrinterHeader implements PrinterHeader {
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
}
