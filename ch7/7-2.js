export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }
  get courses() {
    return [...this.#courses];
  }
  addCourse(course) {
    if (!(course instanceof Course)) {
      throw new Error('This is not an instance of Course');
    }
    this.#courses.push(course);
  }
  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
const refactoringCourse = new Course('리팩토링', true);
const TDDCourse = new Course('TDD', true);
ellie.addCourse(refactoringCourse);
ellie.removeCourse(refactoringCourse, () => console.log('No such course'));
ellie.removeCourse(TDDCourse, () => console.log('No such course'));
console.log(ellie.courses.length);
