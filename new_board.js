/* 
  Given an array of objects to represent new inventory,
  and an array of objects to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {
    for (let i = 0; i < newInv.length; i++) {
        let itemFound = false;
        const newItem = newInv[i];

        for (let j = 0; j < currInv.length; ++j) {
            const currItem = currInv[j];

            if (newItem.name === currItem.name) {
                itemFound = true;
                currItem.quantity += newItem.quantity;
                // no need to keep looping over the rest of the items since we found what we are looking for
                break;
            }
        }
        // after looking through all current inventory
        if (itemFound === false) {
            currInv.push(newItem);
        }
    }
    return currInv;
}

/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    let startIdx = 0;
    let endIdx = str.length - 1;

    // loose comparison to false works for spaces
    // and other space-like characters (tabs, etc.)
    while (str[startIdx] == false) {
        startIdx++;
    }
    while (str[endIdx] == false) {
        endIdx--;
    }
    return str.slice(startIdx, endIdx + 1);
}

console.log(trim("   hello world     "));

/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "sitent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        let s1CharCount = 0;
        let s2CharCount = 0;
        let currChar = s1[i].toUpperCase();

        // count how many times currChar appears in both strings
        for (let j = 0; j < s1.length; j++) {
            if (s1[j].toUpperCase() === currChar) {
                s1CharCount++;
            }

            if (s2[j].toUpperCase() === currChar) {
                s2CharCount++;
            }
        }

        if (s1CharCount !== s2CharCount) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram(strA4, strB4))

/*****************************************************************************/