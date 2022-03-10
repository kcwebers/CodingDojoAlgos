// Write a function that given a sorted array of page numbers, return a string representing a book index. 
// Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"


function bookIndex(arr){
    var str = "";

    for (var i = 0 ; i < arr.length ; i++){
        if (i < arr.length && i !== 0){
            str += ", ";
        }

        if (arr[i + 1] === arr[i] + 1){
            var start = arr[i];
            while (arr[i + 1] === arr[i] + 1){
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

console.log(bookIndex([1,5,6,7,8,9,11]))