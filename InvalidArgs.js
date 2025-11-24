// ============================================
// COMPREHENSIVE JAVASCRIPT METHODS TESTS
// Including Edge Cases and Invalid Arguments
// ============================================

console.log("=== STARTING TESTS (INCLUDING EDGE CASES) ===\n");

// Helper function to display test results
function test(testName, actual, expected) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  const status = passed ? "✅ PASS" : "❌ FAIL";
  console.log(`${status} - ${testName}`);
  if (!passed) {
    console.log(`   Expected: ${JSON.stringify(expected)}`);
    console.log(`   Got: ${JSON.stringify(actual)}`);
  }
}

// Helper to test if function throws error
function testThrows(testName, fn, shouldThrow = true) {
  let threw = false;
  let result;
  try {
    result = fn();
  } catch (e) {
    threw = true;
  }
  const passed = threw === shouldThrow;
  const status = passed ? "✅ PASS" : "❌ FAIL";
  console.log(`${status} - ${testName}`);
  if (!passed) {
    console.log(`   Expected to ${shouldThrow ? 'throw' : 'not throw'}`);
    console.log(`   Got: ${threw ? 'threw error' : 'returned ' + result}`);
  }
}

// ============================================
// TEST 1: Number() - Breaking with Invalid Types
// ============================================
console.log("\n--- TEST 1: Number() with Invalid Arguments ---");

test("Number(undefined)", Number(undefined), NaN);
test("Number(null)", Number(null), 0);
test("Number({})", Number({}), NaN);
test("Number([])", Number([]), 0);
test("Number([1,2])", Number([1,2]), NaN);
test("Number('hello')", Number('hello'), NaN);
test("Number(true)", Number(true), 1);
test("Number(false)", Number(false), 0);
test("Number(Symbol())", isNaN(Number(Symbol('test'))), true);

// ============================================
// TEST 2: Number.parseInt() - Edge Cases
// ============================================
console.log("\n--- TEST 2: parseInt() Edge Cases ---");

test("parseInt('')", isNaN(Number.parseInt('')), true);
test("parseInt('   ')", isNaN(Number.parseInt('   ')), true);
test("parseInt(null)", isNaN(Number.parseInt(null)), true);
test("parseInt(undefined)", isNaN(Number.parseInt(undefined)), true);
test("parseInt(NaN)", isNaN(Number.parseInt(NaN)), true);
test("parseInt('0xFF', 16)", Number.parseInt('0xFF', 16), 255);
test("parseInt('123', 2)", Number.parseInt('123', 2), 1); // Only '1' is valid in binary
test("parseInt(Infinity)", isNaN(Number.parseInt(Infinity)), true);

// ============================================
// TEST 3: Number.parseFloat() - Breaking Cases
// ============================================
console.log("\n--- TEST 3: parseFloat() Breaking Cases ---");

test("parseFloat('')", isNaN(Number.parseFloat('')), true);
test("parseFloat('abc')", isNaN(Number.parseFloat('abc')), true);
test("parseFloat(null)", isNaN(Number.parseFloat(null)), true);
test("parseFloat({})", isNaN(Number.parseFloat({})), true);
test("parseFloat('3.14.15')", Number.parseFloat('3.14.15'), 3.14);
test("parseFloat('  3.14  ')", Number.parseFloat('  3.14  '), 3.14);
test("parseFloat(Infinity)", Number.parseFloat('Infinity'), Infinity);

// ============================================
// TEST 4: Number Methods on Invalid Values
// ============================================
console.log("\n--- TEST 4: Number Methods on Invalid Values ---");

test("isInteger(null)", Number.isInteger(null), false);
test("isInteger(NaN)", Number.isInteger(NaN), false);
test("isInteger(Infinity)", Number.isInteger(Infinity), false);
test("isInteger('100')", Number.isInteger('100'), false);
test("isFinite(null)", Number.isFinite(null), false);
test("isFinite('100')", Number.isFinite('100'), false);
test("isNaN(undefined)", Number.isNaN(undefined), false);
test("isNaN('NaN')", Number.isNaN('NaN'), false);

// ============================================
// TEST 5: toFixed/toPrecision on Edge Cases
// ============================================
console.log("\n--- TEST 5: Formatting Methods Edge Cases ---");

