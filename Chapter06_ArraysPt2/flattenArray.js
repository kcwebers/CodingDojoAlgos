// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 
// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// Slightly harder: Work in-place in the given array (do not create a new array). Alter the order if needed! 
// Example #2) [1, [2,3], 4, []] ==> return same array but adjusted [1,2,3,4]

// **Assume that all elements are either numbers or arrays

// ============================
// Instructor's Solution
// ============================

function flatten(arr) {
    var newArr = [];
    for (var item of arr) {
        if (typeof(item) == "number") { // check the datatype of the element we are looking at; if number...
            newArr[newArr.length] = item;
        }
        else if (Array.isArray(item)) { // check the datatype of the element we are looking at; if array (recognized as object)...
            for (var val of item) {
                newArr[newArr.length] = val;
            }
        }
    }
    return newArr;
}

// ============================
// Frame for Students
// ============================

function flatten(arr) {
    // your code here
}
console.log(flatten([1, [2,3], 4, []])); // [1,2,3,4]
console.log(flatten([1, [2,3], 4, [[[5]]]])); // [1,2,3,4,5]

// ============================
// Students' Solutions
// ============================

function flatten(arr) {
    var idx = 0;
    while (idx < arr.length) {
        if (Array.isArray(arr[idx])) {
            var subArr = flatten(arr[idx]);
            for (var i=0; i < subArr.length; i++) {
                arr.splice(idx, 0, subArr[i]);
                idx++;
            }
            arr.splice(idx, 1);
        }
        idx++;
    }
    return arr;
}

// ============================
// works for 1 level of nested arrays [[ ]]

function flatten(ar) {
    const newAr = [];
    for (let i = 0; i < ar.length; i++) {
      if (typeof ar[i] === "object") {
        for (let j = 0; j < ar[i].length; j++) {
          newAr.push(ar[i][j]);
        }
      } else {
        newAr.push(ar[i]);
      }
    }
    return newAr;
}

// ============================

function flatten(arr) {
    let newArr = [];
    let feeder = arr, start;
    while (feeder.length > 0) {
        start = feeder[0];
        if (Array.isArray(start)) {
            Array.prototype.splice.apply(feeder, [0, 1].concat(start));
        } else {
            newArr.push(start);
            feeder.splice(0, 1);
        }
    }
    return newArr;
}

// ============================
// works with Example #1, not #2

function flatten(arr) {
    // your code here
    var newArr = [];
    for (var i = 0; i< arr.length; i++){
        if(arr[i].length != 0 && arr[i]!=undefined && arr[i][1]==undefined){
        newArr.push(arr[i])
        }
        else{
            for(var j = 0; j<=arr[i].length; j++){
                
                if(arr[i].length != 0 && arr[i][j] != undefined){
                newArr.push(arr[i][j]);
                }
            }
        }   
    }
    return newArr;
}

