// Here, a balance index is ON an index, not BETWEEN indicies. Return the balance index where sums are equeal on either side (exclude its own value). Return -1 if none exist.
// Example 1: [-2, 5, 7, 0, 3]  --> 2 
// The balance index is 2 because on either side of that index the sums are equal:  [-2, 5,  |7| , 0, 3] --> -2+5 == 0+3
// Example 2: [9, 9]  -->  -1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

function balanceIndex(arr) {
    var arrTotal = 0;
    var subSum = 0;

    for (var i = 0; i < arr.length; i++) { // collect the total sum of all elements in array
        arrTotal += arr[i];
    }

    for (var i = 0; i < arr.length-1 ; i++) { // loop through array again to check balance
        if (subSum === arrTotal-subSum-arr[i]) { // check the sum of some elee
            return i;
        }
        subSum += arr[i];
    }
    return -1;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // 2
console.log(balanceIndex([9, 9])); // -1


// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's. 
// Example: [1,2,3,4,10] --> True
// the belenace point happens b/w indices 3 & 4 where the left side equals the right:  [1, 2, 3, 4  |  10]  ==> 1+2+3+4 = 10

function balancePoint(arr) {
    var arrTotal = 0;
    var subSum = 0;

    for (var i = 0; i < arr.length; i++) { // loop through and collect the total sum for all values in the array
        arrTotal += arr[i];
    }
    
    for (var i = 0; i < arr.length ; i++) { // loop through again and check whether (total - sum of some elements) = sum of some elements
        if (subSum === arrTotal-subSum) { //subSum tracks sum of elements as we increment; check against total-subSum
            return true; 
        }
        subSum += arr[i]; //add elements as we increment and the subSum != total-subSum
    }
    return false;
}
console.log(balancePoint([4,3,7,4,10])); // true
console.log(balancePoint([4,3,7,4,11,2])); // false
