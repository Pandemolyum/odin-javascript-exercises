const sumAll = function(a, b) {
    if ((a < -1 || b < -1) ||
        (a % 1 !== 0 || b % 1 !== 0) ||
        (typeof a !== "number" || typeof b !== "number")) {
            return "ERROR";
        }
    
    let sum = 0;

    for (i = Math.min(a,b); i <= Math.max(a,b); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
