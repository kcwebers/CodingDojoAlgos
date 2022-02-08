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
    } else {
        return true;
    }
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

// ** doesn't account ofr edge case of braces being in incorrect order **

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

// ================================================================

function bracesValid(str) {
    // your code here
    var curlyOpen = 0;
    var curlyClose = 0;
    var parenOpen = 0;
    var parenClose = 0;
    var squareOpen = 0;
    var squareClose = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "{") {
        curlyOpen++;
        } else if (str[i] == "}") {
        curlyClose++;
        }

        if (curlyOpen < curlyClose) {
        return false;
        }

        if (str[i] == "(") {
        parenOpen++;
        } else if (str[i] == ")") {
        parenClose++;
        }

        if (parenOpen < parenClose) {
        return false;
        }

        if (str[i] == "[") {
        squareOpen++;
        } else if (str[i] == "]") {
        squareClose++;
        }

        if (squareOpen < squareClose) {
        return false;
        }
    }
    return (
        curlyOpen + parenOpen + squareOpen == curlyClose + parenClose + squareClose
    );
}

console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));

// ================================================================

// TA Solution!! Fat Arrow function :)

const bracesValid = input => {
    // helper functions
    let isLeftBracket = lb => {
        return leftBrackets.includes(lb);
    }

    let isRightBracket = rb => {
        return rightBrackets.includes(rb);
    }

    let bracketsMatch = ( top, right ) => {
        return leftBrackets.indexOf(top) == rightBrackets.indexOf(right);
    }
    // variables
    let leftBrackets = ['(', '<', '[', '{'];
    let rightBrackets = [')', '>', ']', '}'];
    //using a FIFO strategy with a stack 
    let stack = [];

    for (const char of input) {
        if(isLeftBracket(char))
            stack.push(char);
        if(isRightBracket(char)) {
            //if we get a right bracket first its false
            if(stack.length == 0) return false;
            //get the previous opening brace 
            let top = stack.pop();
            //compare open to our current closing brace
            if(!bracketsMatch(top, char)) return false
        }       
    }
    return stack.length == 0;
}

console.log(bracesValid("({[({})]})")); // Example 1: "({[({})]})" --> true
console.log(bracesValid("d(i{a}l[t]o)n{e!")); // Example 2: "d(i{a}l[t]o)n{e!" --> false
console.log(bracesValid("{{[a]}}(){bcd}{()}")); // Example 2: "{{[a]}}(){bcd}{()}" --> true

// ================================================================

function bracesValid(str) {
    var arr=[];
    var def= {
        "{":"}",
        "[":"]",
        "(":")"
    }


    for(var i=0; i<str.length; i++) {
        if(str[i]=='{' || str[i]=='(' || str[i]=='[') {
            arr.push(str[i]);
        }
        else if(/[a-z]/.test(str[i])) {
            continue;
        }
        else {
            var temp=arr[arr.length-1];
            arr.splice(arr.length-1,1)

            if(def[temp] != str[i] ) {
                return false;
            }
        }
    }

    return true;
}

// ================================================================

function bracesValid(str) {
    var stack =[];
    for(var i = 0; i< str.length;i++){
        if(str.charAt(i)==='(')
            stack.push('(');
        if(str.charAt(i)==='{')
            stack.push('{');
        if(str.charAt(i)==='[')
            stack.push('[');
        if(str.charAt(i) === ')' && stack.length > 0 && stack[stack.length-1]==='(')
            stack.pop();
        else if (str.charAt(i) === ')' && (stack.length === 0 || stack[stack.length-1]!=='('))
            return false;
        if(str.charAt(i) === ']' && stack.length > 0 && stack[stack.length-1]==='[')
            stack.pop();
        else if (str.charAt(i) === ']' && (stack.length === 0 || stack[stack.length-1]!=='['))
            return false;
        if(str.charAt(i) === '}' && stack.length > 0 && stack[stack.length-1]==='{')
            stack.pop();
        else if (str.charAt(i) === '}' && (stack.length === 0 || stack[stack.length-1]!=='{'))
            return false;
    }
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log('Easy to understand Braces');
console.log(bracesValid("({[({})]})"));
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));

// Ascii codes: (<[{}]>)
var arr = [[40, 60, 91, 123], [41, 62, 93, 125]];

function bracesValid2(str){
    var stack =[];
    for(var i = 0; i< str.length;i++){
        
        if(arr[0].includes(str.charCodeAt(i)))
            stack.push(str.charAt(i));
        if(arr[1].includes(str.charCodeAt(i)))
            if((str.charCodeAt(i) === stack[stack.length-1].charCodeAt(0)+1 || 
                str.charCodeAt(i) === stack[stack.length-1].charCodeAt(0)+2)  && 
                (arr[1].includes(str.charCodeAt(i)) && stack.length > 0))
                stack.pop();
            else
                return false;
    }
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log('ASCII Braces');
console.log(bracesValid2("({[({})]})"));
console.log(bracesValid2("d(i{a}l[t]o)n{e!"));
console.log(bracesValid2("{{[a]}}(){bcd}{()}"));

// ================================================================

function bracesValid(string) {
    var newArray = Array.from(string);
    var value = 0;
    for(var i = 0;i<newArray.length;i++){
        if (value < 0){
            return false;
        }
        
        else if (newArray[i] == '('){
            value = value + 1;
        }
        else if (newArray[i] == ')'){
            value = value -1;
        }
    }
    if (value == 0){
        return true;
    }

    else{
        return false;
    }
}

// ================================================================

// Complex
function bracesValid(str){
    //empy arr
    var inStr = [];
    // elements checking for in parameter string
    var elements = ["(",")","{","}","[","]"];
    //looking at each incv element in parameter
    for(i=0;i<str.length; i++){
        //checks that char compare to each of the elements in elements arr
        for(k=0;k<elements.length;k++){
            //compare - if they're == pushes item into array inStr
            if(str[i] == elements[k]){
                inStr.push(elements[k]);
            }
        }
    }

    // on/off switch
    var valid;

    // if its odd automatically false
    if(inStr.length % 2 == 0){
        // loops through checking pairs first to last || element to element next to
        for(b = 0; b < inStr.length / 2; b++){
            //lisa: put me into a for loop
            if(inStr[b] == "(" && (inStr[inStr.length - 1 - b] == ")") ||
            inStr[b] == ")"){
                valid = true;
            }else if(inStr[b] == "{" && (inStr[inStr.length - 1 - b] == "}") || inStr[b] == "}" ){
                valid = true;
            }else if(inStr[b] == "[" && inStr[inStr.length - 1 - b] == "]" ||
            inStr[b] == "]"){
                valid = true;
            }else{
                valid = false;
            }
        }
    }else{
        valid = false;
    }
    return valid;
}


// calling function
// console.log(bracesValid("({[({})]})"));
// console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// ================================================================

let stack = []
var string = "[()({aaa7})]"
var t = false;


for (let i = 0; i < string.length; i++) {
    if (string[i] == ')' || string[i] == '}' || string[i] == ']') {
        if (stack.length == 0) {
            break;
        }
        var s = stack.pop()

        stack.push(s)
        if (string[i] == ')' && s == ('(')) {
            t = true;
            stack.pop()

        } else if (string[i] == '}' && s == '{') {
            t = true;
            stack.pop()
        } else if (string[i] == ']' && s == '[') {
            t = true;
            stack.pop()
        } else {
            t = false;
            break;
        }
    } else {

        if (string[i] == '(' || string[i] == '{' || string[i] == '[')
            stack.push(string[i])
    }
}
if (stack.length == 0)
    console.log(t)
else console.log(t)

// ================================================================