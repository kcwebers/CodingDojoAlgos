// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [2,1,2,1,3,4,4,5] ==> [2,1,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!

// ============================
// Instructor's Solution
// ============================

function removeDuplicates(arr) {
    // your code here
}

// ============================
// Frame for Students
// ============================

function removeDuplicates(arr) {
    // your code here
}

console.log(removeDuplicates([1,2,1,3,4,4,5])); // [1,2,3,4,5]
onsole.log(removeDuplicates([1,2,1,3,4,4,5,4,4,4,4,6,6,6,6,78,7])) // [1, 2, 3, 4, 6, 7, 8, 5, 53]

// ============================
// Students' Solutions
// ============================

function removeDuplicates(arr) {
    var newArr = []; // array
    var dict = {}; // create a object
    for (let i= 0; i < arr.length; i++) { // for loop 
        
    
        if (!dict[arr[i]]) { // if there is not a key in dict matching the index 

            newArr.push(arr[i]); // add to empty arr

            dict[arr[i]] = "key"; // add key to the dict
        }
    }
    return newArr; // return 
}

// ============================

function removeDuplicates(ar) {
    const set = new Set([]);
    for (let i = 0; i < ar.length; i++) set.add(ar[i]);
        const returnAr = [];
        set.forEach((val) => returnAr.push(val));
        return returnAr;
  }

// ============================

function removeDuplicates(arr) {
    var set = [];
    var idx = 0;
    var idx2 = 0;
    while (idx < arr.length) {
        arr[idx2] = arr[idx];
        if (!(arr[idx] in set)) {
            set[arr[idx]] = true;
            idx2++;
        }
        idx++;
    }
    arr.splice(idx2);
    return arr;
}

// ============================

function removeDuplicates(arr) {
    // your code here
    let uniqueNums = arr.filter((c, index) =>{
        return arr.indexOf(c) === index;
    });
    console.log(uniqueNums);
  return uniqueNums;
}

// ============================

function removeDuplicates(arr) {
    var set = [];
    var idx = 0;
    var idx2 = 0;
    while (idx < arr.length) {
        arr[idx2] = arr[idx];
        if (!(arr[idx] in set)) {
            set[arr[idx]] = true;
            idx2++;
        }
        idx++;
    }
    return arr.splice(idx2);
}

var arr = [1,2,3,4,6,7,8,5,4,1,2,3,6,4,53,8,8,8,8];
removeDuplicates(arr);
console.log(arr);
// works when called like above, but not below
// console.log(removeDuplicates([1,2,1,3,4,4,5,4,4,4,4,6,6,6,6,78,7]));

// ============================

// filter function with fat arrow to reduce code
function removeDuplicates(arr) {
    return arr.filter((v, i) => arr.indexOf(v) === i);
}

// thick version showing how the filter logic is working
function removeDuplicates(arr) {
    let clean = []
    arr.filter(function (v, i, arr) {
        clean.push(arr.indexOf(v) === i);
    });
    return clean;
}

