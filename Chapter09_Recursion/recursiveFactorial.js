
// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 

function recursiveFactorial(num) {
    if(num < 0) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}