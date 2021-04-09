// Matrix Search

// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.

// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];

function matrixSearch(arr, subArr) {
    let corner = sub[0][0];
    let found = false;

    // only compare corner where sub would fit inside arr
    for (let i = 0; i <= arr.length - sub.length; i++){
        for (let j = 0; j <= arr[i].length - sub[0].length; j++){
            if (arr[i][j] == corner){
                found = true;

                // as soon as we match corner, start checking adjacent values
                // we have a match at arr[i][j] with sub[k=0][l=0]
                for (let k = 0; k < sub.length; k++){
                    for (let l = 0; l < sub[k].length; l++){

                        // only check if valid index in arr
                        if (i+k < arr.length &&  j+l < arr[i].length){
                            if (sub[k][l] !== arr[i+k][j+l]){
                                found = false;
                                break;
                            }
                        }
                        // if sub would extend past boundaries of matrix, reset found to false
                        else {
                            found = false;
                        }
                    }
                }
                // as soon as we find a complete match, return true
                if (found){
                    return true;
                }
            }
        }
    }
    return found;
}

//Austin Hamilton

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

//Robert Tija

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

// Drew Petty 

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