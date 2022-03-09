// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPallindrome(str) {
    // your code here
}

console.log(isPallindrome("racecar")); // true
console.log(isPallindrome("e tacocat e"));; // true
console.log(isPallindrome("Dud"));// false
console.log(isPallindrome("oho!")); // false
console.log(isPallindrome(" to ")); // false



// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"
// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function isPallindrome(str) {
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

function longestPallindrome(str) {
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
            if (isPallindrome(str.slice(i, j)) === true) {
                // is this new pallindrome's length greater than the existing 'longest pallindrome'?
                if (str.slice(i, j).length > palli.length) {
                    palli = str.slice(i, j);
                }
            }
        }
    }
    return palli;
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));
console.log(longestPallindrome("v")); // edge case!