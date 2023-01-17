const reverseString = function(str) {
    // split string into array and save into a constant
    // reverse array
    // join and return the array
    const wordArray = str.split("");
    wordArray.reverse();
    return wordArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
