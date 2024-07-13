// Replace Function with Command

/**
 * Command Pattern:
 * 클래스 중에서 딱 한가지 일만 수행하는 함수를 갖고있는 클래스를 명령 객체라고 한다.
 * 이런 패턴을 command pattern 이라고 한다
 * 이 패턴을 사용한다고 해서 딱 하나의 함수만 있어야 하는 것은 아니다
 * 만약 do라는 함수가 있다면, undo 함수도 만들어서 실행한 것을 취소하도록 만들 수도 있을 것이다
 */

export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  #candidate;
  #medicalExam;
  #scoringGuide;
  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.#medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (
      this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)
    ) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
