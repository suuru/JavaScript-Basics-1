// ============================================
// DATA ORDERING IN JAVASCRIPT: COMPLETE GUIDE
// ============================================

/*
 * KEY QUESTION: Which data types preserve insertion order?
 * Which data types automatically sort themselves?
 * 
 * SUMMARY TABLE:
 * ┌─────────────┬──────────────────┬──────────────────────┐
 * │ Data Type   │ Insertion Order? │ Auto-Sorted?         │
 * ├─────────────┼──────────────────┼──────────────────────┤
 * │ Array       │ ✅ YES           │ ❌ NO (manual .sort) │
 * │ Map         │ ✅ YES           │ ❌ NO                │
 * │ Set         │ ✅ YES           │ ❌ NO                │
 * │ WeakMap     │ ❌ N/A (no iter) │ ❌ N/A               │
 * │ WeakSet     │ ❌ N/A (no iter) │ ❌ N/A               │
 * │ Object      │ ⚠️  COMPLEX      │ ⚠️  Integer keys YES │
 * └─────────────┴──────────────────┴──────────────────────┘
 */


// ============================================
// PART 1: ARRAY - ALWAYS INSERTION ORDER
// ============================================

console.log('=== ARRAY: Maintains Insertion Order ===\n');

const arr = ['banana', 'apple', 'cherry'];
console.log('Original:', arr);
// ['banana', 'apple', 'cherry']

arr.push('date');
console.log('After push:', arr);
// ['banana', 'apple', 'cherry', 'date']

console.log('✅ Arrays preserve insertion order');
console.log('❌ Arrays are NOT automatically sorted');
console.log('   You must call .sort() manually\n');

// Manual sorting
const sorted = [...arr].sort();
console.log('Manually sorted:', sorted);
// ['apple', 'banana', 'cherry', 'date']

console.log('Original unchanged:', arr);
// ['banana', 'apple', 'cherry', 'date']


// ============================================
// PART 2: MAP - ALWAYS INSERTION ORDER
// ============================================

console.log('\n=== MAP: Strictly Maintains Insertion Order ===\n');

const map = new Map();
map.set('z', 'third');
map.set('a', 'first');
map.set('m', 'second');

console.log('Insertion order: z → a → m');
console.log('Iteration order:');
for (const [key, value] of map) {
  console.log(`  ${key}: ${value}`);
}
// z: third
// a: first
// m: second

console.log('\n✅ Map ALWAYS preserves insertion order');
console.log('❌ Map is NOT automatically sorted');
console.log('   Even numeric keys stay in insertion order!\n');

// Numeric keys example
const numMap = new Map();
numMap.set(100, 'hundred');
numMap.set(1, 'one');
numMap.set(50, 'fifty');

console.log('Numeric keys in insertion order:');
for (const [key] of numMap) {
  console.log(`  Key: ${key}`);
}
// 100, 1, 50 (NOT sorted!)


// ============================================
// PART 3: SET - ALWAYS INSERTION ORDER
// ============================================

console.log('\n=== SET: Maintains Insertion Order ===\n');

const set = new Set();
set.add('zebra');
set.add('apple');
set.add('mango');

console.log('Insertion order: zebra → apple → mango');
console.log('Iteration order:');
for (const value of set) {
  console.log(`  ${value}`);
}
// zebra, apple, mango

set.add('banana');
console.log('\nAfter adding banana:');
for (const value of set) {
  console.log(`  ${value}`);
}
// zebra, apple, mango, banana

console.log('\n✅ Set ALWAYS preserves insertion order');
console.log('❌ Set is NOT automatically sorted\n');


// ============================================
// PART 4: OBJECT - COMPLEX ORDERING RULES!
// ============================================

console.log('\n=== OBJECT: Complex Ordering Rules (ES2015+) ===\n');

/*
 * OBJECT PROPERTY ORDER (since ES2015):
 * 
 * 1. INTEGER KEYS (array indices): Sorted numerically ascending
 * 2. STRING KEYS: In insertion order
 * 3. SYMBOL KEYS: In insertion order
 * 
 * What counts as an "integer key"?
 * - Strings that look like non-negative integers: "0", "1", "100"
 * - Actual numbers when used as keys
 * - NOT: "01", "1.5", "-1" (these are string keys)
 */

// Example 1: Mixed integer and string keys
const obj1 = {
  'name': 'Alice',      // String key (2nd in iteration)
  '100': 'hundred',     // Integer key (3rd in iteration)
  'age': 30,            // String key (3rd in iteration)
  '2': 'two',           // Integer key (1st in iteration)
  '50': 'fifty'         // Integer key (2nd in iteration)
};

