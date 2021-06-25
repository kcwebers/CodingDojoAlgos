// Here, a balance point is ON an index, not BETWEEN indicies. Return the balance index where sums are equeal on either side (exclude its own value). Return -1 if none exist.
// Example 1: [-2, 5, 7, 0, 3]  --> 2 
// The balance index is 2 because on either side of that index the sums are equal:  [-2, 5,  |7| , 0, 3] --> -2+5 == 0+3
// Example 2: [9, 9]  -->  -1
// There is no balance index because there are fewer than 3 indices! As a result, we return -1 to maintain a consistent datatype

// ============================
// Instructor's Solution
// ============================

function balanceIndex(arr) {
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

// ============================
// Frame for Students
// ============================

function balanceIndex(arr) {
    // your code here
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // 2
console.log(balanceIndex([9, 9])); // -1

// ============================
// Students' Solutions
// ============================

function balanceIndex(arr) {
    // your code here
    var next = 1;
    var sum1 = 0;
    var sum2 = 0;
    var found = -1;
    for (var i = 0; i< arr.length; i++){
        for(var j = next-1; j>=0; j--){
            sum1 += arr[j]
        }
        for(var k = next+1; k < arr.length; k++){
            sum2 += arr[k];
        }

        if(sum1 == sum2){
            found = next
            break
        }
        else{
            found = -1
        }
        next +=1
        sum1 = 0;
        sum2 = 0;
    }
    return found
}

// ============================
// returns true/false instead of the index where the balance is

function balanceIndex(arr) {
    // your code here
    sum1 = 0;
    sum2 = 0;
    if(arr.length % 2 == 0){
        return -1;
    }
    for(i=0; i < Math.floor(arr.length/2); i++){
        console.log(arr[i]);
        sum1 += arr[i];
        console.log("sum1 is: " + sum1);
    }
    for(i=arr.length-1; i > Math.floor(arr.length/2); i--){
        console.log(arr[i]);
        sum2 += arr[i];
        console.log("sum2 is: " + sum2);
    }
    if(sum1 == sum2){
        console.log("${sum1} equals ${sum2}");
        return true;
    }
    else{
        return false;
    }
}

// ============================

function balanceIndex(arr) {
    if (arr.length < 3) return -1;
    const reducer = (acc, curVal) => acc + curVal;
    for (let i = 0; i < arr.length - 2; i++) {
      const left = arr.slice(0, i + 1).reduce(reducer);
      const right = arr.slice(i + 2).reduce(reducer);
      if (left === right) return i + 1;
    }
    return -1;
  }



