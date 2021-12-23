// Given two arrays of integers, neither of which are sorted, 
// find if the second array is a subset of the first array.
// In other words, check if all elements of the second array are in the first array. 
// The second array will always be smaller in size than the first array, 
// so you don't have to worry about that case, and the first array will always be non-empty.

// function findSubset(arr, subset) {
//     var i = 0;
//     var j = 0;
//     while(i < subset.length && j < arr.length) {
//         if(subset[i] == arr[j]) {
//             i ++;
//             j = 0;
//         } else {
//             j ++;
//         }
//     }
//     return j == arr.length ? false : true;
// }

// console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,16,9,4]));

// function findSubset(arr, subset) {
//     arr.sort();
//     subset.sort();

//     var j = 0;
//     for(var i = 0 ; i < arr.length ; i ++) {
//         if(arr[i] == subset[j]) {
//             j ++;
//         }
//     }
//     return j < subset.length ? false : true;
// }

// console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,9,4]));


// function findSubset(arr, subset) {
//     var hashy = {};
//     for(var i = 0 ; i < arr.length ; i ++) {
//         hashy[arr[i]] = arr[i];
//     }

//     for(var j = 0 ; j < subset.length ; j ++) {
//         if(!(subset[j] in hashy)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,9,4]));

function findSubset(arr, subset) {
    var set = new Set(arr);
    var len = set.size;

    subset.forEach(element => set.add(element));
    return len == set.size ? true : false;
}

console.log(findSubset2([4,12,9,32,61,25,9,6,2], [12,61,91,4]));
console.log(findSubset2([4,12,9,32,61,25,9,6,2], [12,61,32,4]));


// ============================================
// Student Solutions
// ============================================

function findSubset(arr, subset) {
    return subset.every(val=>arr.includes(val));
}

console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,91,4]));
console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,32,4]));

// ============================================

function findSubset(arr, subset) {
    // your code here
    let foundNums = 0;
    let numDict = {}
    for(let i=0; i<arr.length; i++){
        if(!numDict[arr[i]]){
            numDict[arr[i]] = 1;
        }
    }
    for(let j=0; j<subset.length; j++){
        if(numDict[subset[j]]){
            foundNums++;
        }
    }
    return foundNums === subset.length;
}

console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,91,4])); // false
console.log(findSubset([4,12,9,32,61,25,9,6,2], [12,61,32,4])); // truie