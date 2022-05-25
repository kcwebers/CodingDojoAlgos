/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expect1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expect2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expect3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    var freqTable = {};
    // this loop euqates to
    // "for every element of an array"
    // element referring tot he actual value in the array instead of the index
    for(var str of arr) {
        // check to see if the freqTable contains the str as a key (meaning we have or haven't accounted for it yet)
        if (!freqTable[str]) {
            // first occurrence found
            freqTable[str] = 1;
        } else {
            // else if the element is already in the freqTable, then we just need to add 1
            freqTable[str]++;
        }
    }

    return freqTable;
}

console.log(makeFrequencyTable(arr1), "should equal", expect1)
console.log(makeFrequencyTable(arr2), "should equal", expect2)
console.log(makeFrequencyTable(arr3), "should equal", expect3)

/*****************************************************************************/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

const nums5 = [5, 5, 9, 5, 3, 5, 6, 6, 5, 3, 2, 5, 2];
const expected5 = 9;

function oddOccurrencesInArray(nums) {
    // call on the method we just built!
    const freqTable = makeFrequencyTable(nums)

    // this loop euqates to
    // "for every key in an object"
    // this allows us to access the keys, and then look into that key if we want the value
    for (var key in freqTable) {
        // check each value located in the freqTable via their keys to see if it's even or odd
        if (freqTable[key] % 2 != 0) {
            // when we find an odd man out, we return the KEY not the value at the key
            return key
        }
    }
}

console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);
console.log(oddOccurrencesInArray(nums5), "should equal", expected5);


/*****************************************************************************/