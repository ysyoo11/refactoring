export class Play {
  #name;
  #type;
  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }
  get name() {
    return this.#name;
  }
  get type() {
    return this.#type;
  }
  static createTragedyPlay(name) {
    return new Play(name, 'tragedy');
  }
  static createComedyPlay(name) {
    return new Play(name, 'comedy');
  }
}
