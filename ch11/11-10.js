// Replace Command with Function

/**
 * 데이터를 영원히 간직할 필요가 없다면,
 * 일시적으로 한 번만 연산하는거라면 그냥 일반 함수로 만들어 두는 것이 더 낫다
 * 리팩토링 시에 100% 정해진 정답은 없기 때문에 목적에 맞는 최선의 선택을 하면 된다
 */

function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
