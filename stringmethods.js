var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";
var stringThree = "   Done now!    ";

// charAt()
// returns a character in a specified position
console.log(stringOne.charAt(1));

// charCodeAt()
// returns the unicode of a character at a specified index
console.log(stringOne.charCodeAt(1));

// concat()
// joins two or more strings and returns a new joined string
console.log(stringOne.concat(stringTwo));

// endsWith()
// checks whether a string ends with the specified character
console.log(stringOne.endsWith("learn"));

// fromCharCode()
// converts unicode values to characters
console.log(String.fromCharCode(114));

// includes()
// checks if a string includes the specified word
console.log(stringTwo.includes("end"));

// indexOf()
// returns the index of the first found specified value in a string
console.log(stringTwo.indexOf("end"));

// lastIndexOf()
// returns the index of the last found specified value in a string
console.log(stringTwo.lastIndexOf("end"));

// match()
// search a string for a match against a regular expression then return the matches
console.log(stringTwo.match(/end/g));

// repeat()
// return a new string with a specified number of copies of an existing string
console.log(stringTwo.repeat(3));

// replace()
// searches a string for a  specified value or expression and returns a new string where the specified values are
console.log(stringTwo.replace(/end/g, "END"));

// search()
// search a string for a specified value and return the position
console.log(stringTwo.search("end"));

// slice()
// extract part of the string and return a new string
console.log(stringTwo.slice(2, 4));
// inclusive of 2 and exxclusive of 4

// split()
// split a string into an array of sub-strings
console.log(stringOne.split(" "));

// startsWith()
// checks whether a string starts with the specified character
console.log(stringOne.startsWith("free"));

// substr()
// extract characters from a string beginning at a specified start position and through the number of characters
console.log(stringTwo.substr(2, 4));
// start from 2 and count 4 characters

// substring()
// extract characters from a string between two specified indexes
console.log(stringTwo.substring(2, 4));

// toLowerCase()
// makes all the letters lowercase in a string
console.log(stringOne.toLowerCase());

// toUpperCase()
// make all the letters uppercase in a string
console.log(stringOne.toUpperCase());

// trim()
// remove spaces from either side of the string
console.log(stringThree.trim());
