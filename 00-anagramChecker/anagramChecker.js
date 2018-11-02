/**
 * Anagram Checker
 *
 * @author Sarah Gebauer
 * @date 11/1/18
 *
 * Description
 *
 * This piece of code checks if two words are anagrams. Words can consist only from letters, spaces and other characters aren't allowed. There might be an easier solution by transforming two object into JSON strings. My main reason not to do it that way is because I couldn't find whether JSON.stringify orders properties first consistently in all JavaScript engines. Also this way it was fun.
 *
 */

let prompt = require("../libs/prompt.js");
let word1 = {};
let word2 = {};

prompt.prompt("What is the first word? ").then(first => {
  let letters = first.toLowerCase().split("");

  letters.forEach(letter => {
    if (letter.match(/[a-z]/)) {
      if (word1[letter]) {
        word1[letter]++;
      } else {
        word1[letter] = 1;
      }
    } else {
      console.log("Invalid characters in the word");
      process.exit();
    }
  });

  prompt.prompt("What is the second word? ").then(second => {
    let letters = second.toLowerCase().split("");

    letters.forEach(letter => {
      if (letter.match(/[a-z]/)) {
        if (word2[letter]) {
          word2[letter]++;
        } else {
          word2[letter] = 1;
        }
      } else {
        console.log("Invalid characters in the word");
        process.exit();
      }
    });

    let same = true;

    if (Object.keys(word1).length === Object.keys(word2).length) {
      Object.keys(word1).forEach(key => {
        if (word1[key] !== word2[key]) {
          same = false;
        }
      });
      if (same) {
        console.log("They are anagrams");
      } else {
        console.log("Different words");
      }
    } else {
      console.log("Different words");
    }
    process.exit();
  });
});
