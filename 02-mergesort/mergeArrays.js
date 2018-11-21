let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8];
function mergeArrays(arrA, arrB) {
  let results = [];

  let minIndex = Math.min(arrA.length, arrB.length);
  let indexA = 0;
  let indexB = 0;

  let safeguard = 0;

  while (results.length < arrA.length + arrB.length) {
    if (arrA[indexA] && arrB[indexB]) {
      if (arrA[indexA] < arrB[indexB]) {
        results.push(arrA[indexA]);
        indexA++;
      } else {
        results.push(arrB[indexB]);
        indexB++;
      }
    }
    if (arrA[indexA] && !arrB[indexB]) {
      results = results.concat(arrA.slice(indexA));
    }
    if (!arrA[indexA] && arrB[indexB]) {
      results = results.concat(arrB.slice(indexB));
    }
  }

  return results;
}

console.log(mergeArrays(arr1, arr2));
