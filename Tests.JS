// ============================================
// COMPREHENSIVE JAVASCRIPT METHODS TEST SUITE
// 20 Tests covering Number, String, Math, and Date methods
// ============================================

console.log('=== STARTING TESTS ===\n');

// Test 1: Number methods - isInteger, isNaN, toFixed
console.log('TEST 1: Number methods');
const price = 19.99567;
console.log(`Original price: ${price}`);
console.log(`Is integer: ${Number.isInteger(price)}`);
console.log(`Fixed to 2 decimals: ${price.toFixed(2)}`);
console.log(`Is NaN: ${Number.isNaN(price)}`);
console.log(`ParseInt from string: ${Number.parseInt('42.99')}`);
console.log('---\n');

// Test 2: String methods - charAt, includes, indexOf
console.log('TEST 2: String search methods');
const email = 'user@example.com';
console.log(`Email: ${email}`);
console.log(`Character at position 4: ${email.charAt(4)}`);
console.log(`Includes '@': ${email.includes('@')}`);
console.log(`Index of '.com': ${email.indexOf('.com')}`);
console.log(`Starts with 'user': ${email.startsWith('user')}`);
console.log(`Ends with '.com': ${email.endsWith('.com')}`);
console.log('---\n');

// Test 3: String methods - split, join, replace
console.log('TEST 3: String manipulation');
const csv = 'apple,banana,orange,grape';
console.log(`Original CSV: ${csv}`);
const fruits = csv.split(',');
console.log(`Split into array: [${fruits}]`);
console.log(`First fruit uppercase: ${fruits[0].toUpperCase()}`);
const replaced = csv.replace('apple', 'mango');
console.log(`Replace apple with mango: ${replaced}`);
const replacedAll = csv.replaceAll(',', ' | ');
console.log(`Replace all commas: ${replacedAll}`);
console.log('---\n');

// Test 4: String methods - slice, substring, trim
console.log('TEST 4: String extraction');
const text = '   Hello World   ';
console.log(`Original: "${text}"`);
console.log(`Trimmed: "${text.trim()}"`);
console.log(`Slice (0, 5): "${text.slice(0, 5)}"`);
console.log(`Slice (-5): "${text.slice(-5)}"`);
console.log(`Substring (3, 8): "${text.substring(3, 8)}"`);
console.log(`Repeat 'Ha' 3 times: ${'Ha'.repeat(3)}`);
console.log('---\n');

// Test 5: String methods - padStart, padEnd
console.log('TEST 5: String padding');
const id = '7';
const price2 = '50';
console.log(`Original ID: ${id}`);
console.log(`Padded ID (5 chars): ${id.padStart(5, '0')}`);
console.log(`Original price: ${price2}`);
console.log(`Padded price: ${price2.padEnd(5, '0')}`);
const time = '9';
console.log(`Time: ${time.padStart(2, '0')}:00`);
console.log('---\n');

// Test 6: Math methods - min, max, round
console.log('TEST 6: Math min/max/round');
const numbers = [45, 12, 78, 23, 56];
console.log(`Numbers: [${numbers}]`);
console.log(`Min: ${Math.min(...numbers)}`);
console.log(`Max: ${Math.max(...numbers)}`);
const decimal = 4.567;
console.log(`Original: ${decimal}`);
console.log(`Rounded: ${Math.round(decimal)}`);
console.log(`Floor: ${Math.floor(decimal)}`);
console.log(`Ceil: ${Math.ceil(decimal)}`);
console.log('---\n');

// Test 7: Math methods - abs, trunc
console.log('TEST 7: Math absolute and truncate');
const negative = -15.789;
console.log(`Original: ${negative}`);
console.log(`Absolute: ${Math.abs(negative)}`);
console.log(`Truncate: ${Math.trunc(negative)}`);
const distance = Math.abs(25 - 100);
console.log(`Distance between 25 and 100: ${distance}`);
console.log('---\n');

// Test 8: Math.random - generate random numbers
console.log('TEST 8: Math random numbers');
console.log(`Random 0-1: ${Math.random()}`);
console.log(`Random 0-100: ${Math.floor(Math.random() * 101)}`);
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`Random 5-10: ${randomRange(5, 10)}`);
console.log(`Random 50-100: ${randomRange(50, 100)}`);
console.log(`Dice roll (1-6): ${randomRange(1, 6)}`);
console.log('---\n');

// Test 9: Math.PI - circle calculations
console.log('TEST 9: Circle calculations with Math.PI');
const radius = 10;
console.log(`Radius: ${radius}`);
const area = Math.PI * radius ** 2;
console.log(`Area: ${area.toFixed(2)}`);
const circumference = 2 * Math.PI * radius;
console.log(`Circumference: ${circumference.toFixed(2)}`);
const diameter = 2 * radius;
console.log(`Diameter: ${diameter}`);
console.log('---\n');

// Test 10: Date.now and timestamps
console.log('TEST 10: Date timestamps');
const timestamp = Date.now();
console.log(`Current timestamp: ${timestamp}`);
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
console.log(`Date 1: ${date1.toDateString()}`);
console.log(`Date 2: ${date2.toDateString()}`);
const diff = date2.getTime() - date1.getTime();
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`Days between: ${days}`);
console.log('---\n');

// Test 11: Date UTC methods
console.log('TEST 11: Date UTC methods');
const now = new Date();
console.log(`Current date: ${now.toString()}`);
console.log(`UTC Year: ${now.getUTCFullYear()}`);
console.log(`UTC Month: ${now.getUTCMonth() + 1} (1-12)`);
console.log(`UTC Date: ${now.getUTCDate()}`);
console.log(`UTC Hours: ${now.getUTCHours()}`);
console.log(`UTC Minutes: ${now.getUTCMinutes()}`);
console.log('---\n');

