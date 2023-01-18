//  Create a function that determines whether or not a given year is a leap year.
//  Leap years are determined by the following rules:
    //  Leap years are years divisible by four (like 1984 and 2004).
    //  However, years divisible by 100 are not leap years (such as 1800 and 1900)
    //      unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

// the year has to be divisible by 4 but not divisible by 100, or divisible by 400

const leapYears = function(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

//  hella bloated:
/*     const divisible4 = year % 4 === 0 ? true : false;
    const divisible100 = year % 100 === 0 ? true : false;
    const divisible400 = year % 400 === 0 ? true : false;

    if (divisible4 === true && divisible100 === false){
        return true;
    } else if (divisible400 === true) {
        return true;
    } else if (!divisible4 === true) {
        return false;
    } else if (divisible100 === true) {
        return false;
    } else {
        return 'how did you get here'
    } */

//  doesn't work with year 1600:
/* const leapYears = function(year) {
    if (year % 4 === 0 || year % 400 === 0) {
        if (year % 100 === 0) {
            return false;
        } else {
            return true;
        }
    } else if (year % 4 !== 0) {
        return false;
    } else {
        return 'how did you get here'
    } */


/*     if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else if (year % 4 !== 0) {
        return false;
    } else {
        return 'how did you get here';
    } */

// Do not edit below this line
module.exports = leapYears;
