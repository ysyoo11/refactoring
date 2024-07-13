// Replace Constructor with Factory Function
// -> Encapsulating constructor function

export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E');
  }
  static createManager(name) {
    return new Employee(name, 'M');
  }
  static createSalesman(name) {
    return new Employee(name, 'S');
  }
}

const engineer = Employee.createEngineer('Yeon');
const manager = Employee.createManager('Yeonsuk');
const salesman = Employee.createSalesman('Yoo');

/**
 * 생성자 함수 자체를 캡슐화하고 싶은 경우 사용.
 * 즉, 인스턴스를 만드는 로직 자체를 캡슐화하고 외부에서는 손쉽고 간결하게 사용할 수 있게 만들고 싶을 때 사용
 * 이 예제에서는 이름 뿐만 아니라 type code를 알아야 하는데 TS를 사용하는 경우에는 union type으로 설정해놓아서
 * 외부에서 입력 시에도 알 수 있는 방법이 있지만 JS의 경우에는 그게 되지 않기 때문에 이렇게 쓰면 편리함
 */
