function sameFrequency(int1, int2) {
  // good luck. Add any arguments you deem necessary.
  let int1Stringified = String(int1);
  let int2Stringified = String(int2);
  if (int1Stringified.length !== int2Stringified.length) {
    return false;
  }
  let counter = {};
  for (let i = 0; i < int1Stringified.length; i++) {
    if (counter[int1Stringified[i]]) {
      counter[int1Stringified[i]]++;
    } else {
      counter[int1Stringified[i]] = 1;
    }
  }

  for (let i = 0; i < int2Stringified.length; i++) {
    if (counter[int2Stringified[i]]) {
      counter[int2Stringified[i]]--;
    } else {
      return false;
    }
  }

  if (
    Math.max(...Object.values(counter)) === 0 &&
    Math.min(...Object.values(counter)) === 0
  ) {
    return true;
  }
  return false;
}

console.log(sameFrequency(3589578, 5879385));
