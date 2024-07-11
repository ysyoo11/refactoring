class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }
  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}

const account = new Account(1111111, new AccountType('standard', 1.5));
console.log(account);
