// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

// ============================
// Instructor's Solutions
// ============================
// ===================================
// with Array
// ===================================
function acronym(str) {
    var arr = str.split(" ");
    var newStr = "";
    
    for(var i = 0 ; i < arr.length ; i ++) {
        newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}

console.log(acronym("there's no free lunch - gotta pay yer way"));

// ===================================
// with new String only
// ===================================
function acronym(str) {
    var newStr = str[0].toUpperCase();
    
    for(var i = 0 ; i < str.length ; i ++) {
        if(str[i] == " ") {
            newStr += str[i + 1].toUpperCase();
        }
    }
    return newStr;
}

console.log(acronym("there's no free lunch - gotta pay yer way")); 

// ============================
// Students' Solutions
// ============================

function acronym(str) {
    var result = ""
    str.split(" ")
    // console.log(str.split(" "))
    arr = str.split(" ")
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i][0])
        result += arr[i][0]
    }
    console.log(result.toUpperCase())

}

acronym("hello world hello world hello world")