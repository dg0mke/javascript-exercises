const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (startNum < 0 || endNum < 0 || Number.isInteger(startNum) === false || Number.isInteger(endNum) === false || Number.isNaN(startNum) || Number.isNaN(endNum)) {
        return "ERROR";
    } else {
        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                sum += i;
            }
        } else if (startNum > endNum) {
            for (let i = startNum; i >= endNum; i--) {
                sum += i;
            }
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