console.log('Object with mixed keys:');
console.log('Keys:', Object.keys(obj1));
// ['2', '50', '100', 'name', 'age']
//  ↑ Integers sorted  ↑ Strings in insertion order

console.log('\n⚠️  IMPORTANT: Integer keys are AUTOMATICALLY SORTED!');
console.log('   String keys preserve insertion order\n');


// Example 2: What counts as integer key?
const obj2 = {
  '3': 'three',      // Integer key → sorted
  '1': 'one',        // Integer key → sorted
  '01': 'zero-one',  // String key (not canonical) → insertion order
  '2.5': 'decimal',  // String key (not integer) → insertion order
  '-1': 'negative',  // String key (not non-negative) → insertion order
  'b': 'bee',        // String key → insertion order
  'a': 'ay'          // String key → insertion order
};

console.log('Demonstrating integer vs string keys:');
console.log('Keys:', Object.keys(obj2));
// ['1', '3', '01', '2.5', '-1', 'b', 'a']
//  ↑ Integers  ↑ Strings in insertion order

console.log('\nWhat counts as integer key?');
console.log('  ✅ "0", "1", "100" → Integer keys (sorted)');
console.log('  ❌ "01", "1.5", "-1" → String keys (insertion order)');


// Example 3: Symbols are always last
const sym1 = Symbol('first');
const sym2 = Symbol('second');

const obj3 = {
  [sym1]: 'symbol 1',
  '5': 'five',
  'name': 'test',
  [sym2]: 'symbol 2',
  '1': 'one'
};

console.log('\nObject with symbols:');
console.log('All keys (including symbols):');
console.log(Reflect.ownKeys(obj3));
// ['1', '5', 'name', Symbol(first), Symbol(second)]
//  ↑ Integers ↑ String ↑ Symbols in insertion order


// ============================================
// DEMONSTRATION: Object Ordering Behavior
// ============================================

console.log('\n=== Object Ordering: Live Demo ===\n');

const demo = {};

// Add in this order: string, integer, string, integer
demo.z = 'last string added first';
demo[100] = 'large integer';
demo.a = 'first string added second';
demo[1] = 'small integer';
demo.m = 'middle string';
demo[50] = 'medium integer';

console.log('Added in order: z, 100, a, 1, m, 50');
console.log('Keys iterate as:', Object.keys(demo));
// ['1', '50', '100', 'z', 'a', 'm']
//  ↑ Integers sorted   ↑ Strings in insertion order

console.log('\n📌 Rule: Integers always sorted first,');
console.log('   then strings in insertion order');


// ============================================
// COMPARING OBJECT vs MAP
// ============================================

console.log('\n=== Object vs Map: Ordering Comparison ===\n');

// Object: Integer keys get sorted
const obj = { '100': 'c', '1': 'a', '50': 'b' };
console.log('Object keys:', Object.keys(obj));
// ['1', '50', '100'] ← Sorted!

// Map: Preserves insertion order
const map2 = new Map();
map2.set('100', 'c');
map2.set('1', 'a');
map2.set('50', 'b');
console.log('Map keys:', [...map2.keys()]);
// ['100', '1', '50'] ← Insertion order!

console.log('\n💡 Use Map when insertion order matters!');
console.log('   Use Object for simple key-value storage');


// ============================================
// PRACTICAL EXAMPLES
// ============================================

console.log('\n=== Practical Examples ===\n');

// Example 1: When Object ordering causes problems
console.log('Problem: Tracking user actions by timestamp\n');

const actions = {};
actions[Date.now()] = 'Login';
// Wait a moment...
setTimeout(() => {
  actions[Date.now()] = 'View Profile';
}, 10);
setTimeout(() => {
  actions[Date.now()] = 'Logout';
}, 20);

setTimeout(() => {
  console.log('Object (sorted by timestamp):');
  Object.keys(actions).forEach(timestamp => {
    console.log(`  ${timestamp}: ${actions[timestamp]}`);
  });
  // Timestamps are integers, so they're sorted numerically
  // This happens to work, but only by coincidence!
}, 50);


// Example 2: Better solution with Map
console.log('\nBetter: Use Map for guaranteed insertion order\n');

const betterActions = new Map();
const t1 = Date.now();
betterActions.set(t1, 'Login');

setTimeout(() => {
  const t2 = Date.now();
  betterActions.set(t2, 'View Profile');
}, 10);

