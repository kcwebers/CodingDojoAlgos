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

// ============================

function reverseString(str) {
    // your code here
    var newstr = ""
    for(var i = str.length-1; i >= 0; i--){
        newstr += str[i]
    }
    return newstr
}

console.log(reverseString("creature")); 

// ============================

function reverseString(str) {
    var reverse = ""
    for(var i=0; i<str.length; i++)
        reverse = str.charAt(i) + reverse;
    return reverse;
}

console.log(reverseString("creature")); // "erutaerc"

// ============================

function reverseString(str) {
    var newarr = '';
    for(i=str.length-1;i>=0;i--){
        newarr += str[i];
    }
    return newarr
}

console.log(reverseString("creature")); // "erutaerc"

// ============================

function reverseString(str) {
    var nStr="";
    for(var i=str.length-1; i>=0; i--) {
        nStr += str[i];
    }
    return nStr.toLowerCase();
}

// ============================

// acronym
function acronym(str) {
    var acro = ""
    acro += str[0]
    for(var i=0; i<str.length; i++){
            if(str[i] === " "){
                acro += str[i+1]
            }
        }
    return acro.toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way"));

// ============================

function acronym(element){
    var acronym = "";

    for(j=0; j < element.length; j++){
        if(element[j] == " " && element[j+1] != '-'){
            acronym += element[j+1];
        }else if( j == 0){
            acronym += element[j];
        } 
    }
    return acronym;  
}
console.log(acronym("there's no free lunch - gotta pay yer way"));

// ============================

///reverse string

function reverseString(str){
    var reverseStr = ""
    for(var i=str.length-1; i>=0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}
console.log(reverseString("Creature"));

// ============================
