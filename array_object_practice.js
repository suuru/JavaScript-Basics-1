// ==============================
// 🧱 OBJECT PRACTICE QUESTIONS
// ==============================

// 1️⃣ Create an Object
const person = { name: "Suuru", age: 30, country: "Nigeria" };
console.log(person.name); // ✅ Output: Suuru


// 2️⃣ Add a New Property
person.email = "suuru@example.com";
console.log(person);


// 3️⃣ Delete a Property
delete person.age;
console.log(person);


// 4️⃣ Loop Through Keys
console.log(Object.keys(person)); // ✅ Output: [ 'name', 'country', 'email' ]


// 5️⃣ Loop Through Values
console.log(Object.values(person)); // ✅ Output: [ 'Suuru', 'Nigeria', 'suuru@example.com' ]


// 6️⃣ Loop Through Key-Value Pairs
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}


// 7️⃣ Merge Two Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // ✅ Output: { a: 1, b: 2, c: 3, d: 4 }


// 8️⃣ Freeze an Object
const frozen = Object.freeze({ name: "Suuru", role: "Admin" });
frozen.name = "Changed"; // ❌ Won’t change
console.log(frozen); // ✅ Output: { name: "Suuru", role: "Admin" }


// 9️⃣ Seal an Object
const sealed = Object.seal({ city: "Lagos", age: 30 });
sealed.city = "Abuja"; // ✅ Can update
delete sealed.age; // ❌ Cannot delete
console.log(sealed);


// 🔟 Convert Entries Back to Object
const entries = [["name", "Suuru"], ["age", 30]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);


// ==============================
// 🍱 ARRAY PRACTICE QUESTIONS
// ==============================

// 1️⃣ Create an Array
const fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // ✅ Output: banana


// 2️⃣ Add and Remove Items
fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);


// 3️⃣ Combine Arrays
const a = [1, 2];
const b = [3, 4];
const combined = a.concat(b);
console.log(combined); // ✅ Output: [1, 2, 3, 4]


// 4️⃣ Filter Items
const numbers = [5, 10, 15, 20];
const greaterThan10 = numbers.filter(num => num > 10);
console.log(greaterThan10); // ✅ [15, 20]


// 5️⃣ Map Values
const doubled = [1, 2, 3].map(x => x * 2);
console.log(doubled); // ✅ [2, 4, 6]


// 6️⃣ Find an Element
const found = [3, 7, 8, 10].find(x => x % 2 === 0);
console.log(found); // ✅ 8


// 7️⃣ Sort Numbers
const nums = [3, 1, 4, 2];
nums.sort((a, b) => a - b);
console.log(nums); // ✅ [1, 2, 3, 4]


// 8️⃣ Reduce to a Sum
const sum = [1, 2, 3, 4].reduce((total, n) => total + n, 0);
console.log(sum); // ✅ 10


// 9️⃣ Check a Condition
const allEven = [2, 4, 6].every(n => n % 2 === 0);
console.log(allEven); // ✅ true


// 🔟 Reverse an Array
const reversed = [1, 2, 3, 4].toReversed(); // safer new method
console.log(reversed); // ✅ [4, 3, 2, 1]


// 11️⃣ Slice and Splice
const sliceArr = [1, 2, 3, 4, 5].slice(1, 3);
console.log(sliceArr); // ✅ [2, 3]

const spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(1, 2);
console.log(spliceArr); // ✅ [1, 4, 5]


// 12️⃣ Convert to String
console.log(["a", "b", "c"].join("-")); // ✅ "a-b-c"


// 13️⃣ Flat an Array
const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // ✅ [1, 2, 3]


// 14️⃣ Copy and Change Value
const changed = [10, 20, 30].with(1, 99);
console.log(changed); // ✅ [10, 99, 30]


// 15️⃣ Loop with forEach
[10, 20, 30].forEach(item => console.log(item));


// ✅ BONUS: Array of Objects
const users = [
  { name: "Suuru", age: 30 },
  { name: "Ada", age: 25 },
  { name: "John", age: 35 }
];

// Filter
const older = users.filter(user => user.age > 28);
console.log(older);

// Map names
const names = users.map(user => user.name);
console.log(names);

// Reduce total age
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);
