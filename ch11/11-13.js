const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);

/**
 * 예상되는 에러라면 try/catch를 사용하지 말자
 * 정말 예상 못한 에러가 발생할 수 있는 경우에만 try/catch 를 사용하자
 */
