// What is Recursion?
// Basically: when a function calls itself within itself


// Write a recursive function that, given a number, returns the sum of 
// integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

function sigma(num) {
    var sum = 0
    for (i = 0 ; i <= num ; i ++) {
        sum += i
    }
    return sum
}

function recursiveSigma(num) {
    num = Math.floor(num)
    if (num == 0) {
        return 0
    }
    return num + recursiveSigma(num - 1)
}

// console.log(recursiveSigma(2.5))

// ===============================================================================
// Recursive Factorial
// ===============================================================================


// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 

function recursiveFactorial(num) {
    num = Math.floor(num)
    if (num <= 1) {
        return 1
    }
    return num * recursiveFactorial(num - 1)
}

console.log(recursiveFactorial(4));

// ===============================================================================
// Recursive Fibonacci
// ===============================================================================

// Given a number, add the collective sum up to that number (using Fibonacci sequence). The sum is of the previous 2 Fibonacci numbers.

// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	
// 0	1	1	2	3	5	8	13	21	34	55	

function recursiveFibonacci(num) {
    // end point of 0
    if (num == 0) {
        return 0;
    }
    // end point of 1
    if (num == 1) {
        return 1;
    }
    // if no endoints are hit
    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(5));