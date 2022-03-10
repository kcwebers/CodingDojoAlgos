// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

// ============================
// Instructor's Solution
// ============================

function bookIndex(arr){
    var str = "";

    for (var i = 0 ; i < arr.length ; i++){
        if (i < arr.length && i !== 0){
            str += ", ";
        }

        if (arr[i + 1] === arr[i] + 1){
            var start = arr[i];
            while (arr[i + 1] === arr[i]+1){
                i++;
            }
            var end = arr[i];
            str += start + "-" + end;
        }
        
        else {
            str += arr[i];
        }
    }
    return str;
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))

// ============================
// Frame for Students
// ============================

function bookIndex(arr){
    // your code here
}

console.log(bookIndex([1,3,4,5,6,7,8,10]))

// ============================
// Students' Solutions 
// ============================

function bookIndex(arr) {
    var newArr = [];
    for(x = 0; x <= arr.length; x++){
        if (arr[x]+1 == arr[x+1]){
        var first = arr[x];
        while(arr[x]+1 == arr[x+1]){
            x++;
    }
    var last = arr[x];
    newArr.push(first + "-" + last);
}   
    else {
    newArr.push(arr[x])
    }
    }
    var string1 = newArr.join(',');
    return string1
}

console.log(bookIndex([1,3,4,5,6,7,8,10]))

// ============================

function bookIndex(arr){
    var preOutput = "";
    for(var i = 0 ; i<arr.length; i++){
        let tempIndex = i;
        while(arr[i]+1 === arr[i+1]){
            i++
        }
        if(tempIndex !== i){
            preOutput += arr[tempIndex] + "-" + arr[i] + "," + " "
        }else {
            preOutput += arr[i] + "," + " "
        }
    }
    return preOutput.slice(0,preOutput.length -2);
}
console.log(bookIndex([1,3,4,5,7,8,10]))

// ============================

function bookIndex(input) {
    var stringarray = [];
    for (var i = 0; i < input.length; i++) {
        if (i + 1 == input.length) {
        stringarray.push(input[i].toString());
        } //last item, if solo, has no potential pair
        else if (input[i] + 1 != input[i+1]) {
        stringarray.push(input[i].toString());
        } //item with non-adjacent neighbor gets dropped into array
        else {
            var left = input[i];
            var right = 0;
            while (input[i] + 1 == input[i+1]) {
            right = input[i + 1]
            i++;
            }
            stringarray.push(left.toString() + "-" + right.toString())
        }
    }
    console.log(stringarray);
    return buildIndex(stringarray);
}

// ============================

function buildIndex(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
        if (i != input.length - 1) {
        output += ", ";
        }
    }
    return output;
}

console.log(bookIndex([1, 3, 4, 5, 6, 7, 8, 10]));
console.log(bookIndex([1, 2, 3, 4, 5]));
console.log(bookIndex([1, 3, 5, 11, 12, 13, 21, 22, 23, 24, 89, 255, 256, 257, 314]));

// ============================

function bookIndex(arr){
    //your code here
    //iterate through the string
    for(var i = 0; i < arr.length; i++){
        //search for consecutive numbers
        if(arr[i]+1 == arr[i+1]){
            var j = 1 // marker to increase during the while loop
            while(arr[i]+j == arr[i+1]){
                //if consecutive numbers find starting and ending indexes. 
                var temp = arr[i+1]
                //erase indexes no longer needed
                arr.splice(i+1, 1)
                //Combine values with a '-' in between
                j++
            }
            arr[i] = `${arr[i]}-${temp}`
        }
    }
    return arr.join(', ')
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))

// ============================

function bookIndex(arr) {
    var currentPg=0;
    var hyphen=false;
    var output="";

    for(var i=0; i<arr.length; i++) {
        if(currentPg == 0 || currentPg != arr[i]-1) {
            output += arr[i];
        }
        else if(currentPg == arr[i]-1 && arr[i+1] != arr[i]+1){
            output += "-" + arr[i];
        }

        if((arr[i+1] != arr[i]+1) && (i != arr.length-1)) {
            output += ", ";
        }

        currentPg=arr[i]
    }
    return output;
}

console.log(bookIndex([1,3,4,5,7,8,10,12]));

// ============================

