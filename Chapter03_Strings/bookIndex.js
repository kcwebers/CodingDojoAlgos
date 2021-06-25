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