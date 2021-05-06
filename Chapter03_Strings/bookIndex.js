// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,6,7,8,10] --> "1, 3-8, 10"

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

console.log(bookIndex([1,3,4,5,6,7,8,10]))

// ============================
// Frame for Students
// ============================

function bookIndex(arr){
    // your code here
}

console.log(bookIndex([1,3,4,5,6,7,8,10]))