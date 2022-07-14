function compareArrays(arr1, arr2) {
  let result = arr1.every((num, index) => num === arr2[index] && arr1.length === arr2.length);
    return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter(num => num > 0 && num % 3 === 0 ).map((num) => num * 10);
      return resultArr ; 
}
