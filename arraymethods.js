// toString()
// convert an array to a string
let names = ["Danny", "Joe", "Sarah", "Molly"];
let stringNames = names.toString();
console.log(stringNames);

// join()
// separate using the specified seperator
names = ["Danny", "Joe", "Sarah", "Molly"];
stringNames = names.join(" and ");
console.log(stringNames);

// concat()
// join two  or more arrays
names = ["Danny", "Joe", "Sarah", "Molly"];
let names2 = ["John", "Tom"];

let joined = names.concat(names2);
console.log(joined);

// splice()
// remove elements or add new elements in an array
names = ["Danny", "Joe", "Sarah", "Molly"];
names.splice(1, 2, "Bill", "Bob");
console.log(names);

// slice()
// not including the last index
// does not change the orginal array
names = ["Danny", "Joe", "Sarah", "Molly"];
let slice = names.slice(1, 3);
console.log(slice);

// indexOf()
// find the index of a certain value in the array
names = ["Danny", "Joe", "Sarah", "Molly"];
let index = names.indexOf("Sarah");
console.log(index);

// lastIndexOf()
// find the last index of a certain value in the array
names = ["Danny", "Joe", "Sarah", "Molly", "Joe"];
index = names.lastIndexOf("Joe");
console.log(index);

// flat()
// show the values contained within a nested array
let nums = [1, 2, 3, 4, [5, 6, [7, 8]], 9];
let flat = nums.flat(2);
console.log(flat);

// forEach()
//  a higher order array method that accepts functions as arguments
// loops over each element in the array and each time it calls back the call back function which accesses the current element
names = ["Danny", "Joe", "Sarah", "Molly", "Joe"];
names.forEach((n) => {
  console.log(n);
});

// getting the length of the array using forEach
names = ["Danny", "Joe", "Sarah", "Molly", "Joe"];
let count = 0;
names.forEach((n) => {
  count++;
});
console.log(count);

// Map()
// loops over each element in the array and executes a call back function where we have access to the current element and return what we instruct
nums = [1, 2, 3, 4, 5, 6];
let doubled = nums.map((n) => n * 2);
console.log(doubled);

// filter()
// create a new array after filtering elements with a specific characteristic
let posts = [
  { title: "post 1", author: "Dan" },
  { title: "post 2", author: "Bill" },
  { title: "post 3", author: "Sarah" },
  { title: "post 4", author: "Dan" },
];
let dansPosts = posts.filter((p) => p.author === "Dan");
console.log(dansPosts);

// reduce()
nums = [1, 2, 3, 4, 5, 6];
let total = nums.reduce((total, currentVal) => total + currentVal);
console.log(total);

// using reduce to find the max value of the array
total = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(total);

// some()
// check if values meet a condition and returns true or false
nums = [1, 2, 3, 4, 5, 6];
let isGreaterThan5 = nums.some((n) => n > 3);
console.log(isGreaterThan5);

// every()
// looks through the array and if every single number meets the specified condition it returns  true
nums = [1, 2, 3, 4, 5, 6];
let allGreaterThan0 = nums.every((n) => n > 0);
console.log(allGreaterThan0);

// find()
// find and display an element in the array with a particular value
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
];
let mayo = stock.find((s) => s.item === "mayo");
console.log(mayo);

// findIndex()
// find the index of an element in the array
stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
];
mayo = stock.findIndex((s) => s.item === "mayo");
console.log(mayo);

// sort()
// arranges elements in an array in a particular order
names = ["Sarah", "Joe", "Danny", "Molly"];
let alph = names.sort();
console.log(alph);
