/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    // loop through our string
    for (var i = 0; i < str.length / 2; i++) {
        // check each element with it's 'sister' element on the other side of the string
        // if elements don't match then return false
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    // if we make it through our loop and never hit false, then return true
    return true;
}

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))

/*****************************************************************************/

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const { isPalindrome } = require("../isPalindrome"); // make use of the isPallindrome you made above!

// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

// const str2 = "uh, not much";
// const expected2 = "u";

// const str3 = "Yikes! my favorite racecar erupted!";
// const expected3 = "e racecar e";

// const str4 = "a1001x20002y5677765z";
// const expected4 = "5677765";

// const str5 = "a1001x20002y567765z";
// const expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindrome(str) {
    var palli = "";

    // edge case: what if the string is only 1 character long?
    if (str.length <= 1) {
        return str
    }

    for (var i = 0; i < str.length - 1; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            // check to see if this section of the string is a pallindrome

            // construct a substring using the start and end points from the original string
            // here's some pseudo code about how finding the substring would work in a manual way:
            // var substring = "";
            // for(var k = start ; k < end ; k ++) {
            //     substring += str[k];
            // }
            // console.log(substring);

            // .slice() or .substring() are methods that can also be used!
            // note that .slice() & .substring() exclude the end point! 
            // so if i & j are sitting on the same spot, it won't return anything because it excludes the end
            var substring = str.slice(i, j)
            if (isPallindrome(substring) === true) {
                // is this new pallindrome's length greater than the existing 'longest pallindrome'?
                if (substring.length > palli.length) {
                    palli = substring;
                }
            }
        }
    }
    return palli;
// }

// console.log(longestPalindrome(str1))
// console.log(longestPalindrome(str2))
// console.log(longestPalindrome(str3))
// console.log(longestPalindrome(str4))
// console.log(longestPalindrome(str5))