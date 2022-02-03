// Given a list of itineraries, find the proper path of the trip. 
// A list of itineraries will be an array of arrays, where the inner array will always be length two. 
// For example, here is an example list of itineraries: [ ['LAX', 'SFO'], ['ICN', 'LAX'], ['SJC', 'ICN'] ].

// The first element in each inner array is the "from" airport, and the latter is the "to" airport. 
// So, ['LAX', 'SFO'] means "from LAX to SFO." Running with this example, given this list of itineraries,
// your code should then print out 'SJC -> ICN -> LAX -> SFO', or you can just comma-separate 
// those airports if you don't like the arrows. Whatever method you choose, 
// you should produce the proper route of the trip. It's guaranteed that the itineraries 
// have exactly one start airport, and exactly one end airport, and that there aren't any loops. 
// Basically, the itinerary will form a single linked list.

// return a single string of the mapped itineraries

function mappingItineraries(arr) {

    var start =  []
    var end = []

    // ['ICN', 'LAX'], ['LAX', 'SFO'], ['SJC', 'ICN'], ['NYU', 'SJC'], ['AMS', 'NYU'] 
    // organize start and endpoints
    for(var i = 0 ; i < arr.length ; i ++ ) {
        start.push(arr[i][0]);
        // [ICN, LAX, SJC, NYU, AMS]
        end.push(arr[i][1]);
        // [LAX, SFO, ICN, SJC, NYU]
    }

    // find the start point by comparing and finding the outlier
    var j = 0;
    var k = 0;
    while(k < end.length) {
        if(start[j] == end[k]) {
            j++;
            k = 0;
        } else {
            k ++;
        }
    }

    // start[j] == "AMS"
    // construct final order from start/endpoints
    // order = [AMS, NYU, SJC, ICN, LAX, SFO]
    // start =  []
    // end =    []
    var order = [];
    order.push(start[j], end[j]);
    start.splice(j, 1);
    end.splice(j, 1);

    var m = 0;
    while(end.length > 0) {
        if(start[m] == order[order.length-1]) {
            start.splice(m, 1); // remove from 'start' array
            order.push(end[m]);
            end.splice(m, 1); // remove from 'end' array
            m = 0;
        } else {
            m ++;
        }
    }
    return order.join(" -> ")
}

console.log(mappingItineraries( [  ['ICN', 'LAX'], ['LAX', 'SFO'], ['SJC', 'ICN'], ['NYU', 'SJC'], ['AMS', 'NYU'] ]));
// AMS -> NYU -> SJC -> ICN -> LAX -> SFO


// ############################################################################################


// There are 3 edits that can be done on a string: add a acharacter, remove a character, or replace a character. 
// Given 2 strings, write a function that checks if they are one edit or fewer away from eachother (see samples below)
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

// console.log(oneAway("hello", "eello")) // true
// console.log(oneAway("hello", "eelloo")) // false 
// console.log(oneAway("ello", "hello")) // true
// console.log(oneAway("helllo", "hello")) // true
// console.log(oneAway("hello", "helo")) // true
// console.log(oneAway("hello", "hell")) // true
// console.log(oneAway("hjllo", "helo")) // false