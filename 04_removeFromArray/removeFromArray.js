const removeFromArray = function(array, ...arg) {

    return array.filter(element => !arg.includes(element));

}
// ...arg passes all the arguments into an array
// includes checks if this array contains the element, and returns true if the element is a match
//      return 'not true' with '!' 
// filter() returns a new array with elements that are 'true',
//      which is 'not a match in ...arg' in this case



// Do not edit below this line
module.exports = removeFromArray;
