// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var filter_arr = inventors.filter(
  (inventor) => inventor.year > 1500 && inventor.year < 1600
);
//console.log(filter_arr);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
var map_arr = inventors.map((inventor) => [inventor.first, inventor.last]);
//console.log(map_arr);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var sort_arr = inventors.sort((a, b) => a.year - b.year);
//console.log(sort_arr);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
var reduce_arr = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);
//console.log(reduce_arr);

// 5. Sort the inventors by years lived
var years_lived = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year)
);
//console.log(years_lived);

// 6. Sort Exercise
// Sort the people alphabetically by last name
/*var alpha = people.sort(function(lastOne, nextOne){
  var[aLast, aFirst] = lastOne.split(", ");
  var[bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? -1 : 1;
});*/
var alpha = people.sort((lastOne, nextOne) =>
  lastOne.split(", ") > nextOne.split(", ") ? -1 : 1
);
//console.log(alpha);

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
