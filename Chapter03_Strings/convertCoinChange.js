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
    input = input * 100;

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

// ============================
// Students' Solutions
// ============================

function generateCoinChange(input) {

    // option #2 for storing results
    change = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0,
    }

    let convertedInput = input * 100;
    console.log(convertedInput)
    while (convertedInput > 0) {
        if (convertedInput - 25 >= 0) {
            change['quarters'] += 1
            convertedInput -= 25
        } else if (convertedInput - 10 >= 0) {
            change['dimes'] += 1
            convertedInput -= 10
        } else if (convertedInput - 5 >= 0) {
            change['nickels'] += 1
            convertedInput -= 5
        } else if (convertedInput - 1 >= 0) {
            change['pennies'] += 1
            convertedInput -= 1
        }
        // if (convertedInput == 0) {
        //     break;
        // }
        console.log(convertedInput)
    }
    return change;
}

console.log(generateCoinChange(0.77))

// ================================================ Modulus answer!

function generateCoinChange(input) {
    // object
        change = {
            'quarters': 0,
            'dimes': 0,
            'nickels': 0,
            'pennies': 0
        }
    
        input *= 100
    
        change['quarters'] = Math.floor(input / 25)
        input = input % 25

        change['dimes'] = Math.floor(input / 10)
        input = input % 10

        change['nickels'] = Math.floor(input / 5)
        input = input % 5

        change['pennies'] = Math.floor(input / 1)
        input = input % 1
    
        return change
    }
    
    console.log(generateCoinChange(3.00))
    console.log(generateCoinChange(4.17))
    console.log(generateCoinChange(0.77))

// ================================================

const generateCoinChange = input => {
    let output = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0,
    }
    output.quarters = Math.floor(input/25)
    var remaining = input % 25

    output.dimes = Math.floor(remaining/10)
    var remaining = remaining % 10

    output.nickles = Math.floor(remaining/5)
    var remaining = remaining % 5

    output.pennies = remaining
    return output
};

