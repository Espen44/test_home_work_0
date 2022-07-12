'use strict';

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] > max ){
        max = arr[i] ;
    }
    if (arr[i] < min) {
      min = arr[i]
    } 
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
}
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }   
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = worker(arrOfArr[0]);
  for ( let i = 0; i < arrOfArr.length; i++){
    if (worker(arrOfArr[i]) > max){
      max = worker(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let numMax = arr[0];
  let numMin = arr[0];
  let diff;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > numMax ){
        numMax = arr[i] ;
    }
    if (arr[i] < numMin) {
      numMin = arr[i]
    } 
    diff = numMax - numMin;
}
    return Math.abs(diff);
}

function makeWork(arrOfArr, worker2) {
  let max = worker2(arrOfArr[0]);

  for ( let i = 0; i < arrOfArr.length; i++){
    if (worker2(arrOfArr[i]) > max){
      max = worker2(arrOfArr[i]);
    }
  }
  return max;
}