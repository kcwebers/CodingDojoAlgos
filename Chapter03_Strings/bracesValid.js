// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

// ============================
// Instructor's Solution
// ============================

function bracesValid(str) {
    var checker = [];

    for (var i = 0 ; i < str.length ; i ++) {
        if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
            checker.push(str[i]);
        } else if (str[i] == ")" && checker[checker.length-1] == "(") {
            checker.pop();
        } else if (str[i] == "]" && checker[checker.length-1] == "[") {
            checker.pop();
        } else if (str[i] == "}" && checker[checker.length-1] == "{") {
            checker.pop();
        } else if (str[i] == ")" || str[i] == "]" || str[i] =="}") {
            return false;
        }
    }
    if (checker.length > 0) {
        return false;
    }
    return true;
}

function bracesValid(str) {
    var checker = {
        "(" : 0,
        "[" : 0,
        "{" : 0
    }

    for (var i = 0 ; i < str.length ; i ++) {
        if (str[i] === "(") {
            checker["("] ++;
        } else if (str[i] === "[") {
            checker["["] ++;
        } else if (str[i] === "{") {
            checker["{"] ++;
        } else if (str[i] === ")") {
            checker["("] --;
        } else if (str[i] === "]") {
            checker["["] --;
        } else if (str[i] === "}") {
            checker["{"] --;
        } 
        if(checker["["] < 0 || checker["("] < 0 || checker["{"] < 0) {
            return false;
        }
    }
    if (checker["["] > 0 || checker["("] > 0 || checker["{"] > 0) {
        return false;
    }
    return true;
}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));

// ============================
// Students' Solutions
// ============================

function bracesValid(str) {

    var nums = 0;
    var nums1 = 0;
    for(var i=0; i < str.length; i++) {
        if(str[i] == '(') {
            nums++;
        } 
        else if(str[i] == ')') {
            nums--;
        }
        // 
        if(str[i] == '{') {
            nums1++;
        } 
        else if(str[i] == '}') {
            nums1--;
        }
        // 
        if(nums < 0) {
            return false
        }
        if(nums1 < 0) {
            return false
        }
    }
    if(nums > 0) {
        return false
    }
    if(nums1 > 0) {
        return false
    }
    return true
}

console.log(bracesValid("({[({})]})"))
console.log(bracesValid("d(i{a}l[t]o)n{e!"))
console.log(bracesValid("{{[a]}}(){bcd}{()}"))

// ================================================================

const allValid = (str) => {

    str = str.split('')

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== "(" && str[i] !== "[" && str[i] !== "{" && str[i] !== ")" && str[i] !== "]" && str[i] !== "}") {
            str.splice(i, 1);
        };
    };

    str = str.join('')
    console.log(str)

    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
            stack.push(str[i]);

        } else if (stack[stack.length - 1] === map[str[i]]) {
            stack.pop();

        } else {
            return false
        };
    };

    if (stack.length === 0) {
        return true

    } else {
        return false
    };
};

console.log(allValid("({[({})]})"))
console.log(allValid("d(i{a}l[t]o)n{e!"))
console.log(allValid("{{[a]}}(){bcd}{()}"))
console.log(allValid("y(3(p)p(3)r)s"))
console.log(allValid("n(0(p)3"))
console.log(allValid("n)0(t(o)k"))