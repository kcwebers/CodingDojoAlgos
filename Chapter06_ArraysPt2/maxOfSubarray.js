// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a aubarray. Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]


// ============================
// Instructor's Solution
// ============================

// Kadane's Algorithm

function maxOfSubarray(arr){

    var maxOfSub = 0; 
    var checkerMax = 0;
  
    for(var i = 0; i < arr.length; i++){  
      maxOfSub = Math.max(0, maxOfSub + arr[i]);
      checkerMax = Math.max(maxOfSub, checkerMax);
    }
    return checkerMax;
  }


// ============================
// Frame for Students
// ============================

function maxOfSubarray(arr) {
    // your code here
}

console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]

// ============================
// Students' Solutions
// ============================

function maxOfSubarray(ar) {
    // [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]
    // Sliding window
    // const tracker = {
    //   max: 0;
    //   subar: []
    // }
    // 1. Window starts at [1, 2] and shifts to the right. keep track of highest sum, and the arrays.
    // 2. Window starts again at [1, 2, -4] and shifts to the right. Keep track of highest sum.
    // 3. Window starts again at [1, 2, -4, 3] ...
    // 4. Continue above steps until window size === ar.size.
    let tracker = {
      maxSum: -Infinity,
      subAr: [],
    };
  
    let windowLastIndex = 2;
  
    do {
      let startIndex = 0;
      let endIndex = windowLastIndex;
  
      while (endIndex <= ar.length) {
        let curSum = 0;
        let curSubAr = ar.slice(startIndex, endIndex);
  
        // get current sum of all the elements in the sub array.
        function setCurrentSumOfSubArray(curSubAr) {
          for (let i = 0; i < curSubAr.length; i++) {
            curSum += curSubAr[i];
          }
          if (curSum > tracker.maxSum) {
            tracker.maxSum = curSum;
            tracker.subAr = curSubAr;
          }
        }
  
        // slide the window to the right
        function slideWindowRight() {
          startIndex++;
          endIndex++;
        }
  
        setCurrentSumOfSubArray(curSubAr);
        slideWindowRight();
      }
      windowLastIndex++;
    } while (windowLastIndex <= ar.length);
    return tracker;
}
  
console.log(maxOfSubarray([1, 2, -4, 3, -2, 3, -1])); //return 4; prints [3,-2,3]
console.log(maxOfSubarray([1, 2, -4, 300, -200, 3, -1]));
console.log(maxOfSubarray([1, -210, -4, 300, -200, 3, -1]));
console.log(maxOfSubarray([-100, -210, -4, -300, -200, -3, -1]));


// ============================
// did not construct sub array to print

function maxSub(arr){
    let maxSum = 0;
    let sub = [];
    

    for(let i = 0; i < arr.length; i++){
        let sum1 = 0
        for(let j = i; j < arr.length; j++){
            sum1+= arr[j];
            maxSum = Math.max(maxSum, sum1);
        }
        
    }
    return maxSum;
}

console.log(maxSub([1,2,-4,3,-2,3,-1]));

// ============================

function maxOfSubarray(arr) {

    let currentMax = 0;
    let recordedMax = 0;

    for (let i = 0; i < arr.length; i++) {
        currentMax = Math.max(0, currentMax + arr[i]);
        recordedMax = Math.max(currentMax, recordedMax);
    }
    return recordedMax;
}

// ============================

function maxOfSubarray(arr) {
    var N = arr.length;
    var max = arr[0];
    var maxI = 0;
    var maxJ = 0;
    for (var i = 0; i < N; i++) {
        var sum = arr[i];
        for (var j = i; j < N; j++) {
            if (j > i) 
                sum += arr[j];
            if (sum > max) {
                max = sum;
                maxI = i;
                maxJ = j;
            }
        }
    }
    var res = [];
    for (var x = maxI; x <= maxJ; x++)
        res.push(arr[x]);
    console.log(res);
    return max;
}

// ============================

function maxOfSubarray(arr) {
    let start = 0;
    let end = 0;
    let maxSum = 0;

    for(let i=0; i<arr.length; i++){ // start of subarray pointer
        let runningSum = 0;
        for(let j=i; j<arr.length; j++){ // end of subarray pointer
            runningSum += arr[j]; // keep running tally of subarray sums

            if(runningSum > maxSum){ // keep running loop until largest subArray sum
                maxSum = runningSum;
                start = i;
                end = j;
            }
        }
    }
    subArr = arr.slice(start, end+1);
    console.log(`Max subarray found at ${start}, ${end}`)
    console.log(subArr);
    return maxSum;
}

// ============================
    
function maxOfSubarray(myArray){
var maxsubarray =[];
var maxsum = 0;

    for(var x = 1; x<myArray.length;x++){
        for(var y = 0; y<=myArray.length;y++){
            var arr = myArray.slice();
            // console.log(arr);
            // console.log(myArray);
            var test = arr.splice(y,x);
            var testsum = 0;
            for(z=0;z<test.length;z++){
                testsum += test[z];
            }
            if(testsum > maxsum){
                maxsum = testsum;
                maxsubarray = test;
            }
        }
    }
    console.log(maxsubarray);
    return maxsum;
}
arrA = [-1,-5,-6]
arr = [1,2,-4,3,-2,3,-1,60];
console.log(maxOfSubarray(arr))