testThrows("toFixed on string", () => 'hello'.toFixed(2), true);
testThrows("toFixed on null", () => null.toFixed(2), true);
testThrows("toFixed on undefined", () => undefined.toFixed(2), true);
test("(0).toFixed(0)", (0).toFixed(0), "0");
test("(NaN).toFixed(2)", (NaN).toFixed(2), "NaN");
test("(Infinity).toFixed(2)", (Infinity).toFixed(2), "Infinity");
testThrows("toFixed(-1)", () => (10).toFixed(-1), true);
testThrows("toFixed(101)", () => (10).toFixed(101), true);

// ============================================
// TEST 6: String Methods - Breaking with Non-Strings
// ============================================
console.log("\n--- TEST 6: String Methods on Invalid Types ---");

testThrows("charAt on null", () => null.charAt(0), true);
testThrows("charAt on undefined", () => undefined.charAt(0), true);
testThrows("includes on null", () => null.includes('test'), true);
test("String(null).includes('null')", String(null).includes('null'), true);
test("String(undefined).charAt(0)", String(undefined).charAt(0), "u");
testThrows("split on number", () => (123).split(''), true);

// ============================================
// TEST 7: String.charAt() and at() Edge Cases
// ============================================
console.log("\n--- TEST 7: charAt/at Edge Cases ---");

test("charAt(-1)", 'hello'.charAt(-1), '');
test("charAt(100)", 'hello'.charAt(100), '');
test("at(100)", 'hello'.at(100), undefined);
test("charAt(NaN)", 'hello'.charAt(NaN), 'h'); // NaN converts to 0
test("at(null)", 'hello'.at(null), 'h'); // null converts to 0
test("charAt(undefined)", 'hello'.charAt(undefined), 'h');
test("at(Infinity)", 'hello'.at(Infinity), undefined);

// ============================================
// TEST 8: String indexOf/includes with Invalid Args
// ============================================
console.log("\n--- TEST 8: indexOf/includes Invalid Args ---");

test("indexOf(undefined)", 'hello undefined'.indexOf(undefined), 6);
test("indexOf(null)", 'hello null'.indexOf(null), 6);
test("indexOf(NaN)", 'hello NaN'.indexOf(NaN), 6);
test("includes({})", 'hello [object Object]'.includes({}), true);
test("indexOf with NaN start", 'hello'.indexOf('l', NaN), 2);
test("indexOf with negative start", 'hello'.indexOf('l', -10), 2);
test("lastIndexOf('')", 'hello'.lastIndexOf(''), 5);

// ============================================
// TEST 9: String slice/substring with Invalid Args
// ============================================
console.log("\n--- TEST 9: slice/substring Edge Cases ---");

test("slice(undefined)", 'hello'.slice(undefined), 'hello');
test("slice(null)", 'hello'.slice(null), 'hello');
test("slice(NaN)", 'hello'.slice(NaN), 'hello');
test("slice(Infinity)", 'hello'.slice(Infinity), '');
test("substring(-5)", 'hello'.substring(-5), 'hello'); // Negative treated as 0
test("substring(10, 2)", 'hello'.substring(10, 2), 'llo'); // Args swapped
test("slice with both negative", 'hello'.slice(-3, -1), 'll');

// ============================================
// TEST 10: String split() Breaking Cases
// ============================================
console.log("\n--- TEST 10: split() Breaking Cases ---");

test("split(undefined)", 'hello'.split(undefined), ['hello']);
test("split('')", 'hello'.split(''), ['h','e','l','l','o']);
test("split with limit 0", 'a,b,c'.split(',', 0), []);
test("split with negative limit", 'a,b,c'.split(',', -1), ['a','b','c']);
test("split(null)", 'hello null'.split(null), ['hello ', '']);
test("split({})", 'test'.split({}), ['test']);

// ============================================
// TEST 11: String replace/replaceAll Edge Cases
// ============================================
console.log("\n--- TEST 11: replace/replaceAll Edge Cases ---");

test("replace(undefined)", 'hello undefined'.replace(undefined, 'x'), 'hello x');
test("replace with undefined replacement", 'hello'.replace('l', undefined), 'heundefinedlo');
test("replaceAll('', 'x')", 'abc'.replaceAll('', 'x'), 'xaxbxcx');
test("replace(null)", 'hello null'.replace(null, 'X'), 'hello X');
testThrows("replaceAll without g flag", () => 'aaa'.replaceAll(/a/, 'b'), true);

