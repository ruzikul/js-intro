// --- Challenge 1 --- \\

var number1 = Math.floor(Math.random() * 15) + 15;
var number2 = Math.floor(Math.random() * 15) + 15;

if (number1 === number2) {
    console.log("The numbers are equal.")
} if (number1 > number2) {
    console.log("The first number is greater.")
} else {
    console.log("The second number is greater than the first one.")
}

// --- Challenge 2 --- \\

var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";
var targetCharacter 

// --- Challenge 3 --- \\


var randomNumber = Math.floor(Math.random() * 1000) - 1;
console.log(randomNumber)

if (randomNumber / 3) {
    console.log("Fizz")
} if (randomNumber / 5) {
    console.log("Buzz")
} 

// --- Challenge 4 --- \\

var strings = "I find myself reflecting on past adventures, realizing that my greatest discoveries were often right at home, hidden in plain sight, waiting to be appreciated."




// --- Challenge 5 --- \\

var mainString = "Exploring the vast universe of code can lead to unexpected discoveries.";
var targetString = "universe";

if (mainString.indexOf(targetString)) {
    console.log(`${targetString} string is in ${mainString}`)
} else {
    console.log(`${targetString} is not in ${mainString}`)
}


// --- Challenge 6 --- \\
// -- .trim() - Removes spaces from both front and end of a string and returns a new string.
// -- .trimEnd() - Removes spaces from at the end of a string and returns a new string.
// -- .trimStart() - Removes spaces from at the start of a string and returns a new string.