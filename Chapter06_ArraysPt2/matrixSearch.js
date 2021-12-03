// Matrix Search

// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.

// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];

// If finding the submatrix is too hard, try and find just 1 number in the matrix first! Then try and find a few numbers in the same line, then the submatrix
// console.log(matrixSearch([ 
    // [12, 34, 45, 56],
    // [98, 87, 76, 65],
    // [56, 67, 78, 89],
    // [54, 43, 32, 21] ], 
    // 67)); --> true

// console.log(matrixSearch([ 
    // [12, 34, 45, 56],
    // [98, 87, 76, 65],
    // [56, 67, 78, 89],
    // [54, 43, 32, 21] ], 
    // [ 67, 78 ])); --> true

// ============================
// Instructor's Solution
// ============================

// ---- 

// ============================
// Frame for Students
// ============================

function matrixSearch(arr, subArr) {
    // your code here
}
console.log(matrixSearch([ [12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21] ], [ [67, 78], [43, 32] ])); // true
console.log(matrixSearch([ [12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21] ], [ [67, 78], [43, 21] ])); // false

// ============================
// Students' Solutions
// ============================

function matrixSearch(arr, img) {

    for(let i=0; i< img.length; i++){
        for(let j=0; j<img[i].length; j++){
            if(img[i][j] == arr[0][0] && img[i][j+1] == arr[0][1]){
                if(img[i+1][j] == arr[1][0] && img[i+1][j+1] == arr[1][1]){
                    return ('found at index: ' + i +', '+ j);
                }
            }
        }
    }
}

// ============================

function matrixSearch(arr, subArr) {
    var Y1 = arr.length;
    var X1 = arr[0].length;
    var Y2 = subArr.length;
    var X2 = subArr[0].length;

    for (var startY = 0; startY <= Y1-Y2; startY++) {
        for (var startX = 0; startX <= X1-X2; startX++) {
            var found = true;
            for (var j = 0; j < Y2; j++) {
                for (var i = 0; i < X2; i++) {
                    if (arr[startY+j][startX+i] != subArr[j][i]) {
                        found = false;
                        break;
                    }
                }
                if (!found)
                    break;
            }
            if (found)
                return true;
        }
    }
    return false;
}

// ============================

function matrixSearch(bigMatrix,smallMatrix){
    var xindex;
    var yindex;
    var flag = false;
    for(var z=0; z<bigMatrix.length; z++){
        console.log(bigMatrix[z])
        if(bigMatrix[z].includes(smallMatrix[0][0])){
            flag = true;
            xindex = bigMatrix[z].indexOf(smallMatrix[0][0])
            yindex = z;
            for(var y = 0;x<smallMatrix.length;y++){
                for(var x = 0;x<smallMatrix[y].length;x++){
                    if(smallMatrix[y][x]!= bigMatrix[yindex+y][xindex+x]){
                        flag=false;
                    }
                }
            }
        }
        
    }
    console.log(xindex);
    console.log(yindex);
    return flag;
}