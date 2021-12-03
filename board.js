// Given an array comprised of integers, return it's mode value(aka. the most common value in that dataset).

function mode(arr){
    var obj = {}
    for(let i = 0; i < arr.length; i++){
        if( !obj[arr[i]] ){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]] += 1
        }
    }
    var mode = 0;
    var modeCount = 0;
    for(var key in obj) {
        if(obj[key] > modeCount) {
            mode = key;
            modeCount = obj[key]
        }
    }
    return mode
}

console.log(mode([1,2,3,1,1,2,2,5,6])); //return 1

// ==========================================

// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 

// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// Slightly harder: Work in-place in the given array (do not create a new array). Alter the order if needed! 
// Example #2) [1, [2,3], 4, []] ==> return same array but adjusted [1,2,3,4]

// **Assume that all elements are either numbers or arrays

function flatten(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let currentElement = arr[0];
        if (Array.isArray(currentElement)) {
            // basically you are splicing one array into another
            [].splice.apply(arr, [0, 1].concat(currentElement));
        } else {
            newArr.push(currentElement);
            arr.splice(0, 1);
        }
    }
    return newArr;
}

console.log(flatten([1, [2,3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2,3], 4, [[[5]]]])); // [1,2,3,4,5]