function bookIndex(arr) {
    var index = ''
    arr.forEach((val, idx) => {
        if(idx === 0 || val !== arr[idx-1]+1)
            index = index + ", " + val 
        else if (idx === arr.length-1 || val === arr[idx-1]+1){
            index.charAt(index.length-(String(arr[idx-1]).length+1)) == '-' ?
            index = index.substring(0,index.lastIndexOf('-')+1)+val :
            index = index + '-' + val
        }
    })
    return index.substring(2)
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))
console.log(bookIndex([1,2,3,4,5,6,7,8,9,10,11,12]))
console.log(bookIndex([1,3,4,5,7,8,10,12,100,101,102,104,105,106,107]))

// ============================

function bookIndex(arr){
    var comb = []
    var start
    var end
    for(var i=0;i<=arr.length -1; i++){
      start= arr[i]
      end = start
  
      while (arr[i+1]- arr[i]==1) {
        end = arr[i+1]
        i++
      }
      // 
      if(start == end){
        comb.push(start)
      }else{
        comb.push(start+ "-"+ end)
      }
  
    }
    return comb.join(', ')
  }

  console.log(bookIndex([1,3,4,5,7,8,10,12]))

// ============================

// Write a function that given a sorted array of page numbers, return a string representing a book index. 
// Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"


function bookIndex(arr){
    // string to format and return output
    let output = "";

    // iterate through array
    for(let i = 0; i < arr.length; i++) {
        // formatting check for leading space
        if(i != 0) {
            output += " ";
        }

        // push either individual or leading value
        output += arr[i]

        if( (arr[i] + 1) == arr[i + 1] ) {
            // if values are consecutive, run until end of consecutive value is found
            let runner = i + 1;
            while( (arr[runner] + 1) == arr[runner + 1] ) {
                runner++;
            }
            output += "-" + arr[runner];
            i = runner;
            // *note: i will iterate before next loop begins, but this index has already been checked by the runner
        }

        // if not the last value, add comma
        if(i < arr.length - 1) {
            output += ","
        }
    }

    return output;
}

console.log(bookIndex([1,3,4,5,7,8,10,12]));
console.log(bookIndex([1,5,8,9,10,11,12,13,20,23,25,32,33,56,57,58,59,60,61]));
console.log(bookIndex([1,5,6,7,8,9,11]));

// ============================

// Write a function that given a sorted array of page numbers, return a string representing a book index. 
// Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"



function bookIndex(arr){
    // your code here
    //array set to the value of arr at index 0
    var tempArr =[arr[0]]
    //empty string to add to it later
    var newStr = ""
    //console.log(arr)
    //loop through our array
    for(var i = 1; i < arr.length; i++){
        //console.log(arr[i])
        //if arr[i] is 1 + the last value of temp arr then we add arr[i] to temp arr
        if(arr[i] - tempArr[tempArr.length-1] == 1){
            tempArr.push(arr[i])
        }
        //if its not then we send our temp array to a function that formats it to our string
        else{
            newStr += `${arrString(tempArr)}, ` 
            //we now set temp arr to only have our current arr[i]
            tempArr = [arr[i]]
        }
    }
    //add the last value(s) remaining in tempArr to our string as our loop doesnt add the last value
    newStr += arrString(tempArr)

    //return the string
    return newStr
}

function arrString(arr){
    var len = arr.length
        //console.log(len)
        //convert the array to a string
        //if we only have on value we only send one value to the string
        if(len == 1){
            return `${arr[0]}`
        }
        //if we have more than one we need the first, last, and a dash
        else{
            return `${arr[0]}-${arr[len-1]}`
        }
}

console.log(bookIndex([1,3,4,5,7,8,10,12])) //1, 3-5, 7-8, 10, 12
console.log(bookIndex([1,3,4,5,7,8,10,11,12])) //1, 3-5, 7-8, 10-12

// ============================

function bookIndex(arr){
    var firstPage = 0;
    var finalString = "";
    var hasMultiplePages = false;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i+1] == arr[i]+1 ){
            if (hasMultiplePages == false){
                hasMultiplePages = true;
                firstPage = arr[i]; 
            }
            else{
                continue;
            }
        }

        else if(hasMultiplePages == true){
            finalString += (firstPage + "-" + arr[i] + ", ")
            hasMultiplePages = false
        }

        else{
            finalString += ( arr[i] + ", ")
        }
    }
    return finalString.slice(0,-2);
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))

// ============================

