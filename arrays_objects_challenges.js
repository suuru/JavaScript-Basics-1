// ===============================
// 🧠 Arrays + Objects Mini Challenges
// ===============================

console.log("=== ARRAYS + OBJECTS PRACTICE ===\n");

// 🧩 1️⃣ Create an array of objects
const users = [
  { name: "Suuru", age: 30, country: "Nigeria" },
  { name: "Ada", age: 25, country: "Ghana" },
  { name: "John", age: 35, country: "Kenya" }
];





// 🧩 2️⃣ Filter users older than 28
const olderUsers = users.filter(user => user.age > 28);
console.log("\nUsers older than 28:", olderUsers);

// 🧩 3️⃣ Get only user names using map()
const names = users.map(user => user.name);
console.log("\nAll user names:", names);

// 🧩 4️⃣ Find a specific user
const foundUser = users.find(user => user.name === "Ada");
console.log("\nFind user named Ada:", foundUser);

// 🧩 5️⃣ Add a new user using push()
users.push({ name: "Emma", age: 22, country: "Tanzania" });
console.log("\nAfter adding new user:", users);

// 🧩 6️⃣ Remove the last user using pop()
users.pop();
console.log("\nAfter removing last user:", users);

// 🧩 7️⃣ Increase every user’s age by 1 using map()
const olderList = users.map(user => ({
  ...user,
  age: user.age + 1
}));
console.log("\nUsers with +1 year added:", olderList);

// 🧩 8️⃣ Combine two arrays of objects
const extraUsers = [
  { name: "Grace", age: 29, country: "Uganda" },
  { name: "David", age: 40, country: "Nigeria" }
];
const allUsers = [...users, ...extraUsers];
console.log("\nCombined user list:", allUsers);

// 🧩 9️⃣ Sort users by age
const sortedUsers = [...allUsers].sort((a, b) => a.age - b.age);
console.log("\nUsers sorted by age:", sortedUsers);

// 🧩 🔟 Create an object that shows total users by country
const userCountByCountry = allUsers.reduce((acc, user) => {
  acc[user.country] = (acc[user.country] || 0) + 1;
  return acc;
}, {});
console.log("\nTotal users by country:", userCountByCountry);

// 🧩 11️⃣ Freeze an object and try to modify it
const config = Object.freeze({ appName: "UserApp", version: 1 });
config.version = 2; // ❌ ignored because frozen
console.log("\nFrozen object test:", config);

// 🧩 12️⃣ Create a Set of countries (unique values)
const countries = new Set(allUsers.map(u => u.country));
console.log("\nUnique countries:", countries);

// 🧩 13️⃣ Convert entries back to object
const keyValuePairs = [["theme", "dark"], ["language", "en"]];
const settings = Object.fromEntries(keyValuePairs);
console.log("\nConverted from entries:", settings);

// 🧩 14️⃣ Create a Map for fast lookups
const userMap = new Map();
users.forEach(user => userMap.set(user.name, user.age));
console.log("\nMap of user ages:", userMap);
console.log("Age of Suuru:", userMap.get("Suuru"));

// 🧩 15️⃣ Bonus: Combine all ages using reduce()
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("\nTotal age of users:", totalAge);

// ===============================
// ✅ PRACTICE COMPLETE!
// Try changing names, adding properties,
// or testing with Object.freeze(), map(), filter(), etc.
// ===============================
