function calculateCharge(date, quantity, plan) {
  const isNotSummer =
    date.isBefore(plan.summerStart) || date.isAfter(plan.summerEnd);
  return isNotSummer
    ? quantity * plan.regularRate + plan.regularServiceCharge
    : quantity * plan.summerRate;
}

function calculateCharge2(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