console.log(generateCoinChange(76);

// ================================================

function generateCoinChange(input) {
    // your code here
    // Input already has a value so no input = 0
    var coins = [0, 0, 0, 0] // 0, 0, 0, 0 quarters dimes Nickels pennies

    // input = input - .25 (Quarters)
    // for( input=1.23; input>.25; input=input-.25) -> 1.23 -> .98 -> .73 -> .48 -> .23
    for ( input; input >= .25; input -= .25 ) {
        coins[0] = coins[0] + 1  // coins[0] += 1
    }
    // input = input - .10 (dimes)
    // for(input=.23; input > .10; input = input - .10) -> .23 -> .13 -> .03
    for ( input; input >= .10; input -= .10 ) {
        coins[1] = coins[1] + 1  // coins[1] += 1
    }

    // input = input - .05 (Nickels)
    // for(input=.03; input > .05; input = input - .05) -> .03 skips the loop
    for ( input; input >= .05; input -= .05 ) {
        coins[2] = coins[2] + 1  // coins[2] += 1
    }

    // input = input - .01 (pennies)
    // for(input=.03; input > .01; input = input - .01) -> .03 -> .02 -> .01 -> .00
    for ( input; input >= .01; input -= .01 ) {
        coins[3] = coins[3] + 1  // coins[3] += 1
    }

    var str = " ";

    if( coins[0] == 1 ) {
        str = str + coins[0] + " quarter, "
    } else if( coins[0] > 1 ) {
        str = str + coins[0] + " quarters, "
    } 
    if( coins[1] == 1 ) {
        str = str + coins[1] + " dime, "
    } else if( coins[1] > 1 ) {
        str = str + coins[1] + " dimes, "
    } 
    if( coins[2] == 1 ) {
        str = str + coins[2] + " nickel, "
    } else if( coins[2] > 1 ) {
        str = str + coins[2] + " nickels,  "
    } 
    if( coins[3] == 1 ) {
        str = str + coins[3] + " penny, "
    } else if( coins[3] > 1 ) {
        str = str + coins[3] + " pennies, "
    } 

    return str.substring(0, str.length-2);
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies


//Solution without the use of any array Methods or built in functions like Math.floor: 

// ================================================

function getCount(divider, number){// returns an integer of the most possible whole times the divider can go into the number
    var count = 0

    while(divider <= number){
        count++
        number -= divider
    }
    return count
}

function generateCoinChange(float) {
    //convert cents to whole number
    float = float * 100
    var output = ""
    
    if(float/25 >= 1){ //finding the amount of quarters used. 
            var quarters = getCount(25, float)
            float = float%25
            if(quarters > 1){ // checking for plurals
                end = float ? "s, ": "s"
            }
            else{
                end =  float ? ", ": ""
            }
            output += `${quarters} quarter${end}`
        }
     if(float/10 >= 1){ // finding the amount of dimes
            var dimes = getCount(10, float)
            float = float%10
            if(dimes > 1){
                end = float ? "s, ":"s"
            }
            else{
                end =  float ? ", ":""
            }
            output += `${dimes} dime${end}`
        }
    if(float/5 >= 1){ // finding the amount of nickels
            var nickels = 1
            float = float%5
            if(float > 0){
                end =  ", "
            }
            else{
                end =  ""
            }
            output += `${nickels} nickel${end}`
        }
    if(float > 0){
            var pennies = float
            float = 0
            if(pennies > 1){
                end = 'ies'
            }
            else{
                end = 'y'
            }
            output += `${pennies} penn${end}`// adds pennies to the array 
        }
    
    return output 
    
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies
console.log(generateCoinChange(0.41)) // 1 quarter, 1 dime, 1 nickel, 1 penny

// ================================================

function generateCoinChange(input) {
    input *= 100;
    var coins =[];
    var output="";

    coins["quarters"] = Math.floor(input/25);
    input -= coins["quarters"]*25;

    coins["dimes"] = Math.floor(input/10);
    input -= coins["dimes"]*10;

    coins["nickels"] = Math.floor(input/5);
    input -= coins["nickels"]*5;

    coins["pennies"] = input;

    for (x in coins) {
        if(coins[x] != 0) {
            output += coins[x] + " " + x + ", ";
        }
    }
    
    return output.substring(0,output.length-2);
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies

// ================================================

function generateCoinChange(pennies) {
    pennies=pennies*100
    quarters=0
    dimes=0
    nickel=0
    quarters=Math.floor(pennies/25)
    pennies=pennies- quarters*25
    if(pennies >= 10){
      dimes=Math.floor(pennies/10)
      pennies=pennies-dimes*10
    }
    if(pennies >=5){
      nickel=Math.floor(pennies/5)
      pennies=pennies-nickel*5
    }
    return quarters + " quarters, "+dimes+" dimes, "+nickel+" nickel, " +pennies + " pennies"
  }
  
  console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
  console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
  console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies

  
// ================================================

function generateCoinChange(input) {
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    input*=100;
    quarter = Math.floor(input/25);
    console.log(quarter)
    input -= quarter*25;
    dime = Math.floor(input/10);
    input -= dime*10;
    nickel = Math.floor(input/5);
    input -= nickel*5;
    penny = input;
    return (`${quarter} quarters, ${dime} dimes, ${nickel} nickels, ${penny} pennies`);
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies

// ================================================

function generateCoinChange(input) {
    let result = "";
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    input *= 100;

    while (input >= 25) {
        input -= 25;
        quarters++
    }
    if (quarters) {
        result += `${quarters} ${quarters > 1 ? 'quarters' : 'quarter'}${input === 0 ? '':', '}`
    }
    while (input >= 10) {
        input -= 10;
        dimes++
    }
    if (dimes) {
        result += `${dimes} ${dimes > 1 ? 'dimes' : 'dime'}${input === 0 ? '':', '}`
    }
    while (input >= 5) {
        input -= 5;
        nickels++
    }
    if (nickels) {
        result += `${nickels} ${nickels > 1 ? 'nickels' : 'nickel'}${input === 0 ? '':', '}`
    }
    while (input > 0) {
        input -= 1;
        pennies++
    }
    if (pennies) {
        result += `${pennies} ${pennies > 1 ? 'pennies' : 'penny'}${input === 0 ? '':', '}`
    }

    return result;
}

// ================================================

function generateCoinChange(float) {
    //convert cents to whole number
    float = float * 100
    var output = []
    
    while(float){   //Runs the loop until float =0  for no more change possible
        if(float/25 >= 1){ //finding the amount of quarters used. 
            var quarters = Math.floor(float/25)
            float = float%25
            output.push(`${quarters} quarters`)
        }
        else if(float/10 >= 1){ // finding the amount of dimes
            var dimes = Math.floor(float/10)
            float = float%10
            output.push(`${dimes} dimes`)
        }
        else if(float/5 >= 1){ // finding the amount of nickels
            var nickels = Math.floor(float/5)
            float = float%5
            output.push(`${nickels} nickels`)
        }
        else{
            var pennies = float
            float = 0
            output.push(`${pennies} pennies`)// adds pennies to the array 
        }
    }
    return output.join(", ") //Joins the output arrary with correct formatting. 
    
}

console.log(generateCoinChange(0.77)) // 3 quarters, 2 pennies
console.log(generateCoinChange(2.85)) // 11 quarters, 1 dime
console.log(generateCoinChange(4.57)) // 18 quarters, 1 nickel, 2 pennies