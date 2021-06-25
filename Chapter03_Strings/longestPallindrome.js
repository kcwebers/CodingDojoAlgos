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
