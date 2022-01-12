// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

// function isPallindrome(str) {
//     for (var i = 0 ; i < str.length/2 ; i ++) {
//         if(str[i] !== str[str.length-1-i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPallindrome("racecar")); // true
// console.log(isPallindrome("e tacocat e")); // true
// console.log(isPallindrome("Dud")); // false
// console.log(isPallindrome("oho!")); // false
// console.log(isPallindrome(" to ")); // false

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function isPallindrome(str) {
    for (var i = 0 ; i < str.length/2 ; i ++) {
        if(str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}

function longestPallindrome(str) {
    var palli = "";
    
    for (var start = 0 ; start < str.length-1 ; start ++) {
        for (var end = start + 1; end <= str.length ; end ++) {
            // check to see if this section of the string is a pallindrome
            // construct a substring using the start and end points from the original string
            var substring = "";
            for(var k = start ; k < end ; k ++) {
                substring += str[k];
            }
            console.log(substring);

            if (isPallindrome(substring) === true) {
                // is this new pallindrome's length greater than the existing 'longest pallindrome'?
                if (substring.length > palli.length) {
                    palli = substring;
                }
            }
        }
    }
    return palli;
}

// console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("naada"));
// console.log(longestPallindrome("nothing to see"));