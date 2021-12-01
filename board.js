// Remove the duplicates from a given array. Do not alter the original array, return a new one! Keep the results 'stable' (retain the original order);

// Example: [2,1,2,1,3,4,4,5] ==> [2,1,3,4,5]

// Slightly more difficult! Work 'in-place' in the given array. For this one you can mess with the order if you need too!


function removeDuplicates(arr) {
    const set = new Set(arr);
    return Array.from(set);

    // alternatives
    // const set = new Set(arr);
    // // console.log(set);
    // return [...set];
}

console.log(removeDuplicates([1,2,1,3,4,4,5])); // [1,2,3,4,5]
console.log(removeDuplicates([1,2,1,3,4,4,5,4,4,4,4,6,6,6,6,78,7])); // // [1, 2, 3, 4, 5, 6, 78, 7]


//===========================================
// Kadane's Algo
//===========================================

// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a subarray. Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

function maxOfSubarray(arr) {
    var max_starts_here = 0;
    var maximum = -Infinity;
    var start;
    for (let i = 0; i < arr.length; i++) {
        // include current element to previous subarray only
        // when it can add to a bigger number than itself.
        if (arr[i] <= max_starts_here + arr[i]) {
            max_starts_here += arr[i];
        }
        // else start the max subarray from current element
        else {
            max_starts_here = arr[i];
        }
        if (max_starts_here > maximum) {
            maximum = max_starts_here;
        }
    }
    console.log(max_starts_here, maximum)
    return maximum;
}

console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]