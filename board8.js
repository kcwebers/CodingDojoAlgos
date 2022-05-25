/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "heellootheere";
const expected5 = "helotr";


/**
 * De-dupes the given string.
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */


function stringDedupe(str) {
    let distinctStr = "";
    const seen = {};

    // loop backwards to include last occurrence
    for (let i = 0; i <= str.length - 1; i++) {
        if (!seen[str[i]]) {
            distinctStr += str[i];
            seen[str[i]] = true;
        }
    }
    return distinctStr;
}

console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str4))
console.log(stringDedupe(str5))

/*******************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1a = "hello";
const expect1 = "olleh";

const str2a = "hello world";
const expect2 = "olleh dlrow";

const str3a = "abc def ghi";
const expect3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    const words = str.split(" ");
    let wordsReversed = "";

    for (const word of words) {
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        // add a space in front of word if it's not the first word
        if (wordsReversed.length > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    return wordsReversed;
}

console.log(reverseWords(str1a));
console.log(reverseWords(str2a));
console.log(reverseWords(str3a));

/***********************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1b = "This is a test";
const expec1 = "test a is This";

const str2b = "hello";
const expec2 = "hello";

const str3b = "   This  is a   test  ";
const expec3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    // if all spaces
    if (wordsStr == false) {
        return wordsStr;
    }

    const words = wordsStr.split(" ");
    let reversedWordOrder = "";
    console.log(words)

    // loop backwards
    for (let i = words.length - 1; i >= 0; i--) {
        // Skip empty strings resulting from .split encountering multiple spaces.
        if (words[i] === "") {
            continue;
        }

        if (reversedWordOrder.length > 0) {
            reversedWordOrder += " ";
        }

        reversedWordOrder += words[i];
    }
    return reversedWordOrder;
}

console.log(reverseWordOrder(str1b));
console.log(reverseWordOrder(str2b));
console.log(reverseWordOrder(str3b));