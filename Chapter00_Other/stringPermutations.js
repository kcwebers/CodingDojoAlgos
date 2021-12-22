// return if 2 strings are permutations of eachother (true/false)
function checkPermutation(str1, str2) {
    if (str1.length != str1.length) {
        return false;
    } 
    const strOne = str1.split('').sort().join('');
    const strTwo = str2.split('').sort().join('');

    return strOne === strTwo;
}