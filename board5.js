/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array

  More Advanced: return the index of the value once it has been found
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */

// function binarySearch(sortedNums, searchNum) {
//     let mid = Math.floor(sortedNums.length / 2);
//     if (sortedNums[mid] == searchNum) {
//         return true;
//     }

//     else if (searchNum > sortedNums[mid]) {
//         return binarySearch(sortedNums.slice(mid, sortedNums.length - 1), searchNum);
//     }
//     else if (searchNum < sortedNums[mid]) {
//         return binarySearch(sortedNums.slice(0, mid), searchNum);
//     }
//     return false;
// }

function binarySearch(arr, num, l = 0, r = arr.length) {
    if (arr.length < 1) {
        return -1;
    }
    // as long as our indices are at least 2 elements apart, continue recursion 
    if (r - l > 1) {
        // declare midpoint
        var mid = Math.floor((r + l) / 2);

        if (arr[mid] == num) {
            return mid
        }
        if (num < arr[mid]) {
            return binarySearch(arr, num, l, mid);
        }
        return binarySearch(arr, num, mid + 1, r);
    }
    return arr[l] == num ? l : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 7, 9, 10, 11, 13, 14, 15], 4));