// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// 1) if num1 === num2, that number is the greatest common factor;
// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;
// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand recursiveGreatestCommonFactor’s reach. You should be able to compute recursiveGreatestCommonFactor(123456,987654) .

function recursiveGreatestCommonFactor(num1, num2){
    // your code here
}

console.log(recursiveGreatestCommonFactor(50, 180)); // 10
console.log(recursiveGreatestCommonFactor(7, 35)); // 7
console.log(recursiveGreatestCommonFactor(65, 95)); // 5