setTimeout(() => {
  const t3 = Date.now();
  betterActions.set(t3, 'Logout');
}, 20);

setTimeout(() => {
  console.log('Map (guaranteed insertion order):');
  for (const [timestamp, action] of betterActions) {
    console.log(`  ${timestamp}: ${action}`);
  }
  // Always in insertion order, regardless of key type!
}, 100);


// Example 3: When you need sorted keys
console.log('\nWhen you WANT sorted keys:\n');

const scores = {
  'player100': 95,
  'player1': 88,
  'player50': 92
};

// If you want sorted by player number
const sortedKeys = Object.keys(scores).sort((a, b) => {
  const numA = parseInt(a.replace('player', ''));
  const numB = parseInt(b.replace('player', ''));
  return numA - numB;
});

console.log('Sorted player keys:', sortedKeys);
// ['player1', 'player50', 'player100']


// ============================================
// HOW TO SORT MAP AND SET
// ============================================

console.log('\n=== How to Sort Map and Set ===\n');

// Sorting a Map
const unsortedMap = new Map([
  ['zebra', 1],
  ['apple', 2],
  ['mango', 3]
]);

// Convert to array, sort, convert back
const sortedMap = new Map(
  [...unsortedMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))
);

console.log('Original Map:', [...unsortedMap.keys()]);
console.log('Sorted Map:', [...sortedMap.keys()]);

// Sorting a Set
const unsortedSet = new Set(['zebra', 'apple', 'mango']);

const sortedSet = new Set([...unsortedSet].sort());

console.log('\nOriginal Set:', [...unsortedSet]);
console.log('Sorted Set:', [...sortedSet]);


// ============================================
// WEAKMAP & WEAKSET: NO ITERATION!
// ============================================

console.log('\n=== WeakMap & WeakSet: No Ordering (No Iteration) ===\n');

const weakMap = new WeakMap();
const weakSet = new WeakSet();

const obj1Key = { id: 1 };
const obj2Key = { id: 2 };

weakMap.set(obj1Key, 'data1');
weakMap.set(obj2Key, 'data2');

weakSet.add(obj1Key);
weakSet.add(obj2Key);

console.log('WeakMap/WeakSet have NO iteration methods:');
console.log('  - No .keys()');
console.log('  - No .values()');
console.log('  - No .entries()');
console.log('  - No .forEach()');
console.log('  - No for...of');
console.log('\n❌ Therefore, ordering doesn\'t matter!');
console.log('   You can only .get(), .has(), .set(), .delete()');


// ============================================
// SUMMARY & BEST PRACTICES
// ============================================

console.log('\n=== SUMMARY ===\n');

console.log('AUTOMATICALLY SORTED:');
console.log('  ❌ Nothing is automatically sorted by default!');
console.log('  ⚠️  Except: Object integer keys (sorted numerically)\n');

console.log('PRESERVE INSERTION ORDER:');
console.log('  ✅ Array - always');
console.log('  ✅ Map - always (most reliable)');
console.log('  ✅ Set - always');
console.log('  ⚠️  Object - only for string keys (integers sorted)\n');

console.log('CANNOT ITERATE (No Order):');
console.log('  ❌ WeakMap');
console.log('  ❌ WeakSet\n');

console.log('BEST PRACTICES:');
console.log('  1. Use Array for ordered lists');
console.log('  2. Use Map when key order matters');
console.log('  3. Use Set for unique values in order');
console.log('  4. Use Object for simple key-value (beware integer keys!)');
console.log('  5. Manually sort when needed with .sort()');

console.log('\n💡 GOLDEN RULE:');
console.log('   If insertion order is critical → Use Map or Array');
console.log('   If you need sorting → Call .sort() manually');
console.log('   If using Object → Remember integer keys are sorted!\n');


// ============================================
// QUICK REFERENCE
// ============================================

console.log('=== Quick Reference ===\n');

console.log('To maintain order:');
console.log('  const map = new Map();');
console.log('  const set = new Set();');
console.log('  const arr = [];\n');

console.log('To sort:');
console.log('  arr.sort()');
console.log('  new Map([...map].sort())');
console.log('  new Set([...set].sort())\n');

console.log('Object gotcha:');
console.log('  obj[1] = "a"; obj[100] = "b"; obj[2] = "c";');
console.log('  Object.keys(obj) // ["1", "2", "100"] ← sorted!');
console.log('  Not ["1", "100", "2"] ← insertion order\n');