/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    // get rid of decimals
    const int = Math.floor(num);

    // base case
    if (int < 1) {
        return 0;
    }
    // if the return keyword is missing below, undefined because returns that
    // happen deeper in the recursion don't get returned all the way out.
    return int + recursiveSigma(int - 1);
}

/*****************************************************************************/

/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i = 0) {
    if (i === nums.length) {
        return 0;
    }
    return nums[i] + sumArr(nums, i + 1);
}

// function sumArr2(nums = [], sum = 0, i = 0) {
//     if (i === nums.length) {
//         return sum;
//     }
//     return sumArr2(nums, sum + nums[i], i + 1);
// }

/*****************************************************/

