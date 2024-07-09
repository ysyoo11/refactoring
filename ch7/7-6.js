export class Shipment {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get trackingInfo() {
    return `${this.#shippingCompany}: ${this.#trackingNumber}`;
  }
}

const shipment = new Shipment(999, 'Maersk');
console.log(shipment.trackingNumber);

shipment.shippingCompany = 'COSCO';
console.log(shipment.shippingCompany);
console.log(shipment.trackingInfo);
