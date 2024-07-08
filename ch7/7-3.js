export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
  isHighPriority() {
    return this.priority.isHigherThan(new Priority('normal'));
  }
}

class Priority {
  #value;
  #index;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }
  get value() {
    return this.#value;
  }
  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }
  equals(other) {
    return this.index === other.index;
  }
  isHigherThan(other) {
    return this.index > other.index;
  }
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: new Priority('normal') }),
  new Order({ priority: new Priority('high') }),
  new Order({ priority: new Priority('rush') }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
console.log(highPriorityCount);
