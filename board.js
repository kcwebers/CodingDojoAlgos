// Given an array comprised of integers, return it's mode value(aka. the most common value in that dataset).

function mode(arr) {
    // your code here
}

console.log(mode([1,2,3,1,1,2,2,5,6])); //return 2

// ==========================================

// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 
// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// Slightly harder: Work in-place in the given array (do not create a new array). Alter the order if needed! 
// Example #2) [1, [2,3], 4, []] ==> return same array but adjusted [1,2,3,4]

// **Assume that all elements are either numbers or arrays

function flatten(arr) {
    // your code here
}

console.log(flatten([1, [2,3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2,3], 4, [[[5]]]])); // [1,2,3,4,5]

