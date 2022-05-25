/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
    if (unorderedNums.length < 1) {
        return null;
    }

    let min = unorderedNums[0];
    let max = unorderedNums[0];
    let sum = 0;
    let expectedSum = 0;

    for (const n of unorderedNums) {
        if (n < min) {
            min = n;
        }
        if (n > max) {
            max = n;
        }
        sum += n;
    }

    for (let i = min; i <= max; i++) {
        expectedSum += i;
    }
    return sum === expectedSum ? null : expectedSum - sum;
}

/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [2, 2, 3, 3, 4, 4];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    if (nums.length === 1) {
        return [nums[0]];
    }
    const modes = [];
    const freq = {};
    let maxFreq = 0;
    let allSameFreq = true;
    for (const n of nums) {
        freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1);
        // if (freq[n]) {
        //     freq[n] ++
        // } else {
        //     freq[n] = 1
        // }
        if (freq[n] > maxFreq) {
            maxFreq = freq[n];
        }
    }

    for (const key in freq) {
        if (freq[key] === maxFreq) {
            // Keys are strings, convert back to int. Can be avoided if using a Map.
            modes.push(parseInt(key));
        } else {
            allSameFreq = false;
        }
    }
    // return empty array if allSameFreq, else return modes
    return allSameFreq ? [] : modes;
}