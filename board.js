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