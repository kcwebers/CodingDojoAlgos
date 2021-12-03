// Given an array comprised of integers, return it's mode value(aka. the most common value in that dataset).

// [1,2,3,1,1,2,2,5,6] 1


// ============================
// Instructor's Solution
// ============================


function mode(arr){
    var obj = {}
    for(let i = 0; i < arr.length; i++){
        if( !obj[arr[i]] ){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]] += 1
        }
    }
    var mode = 0;
    var modeCount = 0;
    for(var key in obj) {
        if(obj[key] > modeCount) {
            mode = key;
            modeCount = obj[key]
        }
    }
    return mode
}
console.log(mode([1,2,3,1,1,2,2,2,5,6])) // returns 2

// ============================
// Frame for Students
// ============================

function mode(arr) {
    // your code here
}

console.log(mode([1,2,3,1,1,2,2,5,6])); //return 2

// ============================
// Students' Solutions
// ============================