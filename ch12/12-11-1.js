class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }

  pop() {}

  push() {}
}

/**
 * 스택에는 push, pop이 있는데, List에서 사용할 수 있는 것들까지 Stack을 구현했을 때 밖에 노출 됨
 * 불필요한 애들까지 노출하기 보다는 이럴 때 composition을 사용하는 것이 더 좋음
 * 내부적으로 storage를 갖고 거기에 List를 할당하면 밖에 노출시키지 않고 필요한 것들만 골라서 구현 가능
 */
