export class Performance {
  #playID;
  #audience;
  constructor(playID, audience) {
    this.#playID = playID;
    this.#audience = audience;
  }
  get playID() {
    return this.#playID;
  }
  get audience() {
    return this.#audience;
  }
}
