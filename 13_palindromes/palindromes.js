const palindromes = function (str) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    str = str.toLowerCase().split("").filter(c => alphanumeric.includes(c)).join("");
    let reverse = str.split("").reverse().join("");
    return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
