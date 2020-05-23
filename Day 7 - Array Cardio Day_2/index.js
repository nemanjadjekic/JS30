// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
var some_arr = people.some(
  (born) => new Date().getFullYear() - born.year >= 19
);
console.log(some_arr);

// Array.prototype.every() // is everyone 19 or older?
var every_arr = people.every(
  (born) => new Date().getFullYear() - born.year >= 19
);
console.log(every_arr);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
var find_arr = comments.find((element) => element.id === 823423);
console.log(find_arr);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
var idx_find_arr = comments.findIndex((element) => element.id === 823423);
console.log(idx_find_arr);
comments.splice(idx_find_arr, 1);
console.log(comments);
