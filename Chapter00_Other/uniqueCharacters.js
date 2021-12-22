// returns if a string is all unique characters or not
function isUnique(str) {
    const set = new Set(str);
    // console.log(str.length, set.size)
    return str.length == set.size;
}