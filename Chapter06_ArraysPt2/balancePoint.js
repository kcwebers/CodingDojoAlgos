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