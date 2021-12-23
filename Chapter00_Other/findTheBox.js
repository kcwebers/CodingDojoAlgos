// say you have a collection of (x,y) points, so for example: [ [2,3], [1,5], [-1,6], [0,1] ] 
// (or whatever syntax you're comfortable with). basically, an array of arrays, where all of 
// the subarrays represent (x,y) coordinates.

// find the smallest box that will contain all of those (x,y) coordinates

// note that a box can be represented by exactly two coordinates: one coordinate 
// for its bottom left corner, and one coordinate for its top right corner. 
// The moment you have those two coordinates, you have all the information you need 
// to actually draw the box (whether it be on paper or in your head). so basically, 
// when i say "find the smallest box ... etc" I really just want you to find me the 
// coordinates of the boxes lower left and top right corner.

// function findSmallestBox(points) {

//     var x = [];
//     var y = [];

//     for(var i = 0 ; i < points.length ; i ++) {
//         x.push(points[i][0]);
//         y.push(points[i][1]);
//     }

//     x.sort();
//     y.sort();

//     return [[x[0], y[0]], [x[x.length-1], y[y.length-1]]];
// }

// console.log(findSmallestBox([ [2,3], [1,5], [-1,6], [0,1] ]));


// function findSmallestBox(points) {

//     var xmax = points[0][0];
//     var xmin = points[0][0];
//     var ymax = points[0][1];
//     var ymin = points[0][1];

//     for(var i = 0 ; i < points.length ; i ++) {
//         console.log(points[i][1]);
//         if(points[i][0] > xmax) {
//             xmax = points[i][0];
//         } else if(points[i][0] < xmin) {
//             xmin = points[i][0];
//         }
//         if(points[i][1] > ymax) {
//             ymax = points[i][1];
//         } else if(points[i][1] < ymin) {
//             ymin = points[i][1];
//         }
//     }


//     return [[xmin, ymin], [xmax, ymax]];
// }

// console.log(findSmallestBox([ [2,3], [1,5], [-1,6], [0,1] ]));

function findSmallestBox(points) {
    var xmin = points[0][0];
    var xmax = points[0][0];
    var ymin = points[0][1];
    var ymax = points[0][1];

    function findMinMax(val, min, max) {
        if(val < min) {
            min = val;
        } else if(val > max) {
            max = val;
        }
        return [min, max];
    }

    for(var i = 0 ; i < points.length ; i ++) {
        [xmin, xmax] = findMinMax(points[i][0],xmin, xmax);
        [ymin, ymax] = findMinMax(points[i][1],ymin, ymax);
    }
    return [[xmin, ymin], [xmax, ymax]];
}

console.log(findSmallestBox([ [2,3], [1,5], [-1,6], [0,1] ]));