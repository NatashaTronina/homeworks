"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0){
    arr.push();
  }
  else if (discriminant === 0){
    let x = -b / (2 * a);
    arr.push(x)
  }
  else{
    let x = (-b + Math.sqrt(discriminant) )/(2*a);
    arr.push(x);
    let y = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(y);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths

  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));

  let result = monthlyPayment * n;
  return Number(result.toFixed(2))
}
