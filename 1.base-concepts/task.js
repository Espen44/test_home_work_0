'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0 ) {
    arr.push((-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d))/(2*a));
  };
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)){
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }
  if (isNaN(contribution)){
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
  if (isNaN(amount)){
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  let debtAmount = amount - contribution;
  console.log(debtAmount);
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  
  // let endDate = date;
  // console.log(date);
  let yearEnd = date.getFullYear();
  console.log(yearEnd);
  let monthEnd = date.getMonth();
  console.log(monthEnd);

  let dateAll = ((yearEnd - year)*12) + (monthEnd - month);
  console.log(dateAll);

  let p = 1/12 * percent / 100;
  let monthPayment = debtAmount * ( p  + ( p  / (((1 + p) ** dateAll) - 1)));
  console.log(monthPayment);

  totalAmount = (monthPayment * dateAll).toFixed(2);
  console.log(+totalAmount);
  return +totalAmount;
}
