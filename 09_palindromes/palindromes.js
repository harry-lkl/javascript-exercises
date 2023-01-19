// a function that determines whether or not a given string is a palindrome
    // take in a string
    // split string into an array
    // reverse the array
    // join the array and store in a const
    // compare the to strings

const palindromes = function (str) {
    const cleanString = str.match(/[a-z]/gi).join('').toLowerCase();
    const reversedString = str.match(/[a-z]/gi).reverse().join('').toLowerCase();
    return reversedString === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
