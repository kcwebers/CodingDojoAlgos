/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let distance = 0;
    let firstPersonSeen = false;

    // Use the existing i value
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 0) {
            distance += 1;
        } else {
            if (firstPersonSeen && distance < 6) {
                return false;
            }

            firstPersonSeen = true;
            distance = 0;
        }
    }
    return true;
}

/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-1, 5, -1, 7, 3];
const expected1 = 3;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
// function balanceIndex(nums) {
//     if (nums.length < 3) {
//         return -1;
//     }

//     let left = nums[0];
//     let right = 0;

//     for (let i = 2; i < nums.length; i++) {
//         right += nums[i];
//     }

//     for (let i = 1; i < nums.length - 1; i++) {
//         if (left === right) {
//             return i;
//         }

//         right -= nums[i + 1];
//         left += nums[i];
//     }
//     return -1;
// }

function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1;
    }

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