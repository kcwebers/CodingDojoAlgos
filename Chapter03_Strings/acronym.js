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

    for (var i = 0; i < arr.length; i++) {
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

    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
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

// ============================

function acronym(str) {
    // your code here
    var acr = ""
    //iterate through string
    for (var i = 0; i < str.length; i++) {
        //character after space is part of the acronym
        if (str[i] == " " && str[i + 1] !== " " && str[i + 1] !== undefined) {
            acr += str[i + 1]
        }
        if (i == 0 && str[i] !== " ") {
            acr += str[i]
        }
    }
    //first character would be apart of the acronym. 
    return acr.toLocaleUpperCase()
}
//acronym("there's no free lunch - gotta pay yer way")
console.log(acronym(" there's no free lunch - gotta pay yer way "));

// ============================

function acronym(str) {
    // your code here
    let result = ''

    // function that would use recursion to check for multiple spaces
    // function spaceChecker(word, i) {
    //     if (word[i] === ' ') {
    //         i += 1;
    //         spaceChecker(word, i)
    //     } else if (word[i] !== ' ' && word[i] !== undefined) {
    //         return i;
    // }
    // }

    // check if the first letter is a space
    if (str[0] !== ' ') {
        result += str[0].toUpperCase();
    }

    // check for word breaks
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i + 1].toUpperCase()
        }
    }

    // updated for loop that uses the spaceChecker function
    // for (let i = 0; i < str.length - 1; i++) {
    //     result += str[spaceChecker(str,i)].toUpperCase()
    // }

    return result;

}

// ============================

function acronym(str) {
    var letter = "";
    for (var i = 0; i < str.length; i++) {



        // The first word of the string 
        if (i == 0) {
            letter += str[i]
        }

        // The last word of the string
        if (i == str.length - 1) {
            letter += (str[i]);
        }

        // space print the forward letter and backword letter 
        if (str[i] === " ") {
            letter += (str[i - 1] + " " + str[i + 1]);
        }

    }

    return letter.toUpperCase();
}

var str = "there's no free lunch - gotta pay yer way";
console.log(acronym(str));

// ============================

var test = "there's no free lunch - gotta pay yer way";

function arc(str) {
    let testArr = test.split(" ")
    let output = ""
    // console.log(testArr)
    for (var i = 0; i < testArr.length; i++) {
        output += testArr[i][0].toUpperCase()
    }
    return output
}

console.log(arc(test))

// ============================

function acronym(str) {
    var solution = "";
    for (i = 0; i < str.length; i++) {
        if (i == 0) {
            solution += str[i];
        }
        if (str[i] == " ")
            solution += str[(i + 1)]
    }
    return solution.toUpperCase();
}

console.log(acronym("there's no free lunch - gotta pay yer way"));

// ============================

function acronym(str) {
    var sol = "";
    for (var i = 0; i < str.length; i++) {
        if (i === 0 || (str.charAt(i - 1) === " " && str.charAt(i) !== " ")) {
            sol = sol + str.charAt(i).toUpperCase();
        }
    }
    return sol;
}

console.log(acronym(" there's no   free lunch - gotta pay yer way"));

// ============================

function acronym(str) {
    var nStr = "";
    for (var i = 0; i < str.length; i++) {
        if ((i == 0 || str[i - 1] == " ") && /[^\s]/.test(str[i])) {
            nStr += str[i];
        }
    }

    return nStr.toUpperCase();
    // your code here
}