// ============================================
// TEST 12: String trim variants on Edge Cases
// ============================================
console.log("\n--- TEST 12: trim Methods Edge Cases ---");

test("trim('')", ''.trim(), '');
test("trimStart with only spaces", '     '.trimStart(), '');
test("trimEnd with tabs", 'hello\t\t'.trimEnd(), 'hello');
test("trim with newlines", '\n\nhello\n\n'.trim(), 'hello');
test("trim with mixed whitespace", ' \t\n hello \t\n '.trim(), 'hello');

// ============================================
// TEST 13: String case conversion on Special Chars
// ============================================
console.log("\n--- TEST 13: Case Conversion Edge Cases ---");

test("toLowerCase('')", ''.toLowerCase(), '');
test("toUpperCase on numbers", '123'.toUpperCase(), '123');
test("toLowerCase on symbols", '!@#$%'.toLowerCase(), '!@#$%');
test("toUpperCase(null)", String(null).toUpperCase(), 'NULL');
test("toLowerCase on mixed", 'HeLLo123!'.toLowerCase(), 'hello123!');

// ============================================
// TEST 14: Math.floor/ceil/round on Edge Cases
// ============================================
console.log("\n--- TEST 14: Math Rounding Edge Cases ---");

test("floor(NaN)", isNaN(Math.floor(NaN)), true);
test("ceil(Infinity)", Math.ceil(Infinity), Infinity);
test("round(-Infinity)", Math.round(-Infinity), -Infinity);
test("floor(null)", Math.floor(null), 0);
test("ceil(undefined)", isNaN(Math.ceil(undefined)), true);
test("round('hello')", isNaN(Math.round('hello')), true);
test("trunc(null)", Math.trunc(null), 0);
test("floor(-0)", Math.floor(-0), -0);

// ============================================
// TEST 15: Math.min/max with Invalid Args
// ============================================
console.log("\n--- TEST 15: Math min/max Edge Cases ---");

test("min()", Math.min(), Infinity);
test("max()", Math.max(), -Infinity);
test("min(NaN, 5)", isNaN(Math.min(NaN, 5)), true);
test("max('10', 5)", Math.max('10', 5), 10);
test("min(null, 5)", Math.min(null, 5), 0);
test("max(undefined, 5)", isNaN(Math.max(undefined, 5)), true);
test("min([], 5)", Math.min([], 5), 0);
test("max([10], 5)", Math.max([10], 5), 10);

// ============================================
// TEST 16: Math.abs on Various Types
// ============================================
console.log("\n--- TEST 16: Math.abs Edge Cases ---");

test("abs(null)", Math.abs(null), 0);
test("abs(undefined)", isNaN(Math.abs(undefined)), true);
test("abs('')", Math.abs(''), 0);
test("abs('hello')", isNaN(Math.abs('hello')), true);
test("abs([])", Math.abs([]), 0);
test("abs([5])", Math.abs([5]), 5);
test("abs({})", isNaN(Math.abs({})), true);
test("abs(true)", Math.abs(true), 1);

// ============================================
// TEST 17: Math.random Edge Cases
// ============================================
console.log("\n--- TEST 17: Math.random Edge Cases ---");

const rand1 = Math.random();
const rand2 = Math.random();
test("random is number", typeof rand1 === 'number', true);
test("random >= 0", rand1 >= 0, true);
test("random < 1", rand1 < 1, true);
test("random not equal", rand1 !== rand2, true);
test("random * NaN", isNaN(Math.random() * NaN), true);
test("floor(random * 0)", Math.floor(Math.random() * 0), 0);

// ============================================
// TEST 18: Date Constructor Edge Cases
// ============================================
console.log("\n--- TEST 18: Date Constructor Edge Cases ---");

test("new Date(undefined)", isNaN(new Date(undefined).getTime()), true);
test("new Date(null)", new Date(null).getTime(), 0);
test("new Date('invalid')", isNaN(new Date('invalid').getTime()), true);
test("new Date(NaN)", isNaN(new Date(NaN).getTime()), true);
test("new Date(Infinity)", isNaN(new Date(Infinity).getTime()), true);
test("new Date('')", isNaN(new Date('').getTime()), true);
test("new Date({})", isNaN(new Date({}).getTime()), true);

