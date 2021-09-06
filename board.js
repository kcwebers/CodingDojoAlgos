// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// multiply input by 100 : 3.21 == 321

// take new number (321) and divide by 25 to get the number of quarters
// make sure to round down to get a whole number
// subtract the (# of quarters * 25) from the overall input # and then check the next denomination
// repeat for different denominations
// print and then return the data you collected


function generateCoinChange(input) {
    input *= 100;

    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }

    change['quarters'] = Math.floor(input/25)
    input = input % 25 // gives you the remainder after dividing

    change['dimes'] = Math.floor(input/10)
    input = input % 10 // gives you the remainder after dividing

    change['nickels'] = Math.floor(input/5)
    input = input % 5 // gives you the remainder after dividing

    change['pennies'] = input
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies

function generateCoinChange(input) {
    input *= 100;

    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }

    change['quarters'] = Math.floor(input/25)
    input -= change['quarters']*25


    change['dimes'] = Math.floor(input/10)
    input -= change['dimes']*10

    change['nickels'] = Math.floor(input/5)
    input -= change['nickels']*5

    change['pennies'] = input
    
    return change
}

console.log(generateCoinChange(0.77))
console.log(generateCoinChange(2.85))
console.log(generateCoinChange(4.67))
