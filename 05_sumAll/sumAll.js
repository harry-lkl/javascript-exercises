const sumAll = function(startNum, endNum) {
    //  function that takes 2 integers and returns the sum of every number between(and including):
    // sumAll(1,4) is 1+2+3+4 = 10
        // let sum = 0;
        // for loop from starting number to ending number inclusive
        // add the current number to sum
        // increment number by 1 each time
    let sum = 0;
    let smallNum = 0;
    let bigNum = 0;
        if (typeof startNum != 'number' || typeof endNum != 'number') {
            return 'ERROR';
        } else if  (startNum < 0 || endNum < 0) {
            return 'ERROR';
        } else if (startNum < endNum) {
            smallNum = startNum;
            bigNum = endNum;
        } else if (startNum > endNum) {
            smallNum = endNum;
            bigNum = startNum;
        } else {
            return 'how did you get here?';
        }

    for (i = smallNum; i <= bigNum;) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
