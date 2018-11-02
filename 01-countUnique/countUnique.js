function countUniqueValues(arr) {
  let unique = [];
  let i = 0;
  unique.push(arr[i]);
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      unique.push(arr[j]);
      i = j++;
    }
  }
  return unique;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 3, 4, 5, 6, 6]));
