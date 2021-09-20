function binarySearch(num, arr, l=0, r=arr.length){
    if(arr.length < 1){
        // return -1 as 'false' index as tehre is nothing in array
        return -1;
    }
    // as long as our indices are at least 2 elements apart, continue recursion 
    if(r - l > 1) {
        // declare midpoint
        var mid = Math.floor((r + l)/2);

        if(arr[mid] == num) {
            return mid
        }      
        if(num < arr[mid]) {
            return binarySearch(num, arr, l, mid);
        } 
        return binarySearch(num, arr, mid+1, r);
    }
    return arr[l] == num ? l : -1;
}

function doTest(f, exp, ...args) {
    if (typeof doTest.counter == 'undefined') {
        doTest.counter = 0;
    }
    
    ++doTest.counter;
    let out = f(...args);
    
    if (out === exp) {
        console.log(`Test ${doTest.counter} passed.`);
    } else {
        console.log(`Test ${doTest.counter} failed: expected ${exp}, got ${out}.`);
    }
}

