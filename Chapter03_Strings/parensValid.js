// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve

// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

// ============================
// Instructor's Solution
// ============================

function parensValid(str) {
    // use array to store just my opening parens
    var checkParens = [];
    // loop through the entire string and check for opening and closing parens
    for (var i = 0 ; i < str.length ; i ++) {
        // when we find opening parens, we will hold on to them in our array
        if(str[i] === "(") {
            checkParens.push(str[i]);
        } else if (str[i] === ")" && checkParens[checkParens.length - 1] === "(") {
            // when we find closing parens, we compare against the opening ones we have
            checkParens.pop();
        } else if (str[i] === ")") {
            return false;
        }
    }

    // check remaining array, if anything in it return false because the parens dont have their pair
    // if (checkParens.length > 0) {
    //     return false;
    // } else {
    //     return true;
    // }

    return checkParens.length > 0 ? false : true;
}

function parensValid(str){
    var counter = 0;
    for(var i = 0 ; i < str.length ; i ++){   
        // count up if you find an opening parentheses
        if(str[i] == '('){
            counter ++;
        // count down if you find an closing parentheses
        } else if(str[i] == ')') {
            counter --;
        } 
        // if the counter dips below zero, that means you've found more closing than opening and should return false
        if (counter < 0) {
            return false;
        }
    }
    // if the counter is greater than 0, or ingeneral not equal to zero, it means that not all parentheses found matches and should return false
    if(counter > 0) {
        return false;
    }
    return true;
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

// ============================
// Students' Solutions
// ============================

function checkBracketStuff(str){
    var yup = 0;
    for(var i in str){   
        if(str[i] == '('){
            yup ++;
        } else if(str[i] == ')') {
            yup --;
        }  
        if (yup < 0) return false;
    }
    if(yup > 0) return false;
    return true;
}
console.log(checkBracketStuff('y(3(p)p(3)r)s')); // true
console.log(checkBracketStuff('n(0(p)3')); // false
console.log(checkBracketStuff('n)0(t(o)k')); // false

// ================================================================

function parensValid(str) {
    // your code here
    var openParens = 0;
    var closeParens = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            openParens++;
        } else if (str[i] == ")") {
            closeParens++;
        }

        if (openParens < closeParens) {
            return false;
        }
    }
    return openParens == closeParens;
}

  // console.log(parensValid(")))1(2(("));
  // console.log(parensValid("n)0(t(o)k"));
  // console.log(parensValid("n(0(p)3)"));
  // Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid.

// ================================================================

function parensValid(str) {
    // your code here
    var openingC=0;
    for(var i=0; i<str.length; i++) {
        if(str[i]==')' && openingC==0) {
            return false;
        }
        else if(str[i]=='(') {
            openingC++;
        }
        else if(str[i]==')') {
            openingC--;
        }
    }

    if(openingC) {
        return false;
    }
    else {
        return true;
    }
}

// ================================================================

function parensValid(str) {
    // your code here
    var aparens = 0 // total number: '('
    var bparens = 0 // total number: ')'

    for(var i = 0; i < str.length; i++){ //iterate through the str
        if(str[i] == "(" ){
            aparens++
        }
        if(str[i] == ")" ){
            bparens++
        }
        if(bparens > aparens){
            return false
        }
    }
    if(aparens == bparens){
        return true
    }
    else{
        return false
    }
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

// ================================================================

function parensValid(str) {
    // your code here
    let isEvenParens = false;
    let opens = 0;
    let closed = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' ) {
            opens ++;
        } else if (str[i] === ')') {
            closed++;
        }
    }
    if (opens === closed) {
        isEvenParens = true
    } else {
        isEvenParens = false;
    }

    let startswithOpen = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            startswithOpen = true;
            break;
        } else if (str[i] === ')') {
            break;
        }
    }

    let startswithClose = false;
    for (let i = str.length - 1; i > -1; i--) {
        if (str[i] === ')') {
            startswithClose = true;
            break;
        } else if (str[i] === '(') {
            break;
        }
    }



    let parensList = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            parensList.push([i, '('])
        } else if (str[i] === ')') {
            parensList.push([i, ')'])
        }
    }
    

    return startswithOpen && startswithClose && isEvenParens;
}

// ================================================================

function parensValid(str) {
    for (i=0;i<str.length/2;i++){
        j=str.length-1-i
        if(str[i]=="("&&str[j]!=")"){
            return "False"
        }
        else if(i==j || i==j-1) {
            return "True"
        }
    }
}

console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

// ** This solution looks for symmetry instead of valid parens! **

// ================================================================

function parensValid(str) {
    // your code here
    num = 0;
    for (var i =0; i < str.length; i++){
        if (str[i]=== "("){
            num++;
            console.log(num);
        }
        else if (str[i]===")"){
            num--
            console.log(num);
        }
        else if (num==-1){
            return false
        }
        }
    
    if (num == 0){
        return true
    }
    else return false
    
}

// ================================================================

function parensValid(str){
    var stack= [];
    str.split("").forEach(char => {
        if(char==='(')
            stack.push('(');
        if(char === ')' && stack.length > 0)
            stack.pop();
        else if (char === ')' && stack.length === 0)
            return false;
    })
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log("For each parensValid");
console.log(parensValid("y(3(p)p(3)r)s"));
console.log(parensValid("n(0(p)3"));
console.log(parensValid("n)0(t(o)k"));
console.log(parensValid("((()))"));
console.log(parensValid("()()()()()()("));

function parensValid2(str){
    var stack =[];
    for(var i = 0; i< str.length;i++){
        if(str.charAt(i)==='(')
            stack.push('(');
        if(str.charAt(i) === ')' && stack.length > 0)
            stack.pop();
        else if (str.charAt(i) === ')' && stack.length === 0)
            return false;
    }
    if(stack.length === 0)
        return true;
    else
        return false; 
}

console.log("For loop parens valid");
console.log(parensValid2("y(3(p)p(3)r)s"));
console.log(parensValid2("n(0(p)3"));
console.log(parensValid2("n)0(t(o)k"));
console.log(parensValid2("((()))"));
console.log(parensValid2("()()()()()()("));