// There are 3 edits that can be done on a tring: add a acharacter, remove a character, 
// or replace a character. Given 2 strings, write a function that checks if they are 
// one edit or fewer away from eachother (see samples below)
function oneAway(str1, str2) {
    // if the difference in str lengths is greater than 1 then return false
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    // if the 2 strings match in length, then compare elements, only 1 can be wrong
    if(str1.length == str2.length) {
        console.log()
        var flaw = false;
        for (var i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                if(flaw == true) {
                    return false;
                }
                flaw = true;
            }
        }
        return true;
    } else {
        // if strings are different lengths then find the longer/shorter
        var longer = str1.length > str2.length ? str1 : str2;
        var shorter = str1.length < str2.length ? str1 : str2;
        var idx1 = 0;
        var idx2 = 0;

        while(idx1 < longer.length && idx2 < shorter.length) {
            // console.log(idx1, idx2)
            if(idx1 - idx2 > 1) {
                return false
            }

            // if the elements to match up, move the pointer for the longer string along
            // this is because if something is inserted/deleted in spot, 
            // it should mean everything thereafter will line up
            if(longer[idx1] != shorter[idx2]) {
                idx1 ++;
            } else {
                // if elements match, then move both pointers
                idx1 ++;
                idx2 ++;
            }
        }
        return true;
    }
}

console.log(oneAway("hello", "eello")) // true
console.log(oneAway("hello", "eelloo")) // false 
console.log(oneAway("ello", "hello")) // true
console.log(oneAway("helllo", "hello")) // true
console.log(oneAway("hello", "helo")) // true
console.log(oneAway("hello", "hell")) // true
console.log(oneAway("hjllo", "helo")) // false