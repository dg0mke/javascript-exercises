const palindromes = function (string) {
    const alphanum = "123567890qwertyuiopasdfghjklzxcvbnm";

    const newString = string
        .toLowerCase()
        .split("")
        .filter(char => alphanum.includes(char))
        .join("");

    const reversedString = newString
        .split("")
        .reverse()
        .join("");

    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
