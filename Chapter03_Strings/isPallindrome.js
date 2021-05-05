// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

function isPallindrome(str) {
    for (var i = 0 ; i < str.length/2 ; i ++) {
        if(str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}


console.log(isPallindrome("racecar"));
console.log(isPallindrome("Dud"));
console.log(isPallindrome("oho!"));
console.log(isPallindrome(" to "));