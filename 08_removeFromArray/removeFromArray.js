const removeFromArray = function(arr, num) {
    for (let i = 1; i < arguments.length; i++) {
        arr = arr.filter(x => x !== arguments[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
