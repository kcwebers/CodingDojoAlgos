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
// ============================

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

function longestPallindrome(str) {
    // your code here
    var longest = ""
    var string = ""
    for (var i = 0; i < str.length; i++) {
        j = i - 1
        k = i + 1

        //checks starting from a double character
        if (str[i] == str[k]) {
            string = str[i] + str[k]
            k++
            while (str[j] == str[k] && str[j]) {
                string = str[j] + string + str[k]
                k++
                j--
            }
        }
        if (string.length > longest.length) {
            longest = string
        }

        //checks starting from single character
        string = str[i]
        while (str[j] == str[k] && str[j]) {
            string = str[j] + string + str[k]
            k++
            j--
        }
        if (string.length > longest.length) {
            longest = string
        }
    }
    return longest
}

console.log(longestPallindrome("my favorite racecar erupted"));
// Example 1: "my favorite racecar erupted" --> "e racecar e"
console.log(longestPallindrome("nada"));
// Example 2: "nada" --> "ada"
console.log(longestPallindrome("nothing to see"));
// Example 3: "nothing to see" --> "ee"

// ============================

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function longestPallindrome(str) {
    var longestPal = "";
    for (var i = 0; i < str.length - 1; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                var temp = str.substring(i, j + 1);
                if (isStrictPallindrome(temp) && temp.length > longestPal.length) {
                    longestPal = str.substring(i, j + 1);
                }
            }
        }
    }
    return longestPal;;
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));