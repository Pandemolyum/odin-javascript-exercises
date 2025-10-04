const fibonacci = function(n) {
    if (n == 0) {return 0} 
    else if (n < 0) {return "OOPS"}

    let i = 1;
    let num = 1;
    let prevNum = 0;
    let storedNum;

    while (n != i) {
        storedNum = num;
        num = prevNum + num;
        prevNum = storedNum;
        i++;
    }

    return num;
};

// Do not edit below this line
module.exports = fibonacci;