// Test 12: Date formatting
console.log('TEST 12: Date formatting');
const birthday = new Date('2000-05-15T10:30:00Z');
console.log(`toString: ${birthday.toString()}`);
console.log(`toUTCString: ${birthday.toUTCString()}`);
console.log(`toJSON: ${birthday.toJSON()}`);
console.log(`toTimeString: ${birthday.toTimeString()}`);
const formatted = `${birthday.getUTCDate()}/${birthday.getUTCMonth() + 1}/${birthday.getUTCFullYear()}`;
console.log(`Custom format: ${formatted}`);
console.log('---\n');

// Test 13: Date manipulation
console.log('TEST 13: Date manipulation');
const startDate = new Date('2024-11-01');
console.log(`Start date: ${startDate.toDateString()}`);
startDate.setUTCDate(startDate.getUTCDate() + 14);
console.log(`After adding 14 days: ${startDate.toDateString()}`);
startDate.setUTCMonth(startDate.getUTCMonth() + 2);
console.log(`After adding 2 months: ${startDate.toDateString()}`);
startDate.setUTCFullYear(2025);
console.log(`After setting year to 2025: ${startDate.toDateString()}`);
console.log('---\n');

// Test 14: Combined String operations
console.log('TEST 14: Complex string operations');
const sentence = 'JavaScript is AWESOME and powerful';
console.log(`Original: ${sentence}`);
console.log(`Lowercase: ${sentence.toLowerCase()}`);
console.log(`Word count: ${sentence.split(' ').length}`);
const words = sentence.split(' ');
console.log(`First word: ${words[0]}`);
console.log(`Last word: ${words[words.length - 1]}`);
const reversed = words.reverse().join(' ');
console.log(`Reversed words: ${reversed}`);
console.log('---\n');

// Test 15: Number conversion and validation
console.log('TEST 15: Number conversions');
const strNum = '123.456';
console.log(`String: "${strNum}"`);
console.log(`Number(): ${Number(strNum)}`);
console.log(`parseFloat: ${Number.parseFloat(strNum)}`);
console.log(`parseInt: ${Number.parseInt(strNum)}`);
console.log(`parseInt with '99px': ${Number.parseInt('99px')}`);
const num = 255;
console.log(`Decimal ${num} to binary: ${num.toString(2)}`);
console.log(`Decimal ${num} to hex: ${num.toString(16)}`);
console.log('---\n');

// Test 16: Array methods with strings
console.log('TEST 16: String to Array conversions');
const phoneNumber = '123-456-7890';
console.log(`Phone: ${phoneNumber}`);
const parts = phoneNumber.split('-');
console.log(`Split by dash: [${parts}]`);
console.log(`Area code: ${parts[0]}`);
const noSpaces = phoneNumber.replaceAll('-', '');
console.log(`Remove dashes: ${noSpaces}`);
const chars = 'Hello'.split('');
console.log(`Split into chars: [${chars.map(c => `'${c}'`).join(', ')}]`);
console.log('---\n');

// Test 17: Math for financial calculations
console.log('TEST 17: Financial calculations');
const subtotal = 99.99;
const taxRate = 0.08;
const tax = subtotal * taxRate;
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Tax (8%): $${tax.toFixed(2)}`);
const total = subtotal + tax;
console.log(`Total: $${total.toFixed(2)}`);
const rounded = Math.round(total * 100) / 100;
console.log(`Rounded total: $${rounded.toFixed(2)}`);
console.log('---\n');

// Test 18: Date - Day of week
console.log('TEST 18: Day of week calculations');
const testDate = new Date('2024-11-24');
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayIndex = testDate.getUTCDay();
console.log(`Date: ${testDate.toDateString()}`);
console.log(`Day index: ${dayIndex}`);
console.log(`Day name: ${dayNames[dayIndex]}`);
const isWeekend = dayIndex === 0 || dayIndex === 6;
console.log(`Is weekend: ${isWeekend}`);
console.log('---\n');

// Test 19: String search and validation
console.log('TEST 19: String validation');
const url = 'https://www.example.com/page';
console.log(`URL: ${url}`);
console.log(`Is HTTPS: ${url.startsWith('https')}`);
console.log(`Has 'example': ${url.includes('example')}`);
console.log(`Position of '.com': ${url.indexOf('.com')}`);
const username = '  JohnDoe123  ';
console.log(`Username (raw): "${username}"`);
console.log(`Trimmed: "${username.trim()}"`);
console.log(`Length after trim: ${username.trim().length}`);
console.log('---\n');

// Test 20: Combined operations - Age calculator
console.log('TEST 20: Age calculator');
const birthDate = new Date('1995-06-15');
const today = new Date();
console.log(`Birth date: ${birthDate.toDateString()}`);
console.log(`Today: ${today.toDateString()}`);
let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
const monthDiff = today.getUTCMonth() - birthDate.getUTCMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
  age--;
}
console.log(`Age: ${age} years old`);
const nextBirthday = new Date(today.getUTCFullYear(), birthDate.getUTCMonth(), birthDate.getUTCDate());
if (nextBirthday < today) {
  nextBirthday.setUTCFullYear(nextBirthday.getUTCFullYear() + 1);
}
const daysUntil = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
console.log(`Days until next birthday: ${daysUntil}`);
console.log('---\n');

console.log('=== ALL TESTS COMPLETED ===');