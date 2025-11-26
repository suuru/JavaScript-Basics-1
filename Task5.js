//MATH METHODS
// The Math namespace object contains static properties and methods for mathematical constants and functions.

//Math.E 
//The mathematical constant e (Euler's number) ≈ 2.718
console.log(Math.E); // Output: 2.718281828459045

//Math.LN10
//The natural logarithm of 10 ≈ 2.303
Math.LN10;                  // 2.302585092994046
// ln(10) - used in logarithmic conversions
console.log(Math.LN10); // Output: 2.302585092994046

//Math.LN2
//The natural logarithm of 2 ≈ 0.693
Math.LN2;                   // 0.6931471805599453
// ln(2) - used in logarithmic conversions
console.log(Math.LN2); // Output: 0.6931471805599453

//Math.LOG10E
//The base-10 logarithm of e ≈ 0.434
Math.LOG10E;               // 0.4342944819032518
// log10(e) - used in logarithmic conversions
console.log(Math.LOG10E); // Output: 0.4342944819032518

//Math.LOG2E
//The base-2 logarithm of e ≈ 1.442
Math.LOG2E;                // 1.4426950408889634
// log2(e) - used in logarithmic conversions
console.log(Math.LOG2E); // Output: 1.4426950408889634

//Math.PI
//The mathematical constant π (pi) ≈ 3.14159
Math.PI;                    // 3.141592653589793
// Ratio of a circle's circumference to its diameter
// Calculate circle area:
let radius = 5;
let area = Math.PI * radius * radius;  // 78.54

// Calculate circle circumference:
let circumference = 2 * Math.PI * radius; // 31.42
console.log(Math.PI); // Output: 3.141592653589793

//Math.SQRT1_2
//The square root of 1/2 ≈ 0.707
Math.SQRT1_2;              // 0.7071067811865476
// √(1/2) - used in geometry and trigonometry
console.log(Math.SQRT1_2); // Output: 0.7071067811865476

//Math Methods (Fun
//ctions)
// Various mathematical functions provided by the Math object.
// Example usages of some common Math methods:

//Math.min()
//Returns the smallest of zero or more numbers.
Math.min(3, 1, 4, 1, 5, 9);
Math.min(5, 10, 3);         // 3
Math.min(100, 50);          // 50
Math.min(-5, -10);          // -10
console.log(Math.min(5, 10, 3)); // Output: 3

//Math.max()
//Returns the largest of zero or more numbers.
//Returns the largest number.
Math.max(3, 1, 4, 1, 5, 9);
Math.max(5, 10, 3);         // 10
Math.max(100, 50);          // 100
Math.max(-5, -10);          // -5
console.log(Math.max(5, 10, 3)); // Output: 10
// Find maximum in array:
let numbers = [5, 2, 9, 1];
Math.max(...numbers);       // 9

//Math.floor()
//Rounds down to the nearest integer.
Math.floor(4.9);            // 4
Math.floor(4.1);            // 4
Math.floor(-4.1);           // -5 (rounds down, not towards zero)
Math.floor(7);              // 7 (already an integer)
console.log(Math.floor(4.9)); // Output: 4

//Math.ceil()
//Rounds up to the nearest integer.
Math.ceil(4.1);            // 5
Math.ceil(4.9);            // 5 
Math.ceil(-4.9);           // -4 (rounds up, not towards zero)
Math.ceil(7);              // 7 (already an integer)
console.log(Math.ceil(4.1)); // Output: 5

//Math.round()
//Rounds to the nearest integer.
Math.round(4.5);           // 5
ath.round(4.5);            // 5 (rounds up)
Math.round(4.4);            // 4 (rounds down)
Math.round(4.6);            // 5 (rounds up)
Math.round(-4.5);           // -4 (rounds to nearest even)
Math.round(-4.6);           // -5 (rounds down)
console.log(Math.round(4.5)); // Output: 5

//Math.trunc()
//Removes the decimal part (cuts off everything after the dot).
Math.trunc(4.9);           // 4
Math.trunc(4.1);           // 4
Math.trunc(-4.9);           // -4 (just removes decimal)
Math.trunc(-4.1);           // -4

// Difference from floor with negatives:
Math.floor(-4.9);           // -5 (rounds down)
Math.trunc(-4.9);           // -4 (just cuts decimal)
console.log(Math.trunc(4.9)); // Output: 4

//Math.abs()
//Returns the absolute value (non-negative value).
Math.abs(5);              // 5
Math.abs(-5);               // 5
Math.abs(-100);             // 100
Math.abs(0);                // 0

// Calculate distance:
let distance = Math.abs(10 - 25);  // 15
console.log(Math.abs(-5)); // Output: 5

//Math.random()
//Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
Math.random();             // e.g., 0.123456789
// Random number between 0 and 10:
Math.random() * 10;         // 7.234... (random)

// Random integer between 0 and 10:
Math.floor(Math.random() * 11);  // 0 to 10

// Random integer between 1 and 100:
Math.floor(Math.random() * 100) + 1;

// Random integer between min and max:
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomInt(5, 10);           // Random number: 5, 6, 7, 8, 9, or 10
console.log(Math.random()); // Output: (random number between 0 and 1)
// Example usage:
console.log(randomInt(5, 10)); // Output: (random integer between 5 and 10)

//Math.sqrt()
//Returns the square root of a number.
Math.sqrt(9);              // 3 (since 3 * 3 = 9)       
Math.sqrt(16);             // 4 (since 4 * 4 = 16)
Math.sqrt(2);
Math.sqrt(0);              // 0
console.log(Math.sqrt(9)); // Output: 3

// Practical example:
//1. Rounding money to 2 decimals:   
let price = 19.456;
Math.round(price * 100) / 100;   

//2. Calculate circle measurements:
let radius = 10;
let area = Math.PI * radius ** 2;           // 314.16
let circumference = 2 * Math.PI * radius;   // 62.83
console.log(area); // Output: 314.1592653589793
console.log(circumference); // Output: 62.83185307179586



//3. Generate random color:
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
randomColor();  // 'rgb(142, 78, 201)'
console.log(randomColor()); // Output: (random rgb color string)


//4. Dice roll:
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;  // 1 to 6
}
rollDice();  // 4 (random)
console.log(rollDice()); // Output: (random integer between 1 and 6)


