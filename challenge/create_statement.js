class Performance {
  #audience;
  #play;
  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get audience() {
    return this.#audience;
  }

  get play() {
    return this.#play;
  }

  static create(audience, play) {
    switch (play.type) {
      case 'tragedy':
        return new Tragedy(audience, play);
      case 'comedy':
        return new Comedy(audience, play);
      default:
        throw new Error(`Unknown type: ${play.type}`);
    }
  }
}

class Tragedy extends Performance {
  get amount() {
    const base = 40000;
    return this.audience > 30 ? base + 1000 * (this.audience - 30) : base;
  }

  get credits() {
    return Math.max(this.audience - 30, 0);
  }
}

class Comedy extends Performance {
  get amount() {
    const base = 30000 + 300 * this.audience;
    return this.audience > 20
      ? base + 10000 + 500 * (this.audience - 20)
      : base;
  }

  get credits() {
    return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
  }
}

class Statement {
  #customer;
  #performances;
  constructor(invoice, plays) {
    this.#customer = invoice.customer;
    this.#performances = invoice.performances.map((p) =>
      Performance.create(p.audience, plays[p.playID])
    );
  }
  get customer() {
    return this.#customer;
  }
  get performances() {
    return [...this.#performances];
  }
  get totalAmount() {
    return this.#performances.reduce((sum, p) => sum + p.amount, 0);
  }
  get totalCredits() {
    return this.#performances.reduce((sum, p) => sum + p.credits, 0);
  }
}

export function createStatement(invoice, plays) {
  return new Statement(invoice, plays);
}

/**
 * 질문:
 * 강의 내용에서 State Class 내부에서 Performances 를 직접 생성했는데, 외부에서 주입 받으면 문제가 있을까요?
 * 클래스 내부에서 직접 객체 생성하는 것은 결합도가 높아진다고 하는데 궁금합니다.
 * ===================================
 * 말씀하신것처럼 대게 클래스 내부에서 다른 인스턴스를 생성하는 것은
 * 서로간의 결합도를 높이기 때문에 DI를 이용하는것이 좋아요.
 * 허나, 지금 Statement같은 경우는 외부에서 쓰이는 invoice 데이터를 받아서
 * 내부에서 필요한 데이터로 준비하는(변환하는) 로직을 가진 클래스라,
 * 필요한 데이터로 변환해주는 일을 해도 나쁘지 않다고 생각해요.
 * 제일 좋은 궁극적인 방법은 invoice 객체를 외부에서 받아온다면 (백엔드 JSON데이터),
 * 어플리케이션 로직이 invoice 객체를 사용하기 전에,
 * 어플리케이션 레이어에 필요한 모델들(데이터, 클래스)로 미리 변환해주는 일을 해주는게 제일 좋을 것 같아요.
 * 백엔드(invoice 객체 보냄) -> 앱의 네트워크 서비스층이 invoice 객체 받음
 * -> 바로 앱이 사용하는 Invoice클래스로 변환해줌 (Performance도 마찬가지)
 * 그럼 어플리케이션 레이어상에서는 이런 변환하는 로직을 알 필요도 없겠죠 :)
 */
