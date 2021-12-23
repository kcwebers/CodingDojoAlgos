const mazeStrs = [
    `
    *S**
    *  *
    *  E
    ****
    `,
    `
    *S**
    *  *
    * *E
    ****
    `,
    `
    **S*******************
    *  **********        *
    *              ***** *
    ********************E*
    `,
    `
    *********
    *     * *
    *     * *
    *     * *
    *S*****E*
    `,
    `
    *E*S*********
    *   *       *
    *   *   *   *
    * *    *    *
    *   *       *
    *   *  ***  *
    *        *  *
    *************
    `,
    `
    *S*********E*
    * *       * *
    *  *     *  *
    **  *   *  **
    * *  * *  * *
    *  *  *  *  *
    *   *   *   *
    *************
    `
]

const expected = [true, false, true, false, true, true];


// This method should return true if it's possible to make it from START to END,
// and false otherwise. You do not need to change anything about this method.
function canYouEscape(maze) {
    // Find the starting position (row, col). This is where the 'S' is located.
    let row, col;
    outer:
    for (let i = 0; i < maze.length; ++i) {
        for (let j = 0; j < maze[i].length; ++j) {
            if (maze[i][j] == 'S') {
                row = i;
                col = j;
                break outer;
            }
        }
    }

    // Create a 2D array of booleans of the same size as the maze array to help
    // keep track of the spots you've already visited. We initialize all
    // entries to be false because before we start the maze, we technically
    // haven't visited any spots of the maze.
    // console.log(row, col)
    let visited = new Array(maze.length).fill(0).map((_, i) => {
        return new Array(maze[i].length).fill(false);
    });
    // console.log(visited)

    return canYouEscapeHelper(maze, visited, row, col);
}


// You do not need to design a method that finds the quickest route from start
// to end - just whether or not we can make it through the maze.
function canYouEscapeHelper(maze, visited, row, col) {
    console.log(visited, row, col)
    // check to see if you're still in the matrix
    // check row spot first
    // then check col because col is dependent on row
    if(row > maze.length - 1 || row < 0 || col > maze[row].length - 1 || col < 0) {
        return false;
    }
    // check if wall is hit
    if(maze[row][col] == "*") {
        return false
    }
    // check if you've already checked the spot
    if(visited[row][col] == true) {
        return false
    }
    // check if you found the exit
    if(maze[row][col] == "E") {
        return true;
    }
    // set visited to true
    visited[row][col] = true;

    // return the results of the child checks
    return canYouEscapeHelper(maze, visited, row + 1, col) ||
    canYouEscapeHelper(maze, visited, row, col + 1) ||
    canYouEscapeHelper(maze, visited, row - 1, col) ||
    canYouEscapeHelper(maze, visited, row, col - 1);
}

// Given a maze string (seen above), this method will do following four things in order:
//   1. Split at the newlines to produce each row of the maze.
//   2. Remove the first and last lines because they are empty based on my formatting.
//      I purposely formated the maze strings this way to more easily align the walls.
//   3. Trim off any leading or trailing white space. Again, this is necessary because
//      of my formatting.
//   4. Finally, split each row into single characters, forming the separate columns
//      of the row. The output here is exactly the 2D array of the maze.
function convertToArr(mazeStr) {
    return mazeStr.split('\n')
                .slice(1, -1)
                .map(row => { return row.trim(); })
                .map(row => { return row.split(''); });
}

// These last two lines will run the canYouEscape method on all of the mazes I've
// created in the mazeStrs array. Note that it uses the method convertToArray to
// first convert the multiline string that defines the maze into a 2D-array
// formulation of the array, and then calls canYouEscape. The outputs of canYouEscape
// are stored in an array, results, using the map method.
const results = mazeStrs.map((mazeStr) => canYouEscape(convertToArr(mazeStr)));

// We then check to make sure that each result matches the expected output.
// A little hard to read, but I wanted to pack it into one line for brevity.
results.forEach((x, i) => {
    console.log(`Maze ${i} ${x === expected[i] ? 'passed' : 'failed'}.`)
});