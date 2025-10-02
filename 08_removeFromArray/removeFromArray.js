const removeFromArray = function(arr, ...blacklist) {
    for (item of blacklist) {
        arr = arr.filter((num) => num !== item);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
