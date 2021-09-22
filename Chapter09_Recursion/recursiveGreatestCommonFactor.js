// Greatest Common Factor
// Given two integers, create recursiveGreatestCommonFactor(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// 1) if num1 === num2, that number is the greatest common factor;
// 2) if a>b, then you can remove b from a, which gets you closer to the GCF;
// 3) if b>a, then you can remove a from b, which gets you closer to the GCF;
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654) .

function recursiveGreatestCommonFactor(num1,num2){
    if (num1 > num2) {    
        return recursiveGreatestCommonFactor(num1-num2, num2);
    } else if (num2 > num1) {
        return recursiveGreatestCommonFactor(num1, num2-num1)
    }
    else {
        return num1
    }
}
console.log(recursiveGreatestCommonFactor(50,180)); // 10
console.log(recursiveGreatestCommonFactor(7,35)); // 7
console.log(recursiveGreatestCommonFactor(65,95)); // 5
console.log(recursiveGreatestCommonFactor(123456,987654)); // 6
console.log(recursiveGreatestCommonFactor(102,1000)); // 2
console.log(recursiveGreatestCommonFactor(7,13)); // 1

// ======================================
// Student Solutions
// ======================================

function recursiveGreatestCommonFactor(num1,num2){
    // if b is equal to 0 we return a
    if (num2 == 0){
        return num1;
    }
    // does the math
    return recursiveGreatestCommonFactor(num2, num1 % num2);
}
console.log(recursiveGreatestCommonFactor(50,180)); // 10
console.log(recursiveGreatestCommonFactor(7,35)); // 7
console.log(recursiveGreatestCommonFactor(65,95)); // 5
console.log(recursiveGreatestCommonFactor(123456,987654));
console.log(recursiveGreatestCommonFactor(102,103));
console.log(recursiveGreatestCommonFactor(7,13));