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

    // organize start and endpoints
    for(var i = 0 ; i < arr.length ; i ++ ) {
        start.push(arr[i][0]);
        end.push(arr[i][1]);
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

    // construct final order from start/endpoints
    var order = [];
    order.push(start[j], end[j]);
    start.splice(j, 1);
    end.splice(j, 1);

    var m = 0;
    while(end.length > 0) {
        if(start[m] == order[order.length-1]) {
            start.splice(m, 1);
            order.push(end[m]);
            end.splice(m, 1);
            m = 0;
        } else {
            m ++;
        }
    }
    return order.join(" --> ")

}

console.log(mappingItineraries( [  ['ICN', 'LAX'], ['LAX', 'SFO'], ['SJC', 'ICN'], ['NYU', 'SJC'], ['AMS', 'NYU'] ]));
// AMS -> NYU -> SJC -> ICN -> LAX -> SFO


// ============================================
// Student Solutions
// ============================================

const mappingItineraries = (arr) => {
    let front;
    let tripDict ={};
    let itinerary="";

    for(let i = 0; i < arr.length; i++){
        let j=0;
        for(j; j < arr.length; j++){
            if(!tripDict[arr[j][0]]){
                tripDict[arr[j][0]]=arr[j][1];
            }
            if(arr[j][1] === arr[i][0]){
                break;
            }
        }
        if(j === arr.length){
            front = arr[i][0];
        }
    }
    let current=front;
    itinerary+= front;
    for(let i = 0; i < arr.length; i++){
        itinerary +=  " -> " + tripDict[current];
        current = tripDict[current];
    }
    return itinerary;
}

// ============================================

function mappingItineraries(arr) {
    var dict = {};
    var finalString = "";
    for (var i = 0; i < arr.length; i++){
        if (dict[arr[i][0]]){ //This should give us a dictionary with the keys being the airports
            dict[arr[i][0]]++; //The number is the number of times the airport appears in the array
        }
        else {
            dict[arr[i][0]] = 1;
        }
        if (dict[arr[i][1]]){
            dict[arr[i][1]]++;
        }
        else {
            dict[arr[i][1]] = 1;
        }
    }
    var j = 0; //We're going to declare j out here so we can use it later on
    for (j; j < arr.length; j++){
        if (dict[arr[j][0]] == 1){ //If any in the first index only show up once in the dictionary
            finalString += arr[j][0] + " --> "; //This gets us our starting point
            break;
        }
    }
    while (dict[arr[j][1]] == 2){ //The exit condition is the second value in the array only showing up once in the dictionary
        for (var i = 0; i < arr.length; i++){ //Now we keep track of that value and find where its counterpart is in the first slot
            if (arr[j][1] == arr[i][0]){
                j = i;
                finalString += arr[i][0] + " --> ";
                break;
            }
        }
    }
    finalString += arr[j][1]; //Now we add the last stop
    return finalString;
}

// ============================================

function mappingItineraries(arr) {
    var result = []
    var runner1 = 0;
    var runner2 = 0;
    while(runner2 < arr.length) {
        if(arr[runner1][0] == arr[runner2][1]) {
            runner1++;
            runner2 = 0;
        }else if(runner2 == arr.length-1) {
            result.push(arr[runner1][0]);
            runner1 = 0;
            runner2 ++;
        }else {
            runner2 ++;
        }
    }
    while(result.length <= arr.length) {
        if(result[result.length-1] == arr[runner1][0]) {
            result.push(arr[runner1][1]);
            runner1 = 0;
        }else {
            runner1++
        }
    }
    return result.join(" -> ");
}