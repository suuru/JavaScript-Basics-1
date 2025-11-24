// ===============================
// 🧩 JavaScript Object Methods Practice Sheet
// ===============================

console.log("=== OBJECT METHODS PRACTICE ===");

// 💠 CREATE OBJECTS
const person = { name: "John", age: 25 }; // Object literal
console.log("Original person:", person); //

// Object.create()
const proto = { greet() { console.log("Hello!"); } }; // prototype object
const user = Object.create(proto); // creates a new object with proto as its prototype
user.name = "Suuru";
console.log("Object.create:", user.name); // Suuru
user.greet(); // Hello!

// Object.assign()
const target = { a: 1 };// target object
const source = { b: 2 }; // source object
Object.assign(target, source);
console.log("Object.assign:", target); // { a:1, b:2 } // copies properties from source to target

// Object.keys()
console.log("Object.keys:", Object.keys(person)); // ["name","age"] // gets an array of the object's own property names

// Object.values()
console.log("Object.values:", Object.values(person)); // ["John",25] // gets an array of the object's own property values

// Object.entries()
console.log("Object.entries:", Object.entries(person)); // [["name","John"],["age",25]] // gets an array of [key, value] pairs

// Object.fromEntries()
const arr = [["country", "Nigeria"], ["continent", "Africa"]];
const objFromEntries = Object.fromEntries(arr); // converts an array of [key, value] pairs back into an object
console.log("Object.fromEntries:", objFromEntries); // { country: "Nigeria", continent: "Africa" } 

// Object.is() → strict comparison (better than === for special cases)
console.log("Object.is(25, 25):", Object.is(25, 25)); // true
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("NaN === NaN:", NaN === NaN); // false


// 💠 OBJECT CONTROL
const car = { brand: "Toyota", model: "Camry" };

// Object.preventExtensions()
Object.preventExtensions(car); // prevents adding new properties
car.year = 2020; // ❌ won't be added // ignored
console.log("preventExtensions:", car); // { brand: "Toyota", model: "Camry" } // year not added
console.log("isExtensible:", Object.isExtensible(car)); // false // checks if object is extensible

// Object.seal()
const user2 = { name: "Alice" };
Object.seal(user2);
user2.name = "Bob"; // ✅ allowed
delete user2.name; // ❌ not allowed
console.log("seal:", user2); // { name: "Bob" }
console.log("isSealed:", Object.isSealed(user2)); // true

// Object.freeze()
const frozen = { fruit: "Mango" };
Object.freeze(frozen);
frozen.fruit = "Banana"; // ❌ ignored
console.log("freeze:", frozen); // { fruit: "Mango" }
console.log("isFrozen:", Object.isFrozen(frozen)); // true


// 💠 MAP & SET
const map = new Map();
map.set("name", "Suuru");
map.set("age", 30);
console.log("Map.get('name'):", map.get("name")); // Suuru
console.log("Map.has('age'):", map.has("age")); // true

const set = new Set([1, 2, 2, 3]);
console.log("Set:", set); // Set(3) {1, 2, 3}
set.add(4);
set.delete(2);
console.log("After changes:", set); // Set(3) {1, 3, 4}


// 💠 WEAK COLLECTIONS
let obj = { name: "Suuru" };

const weakMap = new WeakMap();
weakMap.set(obj, "some value");
console.log("WeakMap has obj:", weakMap.has(obj)); // true

const weakSet = new WeakSet();
weakSet.add(obj);
console.log("WeakSet has obj:", weakSet.has(obj)); // true

// WeakRef (advanced: allows weak reference without preventing garbage collection)
let ref = new WeakRef(obj);
console.log("WeakRef deref:", ref.deref()); // { name: "Suuru" }


// 💠 SYMBOL
const id = Symbol("id");
const user3 = {
  name: "Suuru",
  [id]: 12345
};
console.log("Symbol property:", user3[id]); // 12345
console.log("Object keys (symbols hidden):", Object.keys(user3)); // ["name"]
console.log("Get symbol keys:", Object.getOwnPropertySymbols(user3)); // [Symbol(id)]


console.log("\n✅ Practice complete! Try editing each method to see different results!");
