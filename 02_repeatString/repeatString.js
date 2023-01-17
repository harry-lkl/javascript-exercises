const repeatString = function(str, num) {
    let outputString = '';
    for (let i = 0; i <= num - 1; i++) {
        outputString += str;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
