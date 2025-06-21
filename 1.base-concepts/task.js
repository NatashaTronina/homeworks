"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0){
    arr.push()
  }
  else if (discriminant === 0){
    let x = -b / (2 * a);
    arr.push(x)
  }
  else{
    let x = (-b + Math.sqrt(discriminant) )/(2*a)
    arr.push(x)
    let y = (-b - Math.sqrt(discriminant) )/(2*a)
    arr.push(y)
  }
  return arr;
}
let result = solveEquation(1, 5, 4);
console.log("Наши корни:")
console.log(result);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}