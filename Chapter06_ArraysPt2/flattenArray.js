// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 
// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// Slightly harder: Work in-place in the given array (do not create a new array). Alter the order if needed! 
// Example #2) [1, [2,3], 4, []] ==> return same array but adjusted [1,2,3,4]

// **Assume that all elements are either numbers or arrays

function flatten(arr) {
    var newArr = [];
    for (var item of arr){
        if (typeof(item) == "number"){
            newArr[newArr.length] = item;
        }
        else if (Array.isArray(item)){
            for (var val of item){
                newArr[newArr.length] = val;
            }
        }
    }
    return newArr;
}

console.log(flatten([1, [2,3], 4, []]));