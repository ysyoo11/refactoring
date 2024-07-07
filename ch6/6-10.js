import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}
function taxThreshold() {
  return 0.1;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

/**
 * 웬만하면 6-9에서 한 것처럼 class를 사용하는게 더 심플함
 * +
 * class의 get을 사용하면 데이터가 변경되더라도 변경된 데이터를 기반으로 해서
 * get 하는 시점에 변경된 데이터로 새롭게 연산이 되어 업데이트가 잘 되는 반면에,
 * 변환 함수로 묶으면 어느 한 데이터가 변경됐을 경우 그 값에 의존하는 다른 데이터까지 업데이트가 되지 않기 때문에
 * class로 묶는 것이 안전하다고 볼 수 있음
 */
