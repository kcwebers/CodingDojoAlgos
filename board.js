// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

function generateCoinChange(input) {

    // option #1 for storing results
    quarters = 0
    dimes = 0
    nickels = 0
    pennies = 0

    // option #2 for storing results
    change = {
        'quarters' : 0,
        'dimes' : 0,
        'nickels' : 0,
        'pennies' : 0,
    }

    // input * 100 == a number without decimal places
    // for example 3.21 * 100 == 321
    // now quarters would be 25 instead .25

    // loop through input
    while(input > 0) {
        // if you can take 25 from input, that means a quarter factors in, so we increase quarter count
        if(input - 25 > 0) {
            change['quarters'] += 1
            // remove the counted quarter from the input and continue checking remaining amount (loop again)
            input -= 25
        }
    }

    // try and modify and use division or modulus instead!

    // return a result that shows the # of each denomination
}

console.log(generateCoinChange(0.77))