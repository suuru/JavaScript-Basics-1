// 1️⃣ Create an Object
const person = {name:"Suuru", age:30, country:"Nigeria"};
console.log(person.country);

// 2️⃣ Add a New Property
person.email = "asuuru@yahoo.com";
console.log(person);

//delete a property
delete person.age
console.log(person);


person.age = 30; //adding age back for further operations
console.log(person);

console.log(Object.keys(person));

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = {...obj1, ...obj2}
console.log(merged); 

const frozen=Object.freeze({ name:"Ayo", role:"User"});
frozen.name="Changed";
console.log(frozen);

// 9️⃣ Seal an Object
const sealed = Object.seal({ city: "Lagos", age: 30 });
sealed.city = "Abuja"; // ✅ Can update
delete sealed.age; // ❌ Cannot delete
console.log(sealed);

// 🔟 Convert Entries Back to Object
const entries = [["name", "Suuru"], ["age", 30]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);