// ===============================
// 🧩 JavaScript Array Methods Practice Sheet
// ===============================

// 💠 CREATE ARRAYS
const fruits = ["apple", "banana", "cherry"];
console.log("Original:", fruits);

// new Array()
const arr1 = new Array(3);
console.log("new Array(3):", arr1);

// Array.of()
const arr2 = Array.of(1, 2, 3);
console.log("Array.of:", arr2); //Creates an array from the arguments you give it.

// Array.from()
const arr3 = Array.from("Hi");
console.log("Array.from:", arr3); //Creates an array from something that looks like or acts like an array (like a string or Set).

// at()
console.log("fruits.at(1):", fruits.at(1)); // banana
console.log("fruits.at(-1):", fruits.at(-1)); // cherry 
//Gets the item at a specific index (can also use negative numbers for the end).


// 💠 COMBINE & CHECK
const a = [1, 2];
const b = [3, 4];

console.log("concat:", a.concat(b)); // [1,2,3,4] //Combines two or more arrays.
console.log("includes:", fruits.includes("apple")); // true //Checks if an array contains a specific item. 
console.log("indexOf:", fruits.indexOf("banana")); // 1 //Gets the index of a specific item.
console.log("lastIndexOf:", ["a", "b", "a"].lastIndexOf("a")); // 2 //Gets the last index of a specific item.
console.log("isArray:", Array.isArray(fruits)); // true //Checks if a value is an array.


// 💠 FILTERING & FINDING
const numbers = [5, 10, 15, 20];
console.log("filter > 10:", numbers.filter(n => n > 10)); // [15, 20] //Creates a new array with items that pass a test.
console.log("find > 10:", numbers.find(n => n > 10)); // 15 //Finds the first item that passes a test.
console.log("findIndex > 10:", numbers.findIndex(n => n > 10)); // 2 //Finds the index of the first item that passes a test. 
console.log("every > 0:", numbers.every(n => n > 0)); // true //Checks if all items pass a test.
console.log("some > 18:", numbers.some(n => n > 18)); // true //Checks if at least one item passes a test.


// 💠 LOOPING & MAPPING
const nums = [1, 2, 3];
nums.forEach(n => console.log("forEach:", n)); // 1,2,3 
console.log("map ×2:", nums.map(n => n * 2)); // [2,4,6]


// 💠 REDUCE METHODS
const sum = [1, 2, 3, 4].reduce((total, n) => total + n, 0); 
console.log("reduce sum:", sum); // 10

const rightReduce = ["a", "b", "c"].reduceRight((acc, x) => acc + x);
console.log("reduceRight:", rightReduce); // cba


// 💠 MODIFYING ARRAYS
let arr = [1, 2, 3];
arr.fill(0);
console.log("fill(0):", arr); // [0,0,0]

arr = [1, 2, 3];
arr.reverse();
console.log("reverse:", arr); // [3,2,1]

arr = [1, 2];
arr.push(3);
console.log("push:", arr); // [1,2,3]
arr.pop();
console.log("pop:", arr); // [1,2]

arr = [1, 2, 3];
arr.shift();
console.log("shift:", arr); // [2,3]
arr.unshift(0);
console.log("unshift:", arr); // [0,2,3]


// 💠 SLICE, SPLICE, SORT
const sliced = [1, 2, 3, 4].slice(1, 3);
console.log("slice(1,3):", sliced); // [2,3]

const spliced = [1, 2, 3, 4];
spliced.splice(1, 2, "a", "b");
console.log("splice(1,2,'a','b'):", spliced); // [1,"a","b",4]

const sorted = [3, 1, 2].sort();
console.log("sort:", sorted); // [1,2,3]


// 💠 STRING CONVERSIONS
console.log("join('-'):", ["a", "b", "c"].join("-")); // "a-b-c"
console.log("toString():", [1, 2, 3].toString()); // "1,2,3"


// 💠 NEWER SAFE METHODS (ES2023+)
const nums2 = [1, 2, 3];
console.log("toReversed:", nums2.toReversed()); // [3,2,1]
console.log("toSorted:", [3, 1, 2].toSorted()); // [1,2,3]
console.log("toSpliced:", [1, 2, 3].toSpliced(1, 1)); // [1,3]
console.log("with:", [10, 20, 30].with(1, 99)); // [10,99,30]


// 💠 FLATTENING
console.log("flat(2):", [1, [2, [3]]].flat(2)); // [1,2,3]


// 💠 ITERATORS
const arrX = ["a", "b", "c"];
console.log("keys:", [...arrX.keys()]); // [0,1,2]
console.log("values:", [...arrX.values()]); // ["a","b","c"]
console.log("entries:", [...arrX.entries()]); // [[0,"a"],[1,"b"],[2,"c"]]


console.log("\n✅ Practice complete! Try editing each section to explore more!");


// 💠 DESTRUCTURING ARRAYS
const fruits = ["apple", "banana", "orange"];//Get the first two fruits into variables first and second.

const [first, second] = fruits;

const colors = ["red", "green", "blue"];//Get the first and third colors into variables primary and tertiary, skipping the second color.

const [one, , three]= colors;

const user = { name: "Suuru", age: 30 };//Extract properties from an object

const {name, age}= user;

const product = { id: 1, price: 500 };//Extract properties and rename them

const { price: cost } = product;

const person = { name: "Ada" };//Provide default values while destructuring

const { name, country="unknown"} = person;//Extract name and put default value country = "Unknown".


const nums = [1, 2, 3, 4];

const [first, ...others] = nums;//Get the first number as head and the rest as tail using rest operator.

const settings = { 
  theme: "dark",
  language: "en",
  mode: "auto"
}; //Use rest with object destructuring

const {themes, ...otherSettings} = settings;

function greet({ name })  {
  console.log(`Hello ${name}`);
} //Destructure inside a function parameter

greet({ name: "Suuru" });

const data = {
  user: {
    id: 10,
    role: "admin"
  }
};  //Nested destructuring, Extract role from inside user

const { user: { role } }  = data;