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
    }
  avg = +(sum / arr.length).toFixed(2);
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

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]); 
  for ( let i = 0; i < arrOfArr.length; i++){
      const funcArr = func(arrOfArr[i]);
        if (funcArr > max){
         max = funcArr;
      }
    }
  return max;
}

// Задание 3
function worker2(arr) {
  let numMax = arr[0];
  let numMin = arr[0];
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > numMax ){
          numMax = arr[i];
      }
      if (arr[i] < numMin) {
        numMin = arr[i];
      } 
    }
  return Math.abs(numMax-numMin);
}