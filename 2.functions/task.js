function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if (arr[i] < min){
      min = arr[i];
    }else if (arr[i] > max){
      max = arr[i];
    }
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0
  }
  let result = Math.max(...arr) - Math.min(...arr);
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      countEvenElement += 1;
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {

}
