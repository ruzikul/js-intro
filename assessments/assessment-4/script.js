// --- Challenge 1 --- \\

var singleWord = "Greeting";
var index = singleWord.length - 1;
var random1 = Math.floor(Math.random() * 8);
var random2 = Math.floor(Math.random() * 8);

var char1 = singleWord[random1];
var char2 = singleWord[random2];
console.log(char1.toUpperCase(), char2.toUpperCase())

// --- Challenge 2 --- \\

var randomNumber = Math.floor(Math.random() * 1000);

console.log(randomNumber % 2 !== 0);
console.log(randomNumber % 2 === 0);

// --- Challenge 3 --- \\

var numerator = Math.floor(Math.random() * (-100 + 1) - 1);
var denominator = Math.floor(Math.random() * (8 - 5 + 1) + 5);
var result = numerator / denominator;
console.log('Original result: ' + result);
console.log('Rounded result: ' + Math.round(result));

// --- Challenge 4 --- \\

var testNumber = Math.floor(Math.random() * (2500 - 25 + 1) + 25);
console.log(testNumber % 3 === 0 && testNumber % 5 !== 0);

// --- Challenge 5 --- \\

var divTest = Math.floor(Math.random() * (200 - 100 + 1) + 100);

console.log(divTest % 5 === 0 && divTest % 3 !== 0)

// --- Challenge 6 --- \\

var creativeString = "Exploring the vast universe of code can lead to unexpected discoveries."

var index = Math.floor(Math.random() * creativeString.length);
var extractedText = creativeString.slice(randomIndex + 1);

console.log('Text after index ' + index + ': ' + extractedText);