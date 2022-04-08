/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/
const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";
/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
    // edge case goes here: if nothing in given array?
    if(nums.length < 1) {
        return "";
    }
    // create final str to concat into 
    var finalStr = "";
    // create a for loop to move through overall array
    for(let i = 0 ; i < nums.length ; i ++) {
        // check current number against next number in line, see if they are consecutive
        if(nums[i] + 1 === nums[i + 1]) {
            // when consecutive nums are found, then we want to find entirety of range
            let start = nums[i];
            while(nums[i] + 1 === nums[i + 1]) {
                i ++;
            }
            let end = nums[i];
            // add nums to string accordingly 
            finalStr += start + "-" + end;
        } else {
            finalStr += nums[i]
        }
        if(i !== nums.length - 1) {
            finalStr += ", "
        }
    }
    // return final str
    console.log(finalStr)
    return finalStr;
}

bookIndex(nums1)
