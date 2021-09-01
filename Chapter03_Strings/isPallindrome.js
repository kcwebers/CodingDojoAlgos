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

// ============================

function isStrictPallindrome(str) {
    // your code here
    let pallindrome = "";
    for(var i = str.length-1; i > -1; i--) {
        pallindrome += str[i];
    }
    return str === pallindrome;
}
console.log(isStrictPallindrome("racecar")); // TRUE
console.log(isStrictPallindrome("e tacocat e")); // TRUE
console.log(isStrictPallindrome("Dud")); // FALSE
console.log(isStrictPallindrome("oho!")); // FALSE
console.log(isStrictPallindrome(" to ")); // FALSE\

// ============================

function isStrictPallindrome(str) {
    for(var i=0; i<str.length/2; i++) {
        var tempInd = str.length-1-i;
        if(str[i] != str[tempInd]) {
            return false;
        }
    }
    return true;
    // your code here
}

console.log(isStrictPallindrome("racecar")); // TRUE
console.log(isStrictPallindrome("e tacocat e")); // TRUE
console.log(isStrictPallindrome("Dud")); // FALSE
console.log(isStrictPallindrome("oho!")); // FALSE
console.log(isStrictPallindrome(" to ")); // FALSE

// ============================

// ** cool use of 2 variables in a single for loop!!

function isPallindrome(str) {
    // your code here
    for(var i = 0, j= str.length -1; i < str.length/2; i++, j--){
        if(str[i] !== str[j]){
            return false
        }
    }
    return true
}

console.log(isPallindrome("racecar")); // TRUE
console.log(isPallindrome("e tacocat e")); // TRUE
console.log(isPallindrome("Dud")); // FALSE
console.log(isPallindrome("oho!")); // FALSE
console.log(isPallindrome(" to ")); // FALSE

// ============================

function isStrictPallindrome(str) {
    for(i=0;i<str.length;i++){
        j=str.length-1-i
        if(str[i]!=str[j]){
            return false
        }
        else if(i==j || i==j-1){
            return true
        }
    }
}