// ============================================
// TEST 19: Date.parse Edge Cases
// ============================================
console.log("\n--- TEST 19: Date.parse Edge Cases ---");

test("parse(undefined)", isNaN(Date.parse(undefined)), true);
test("parse(null)", isNaN(Date.parse(null)), true);
test("parse('')", isNaN(Date.parse('')), true);
test("parse('garbage')", isNaN(Date.parse('garbage')), true);
test("parse(123)", typeof Date.parse(123) === 'number', true);
test("parse(NaN)", isNaN(Date.parse(NaN)), true);
test("parse({})", isNaN(Date.parse({})), true);

// ============================================
// TEST 20: Date Methods on Invalid Dates
// ============================================
console.log("\n--- TEST 20: Date Methods on Invalid Dates ---");

const invalidDate = new Date('invalid');
test("Invalid date getFullYear", isNaN(invalidDate.getUTCFullYear()), true);
test("Invalid date getMonth", isNaN(invalidDate.getUTCMonth()), true);
test("Invalid date getDate", isNaN(invalidDate.getUTCDate()), true);
test("Invalid date toString", invalidDate.toString(), "Invalid Date");
test("Invalid date toJSON", invalidDate.toJSON(), null);
test("Invalid date getTime", isNaN(invalidDate.getTime()), true);

// ============================================
// TEST 21: Date set Methods with Invalid Args
// ============================================
console.log("\n--- TEST 21: Date set Methods Edge Cases ---");

const date1 = new Date('2024-11-24');
date1.setUTCDate(NaN);
test("setUTCDate(NaN)", isNaN(date1.getTime()), true);

const date2 = new Date('2024-11-24');
date2.setUTCMonth(undefined);
test("setUTCMonth(undefined)", isNaN(date2.getTime()), true);

const date3 = new Date('2024-11-24');
date3.setUTCHours(null);
test("setUTCHours(null)", date3.getUTCHours(), 0);

const date4 = new Date('2024-11-24');
date4.setUTCFullYear('invalid');
test("setUTCFullYear('invalid')", isNaN(date4.getTime()), true);

// ============================================
// TEST 22: Date.UTC with Invalid Args
// ============================================
console.log("\n--- TEST 22: Date.UTC Edge Cases ---");

test("UTC(NaN)", isNaN(Date.UTC(NaN)), true);
test("UTC(2024, NaN)", isNaN(Date.UTC(2024, NaN)), true);
test("UTC(2024, 13)", Date.UTC(2024, 13), Date.UTC(2025, 1)); // Month overflow
test("UTC(2024, -1)", Date.UTC(2024, -1), Date.UTC(2023, 11)); // Negative month
test("UTC with null", typeof Date.UTC(null, null) === 'number', true);
test("UTC(undefined)", isNaN(Date.UTC(undefined)), true);

// ============================================
// TEST 23: String padStart/padEnd Edge Cases
// ============================================
console.log("\n--- TEST 23: pad Methods Edge Cases ---");

test("padStart with negative length", 'hi'.padStart(-5), 'hi');
test("padStart with 0", 'hi'.padStart(0), 'hi');
test("padEnd with empty string", 'hi'.padEnd(5, ''), 'hi');
test("padStart(NaN)", 'hi'.padStart(NaN), 'hi');
test("padEnd(Infinity)", 'hi'.padEnd(Infinity), 'hi'); // Capped at length limit
testThrows("padStart with undefined this", () => String.prototype.padStart.call(undefined, 5), true);

// ============================================
// TEST 24: String repeat Edge Cases
// ============================================
console.log("\n--- TEST 24: repeat Edge Cases ---");

test("repeat(0)", 'hi'.repeat(0), '');
test("repeat(1)", 'hi'.repeat(1), 'hi');
testThrows("repeat(-1)", () => 'hi'.repeat(-1), true);
testThrows("repeat(Infinity)", () => 'hi'.repeat(Infinity), true);
test("repeat(NaN)", 'hi'.repeat(NaN), '');
test("repeat(null)", 'hi'.repeat(null), '');
test("repeat(3.7)", 'hi'.repeat(3.7), 'hihihi'); // Truncated to 3

// ============================================
// TEST 25: String concat Edge Cases
// ============================================
console.log("\n--- TEST 25: concat Edge Cases ---");

