// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations



//     // print and then return the data you collected
// }

function generateCoinChange(input) {
    input = Math.floor(input * 100);
    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }


    while(input > 0) {
        if(input >= 25) {
            input -= 25;
            change['quarters'] += 1;
        } else if(input >= 10) {
            input -= 10;
            change['dimes'] += 1;
        } else if(input >= 5) {
            input -= 5;
            change['nickels'] += 1;
        } else {
            change['pennies'] = input
            
        }
    }
    // change['quarters'] = Math.floor(input/25); // still getting remainder of input amount / 25
    // input = input % 25; // (%) modulus gives us the remainder after dividing
    // change['dimes'] = Math.floor(input/10);
    // input = input % 10;
    // change['nickels'] = Math.floor(input/5);
    // input = input % 5;
    // change['pennies'] = input

    return change
}


console.log(generateCoinChange(0.77))