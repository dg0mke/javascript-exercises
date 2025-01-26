const removeFromArray = function(array, ...args) {
    const removedElements = [...args];
    const newArray = array.filter(element => !removedElements.includes(element));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
