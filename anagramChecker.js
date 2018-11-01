/**
 * Anagram Checker
 *
 * @author Sarah Gebauer
 * @date 11/1/18
 */

let prompt = require("./libs/prompt.js");
let word1;
let word2;

prompt.prompt("What is the first word? ").then(first => {
  word1 = analyzeWord(first);
  prompt.prompt("What is the second word? ").then(second => {
    word2 = analyzeWord(second);
  });
});

function analyzeWord(word) {
  let result = {};
  if (word.length === 0) return result;
  letters = word.toLowerCase().split("");

  letters.array.forEach(letter => {
    if (letter.match(/[a-z]/)) {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  });

  return result;
}
