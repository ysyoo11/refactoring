export class Invoice {
  #customer;
  #performances;
  constructor(customer, performances) {
    this.#customer = customer;
    this.#performances = performances;
  }
  get customer() {
    return this.#customer;
  }
  get performances() {
    return this.#performances;
  }
}
