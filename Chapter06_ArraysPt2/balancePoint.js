// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's. 
// Example: [1,2,3,4,10] --> True
// the belenace point happens b/w indices 3 & 4 where the left side equals the right:  [1, 2, 3, 4  |  10]  ==> 1+2+3+4 = 10

// ============================
// Instructor's Solution
// ============================

function balancePoint(arr) {
    var arrTotal = 0;
    var subSum = 0;

    for (var i = 0; i < arr.length; i++) { // loop through and collect the total sum for all values in the array
        arrTotal += arr[i];
    }
    for (var i = 0; i < arr.length ; i++) { // loop through again and check whether (total - sum of some elements) = sum of some elements
        if (subSum === arrTotal-subSum) { //subSum tracks sum of elements as we increment; check against total-subSum
            return true; 
        }
        subSum += arr[i]; //add elements as we increment and the subSum != total-subSum
    }
    return false;
}

// ============================
// Frame for Students
// ============================

function balanceIndex(arr) {
    // your code here
}
console.log(balancePoint([4,3,7,4,10])); // true
console.log(balancePoint([4,3,7,4,11,2])); // false


// ============================
// Students' Solutions
// ============================

function balancePoint(arr) {
    // your code here
    var next = 1;
    var sum1 = 0;
    var sum2 = 0;
    var balance = false;
    for (var i = 0; i< arr.length; i++){
        for(var j = next-1; j>=0; j--){
            sum1 += arr[j]
        }
        for(var k = next; k < arr.length; k++){
            sum2 += arr[k];
        }

        if(sum1 == sum2){
            balance = true
            break
        }
        else{
            balance = false
        }
        next +=1
        sum1 = 0;
        sum2 = 0;
    }
    return balance
}

// ============================

function balancePoint(arr) {
    // your code here
    var sum = 0;
    for(i = 0; i < arr.length-1; i++){
        sum += arr[i];
        console.log(arr[i]);
        console.log("sum is " + sum)
        if(i == arr[arr.length-1]){
            break;
        }
    }
    if(sum == arr[arr.length-1]){
        console.log("The array values summed equals the last array value")
        return true;
        
    }
    else{
        console.log("The array values sumed do not equal the last array value")
        return false;
    }
}

// ============================

function balancePoint(myArray){
    var leftsum = 0;
    var leftindex = 0;
    var rightsum = 0;
    var rightindex = myArray.length-1
    if(myArray.length == 1 ){
        return true;
    }
    leftsum = myArray[leftindex];
    rightsum = myArray[rightindex];
    while (leftindex +1 != rightindex){
        if (leftsum > rightsum){
            rightindex -=1;
            rightsum += myArray[rightindex];
        }
        else if(leftsum < rightsum){
            leftindex +=1;
            leftsum += myArray[leftindex];
        }
        else{
            leftindex +=1;
            leftsum += myArray[leftindex];
            rightindex -=1;
            rightsum += myArray[rightindex];
        }
        if(leftindex == rightindex){
            break
        }
    }
    if (leftsum == rightsum){
        return true;
    }
    return false;
}

// ============================

function balancePoint(arr) {
    const reducer = (acc, curVal) => acc + curVal;
    for (let i = 0; i < arr.length - 1; i++) {
      const left = arr.slice(0, i + 1).reduce(reducer);
      const right = arr.slice(i + 1).reduce(reducer);
      if (left === right) return true;
    }
    return false;
  }

// ============================

  function balancePoint(arr) {
    let sum = 0;
    let checkSum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    for (let j = 0; j < arr.length; j++) {
      if (checkSum === sum) {
        return true;
      }
      sum -= arr[j];
      checkSum += arr[j];
    }
    return false;
  }