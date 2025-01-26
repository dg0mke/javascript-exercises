const reverseString = function(string) {
    const array = string.split("");
    const newString = array.reverse().join("");

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
