// 예제 1
function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // send bill
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  const miscreants = ['Don', 'John'];
  for (const p of people) {
    if (miscreants.includes(p)) {
      setOffAlarms(alarm, p);
      return p;
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
