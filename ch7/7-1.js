class Organization {
  #name;
  #country;
  #data;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
  get rawData() {
    // 기존 데이터를 바로 리턴하는 것이 아니라 새로운 객체를 만들어서 불변성을 유지하도록 만듦!
    // return { ...this.#data }; // <- get만 가능한 경우면 OK
    return {
      name: this.#name,
      country: this.#country,
    }; // <- set 까지 가능한 경우에는 이렇게 리턴해야 최신 데이터가 반영이 됨
  }
}

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});
organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