test("concat()", 'hello'.concat(), 'hello');
test("concat(null)", 'hello'.concat(null), 'hellonull');
test("concat(undefined)", 'hello'.concat(undefined), 'helloundefined');
test("concat(NaN)", 'hello'.concat(NaN), 'helloNaN');
test("concat multiple types", 'x'.concat(1, true, null), 'x1truenull');
testThrows("concat on null", () => String.prototype.concat.call(null, 'hi'), true);

// ============================================
// TEST 26: String startsWith/endsWith Edge Cases
// ============================================
console.log("\n--- TEST 26: startsWith/endsWith Edge Cases ---");

test("startsWith('')", 'hello'.startsWith(''), true);
test("endsWith('')", 'hello'.endsWith(''), true);
test("startsWith(undefined)", 'undefined'.startsWith(undefined), true);
test("startsWith with negative position", 'hello'.startsWith('h', -5), false);
test("endsWith with position > length", 'hello'.endsWith('o', 100), true);
test("startsWith(null)", 'nulltest'.startsWith(null), true);

// ============================================
// TEST 27: String charCodeAt Edge Cases
// ============================================
console.log("\n--- TEST 27: charCodeAt Edge Cases ---");

test("charCodeAt(-1)", isNaN('hello'.charCodeAt(-1)), true);
test("charCodeAt(100)", isNaN('hello'.charCodeAt(100)), true);
test("charCodeAt(NaN)", 'hello'.charCodeAt(NaN), 104); // Converts to 0
test("charCodeAt(undefined)", 'hello'.charCodeAt(undefined), 104);
test("charCodeAt(Infinity)", isNaN('hello'.charCodeAt(Infinity)), true);

// ============================================
// TEST 28: String.fromCharCode Edge Cases
// ============================================
console.log("\n--- TEST 28: fromCharCode Edge Cases ---");

test("fromCharCode()", String.fromCharCode(), '');
test("fromCharCode(NaN)", String.fromCharCode(NaN), '\x00');
test("fromCharCode(null)", String.fromCharCode(null), '\x00');
test("fromCharCode(undefined)", String.fromCharCode(undefined), '\x00');
test("fromCharCode(Infinity)", String.fromCharCode(Infinity), '\x00');
test("fromCharCode(-1)", String.fromCharCode(-1).charCodeAt(0), 65535); // Wraps around

// ============================================
// TEST 29: String localeCompare Edge Cases
// ============================================
console.log("\n--- TEST 29: localeCompare Edge Cases ---");

test("localeCompare with itself", 'a'.localeCompare('a'), 0);
test("localeCompare(undefined)", typeof 'a'.localeCompare(undefined) === 'number', true);
test("localeCompare(null)", typeof 'a'.localeCompare(null) === 'number', true);
test("localeCompare empty", ''.localeCompare(''), 0);
test("localeCompare numbers", '10'.localeCompare('2'), -1); // String comparison

// ============================================
// TEST 30: Combined Breaking Scenarios
// ============================================
console.log("\n--- TEST 30: Combined Breaking Scenarios ---");

// Try to break multiple methods in sequence
const weirdValue = undefined;
const result1 = Number(weirdValue);
const result2 = isNaN(result1);
test("Number(undefined) is NaN", result2, true);

// Chain operations that could fail
testThrows("Chain: null.toString().split()", () => null.toString().split(','), true);

// Mixed type operations
const mixedResult = Number.parseInt('123abc') + Number.parseFloat('45.67xyz');
test("parseInt + parseFloat mixed", mixedResult, 168.67);

// Invalid Date operations
const badDate = new Date('not a date');
const badYear = badDate.getUTCFullYear();
test("Invalid date getUTCFullYear", isNaN(badYear), true);

// Math on non-numbers
const mathResult = Math.floor('hello') + Math.ceil(null);
test("Math.floor('hello') + Math.ceil(null)", isNaN(mathResult), true);

// ============================================
// TEST SUMMARY
// ============================================
console.log("\n=== ALL TESTS COMPLETED ===");
console.log("This test suite covers:");
console.log("- Valid use cases");
console.log("- Edge cases (null, undefined, NaN, Infinity)");
console.log("- Invalid argument types");
console.log("- Boundary conditions");
console.log("- Error scenarios");
console.log("\n✅ = Test passed");
console.log("❌ = Test failed (with details)");