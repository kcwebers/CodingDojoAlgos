
// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 

function factorial(num) {
    var product = 1
    for (var i = num ; i > 0 ; i --) {
        product *= i
    }
    return product
}


function recursiveFactorial(num) {
    num = Math.floor(num)
    if(num <= 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));