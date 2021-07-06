// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

// ============================
// Instructor's Solutions
// ============================
// ===================================
// with Array
// ===================================
function reverseString(str) {
    var arr = str.split("");
    console.log(arr);

    for (var i = 0 ; i < arr.length/2 ; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join("");
}

console.log(reverseString("creature")); // "erutaerc"


// ===================================
// with new String only
// ===================================
function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1 ; i > -1 ; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("creature")); // "erutaerc"

// ============================
// Students' Solutions
// ============================

function reverseString(str) {
    var result = ""
    str.split(" ")
    arr = str.split(" ")
    for (var i = str.length - 1; i > -1; i--) {
        // console.log(str[i])
        result += str[i]
        // console.log(result)
    }
    console.log(result)
}

reverseString("super")