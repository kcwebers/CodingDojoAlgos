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
    // loop through our string
    for ( var i = 0 ; i < str.length/2 ; i ++) {
    // check each element with it's 'sister' element on the other side of the string
    // if elements don't match then return false
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    // if we make it through our loop and never hit false, then return true
    return true;
}
    
console.log(isPallindrome("racecar"));
console.log(isPallindrome("e tacocat e"));
console.log(isPallindrome("Dud"));
console.log(isPallindrome("oho!"));
console.log(isPallindrome(" to "));

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
    
    for (var i = 0 ; i < str.length-1 ; i ++) {
        for (var j = i + 1; j <= str.length ; j ++) {
            // check to see if this section of the string is a pallindrome
            if (isPallindrome(str.slice(i,j)) === true) {
                // is this new pallindrome's length greater than the existing 'longest pallindrome'?
                if (str.slice(i,j).length > palli.length) {
                    palli = str.slice(i,j);
                }
            }
        }
    }
    return palli;
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));
