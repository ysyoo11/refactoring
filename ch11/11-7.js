// Removing Setting Method (setter)

class Person {
  get name() {}
}

/**
 * 읽기만 가능한거라면 setter 는 불필요하니까 지우기
 * 데이터를 변경할 수 있지만 특정한 유효성 검사가 필요하다면 setter를 통해서 유효성 검사 로직을 추가해서 넣자
 */
