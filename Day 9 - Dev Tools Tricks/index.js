const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string!", "💩");

// Styled
//console.log("%c I am some great text", "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue");

// warning!
console.warn("Oh no!");

// Error :|
console.error("Naaah!");

// Info
console.info("This is a info!");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "This is wrong!");

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("dog");
console.count("dog");
console.count("cat");
console.count("cat");
console.count("fish");
console.count("cat");
console.count("fish");
console.count("dog");
console.count("dog");
console.count("dog");

// timing
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });

// table
console.table(dogs);
