// --- isOdd --
function isOdd(number) {
    var odd = number % 2 !== 0;
    console.log(`Odd number : ${odd}`)
}
isOdd(3); // true
isOdd(4); // false

// --- isEven -- 

function isEven(number) {
    var even = number % 2 === 0;
    console.log(`Even number : ${even}`)
}
isEven(2); // Logs: true
isEven(5); // Logs: false

// --- isIncludes -- 

function isIncludes(mainStr, targetStr) {
    var mainStrLow = mainStr.toLowerCase();
    var targetStrLow = targetStr.toLowerCase();
    var result = mainStrLow.includes(targetStrLow) !== -1;
    console.log(result)
}
isIncludes("Hello world", "WORLD"); // Logs: true

// --- minValue -- 

function minValue(number1, number2) {
    if (number1 === number2) {
        console.log(number1 + ", " + number2)
    } else if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}
minValue(40, 30);

// --- maxValue -- 

function maxValue(number1, number2) {
    if (number1 === number2) {
        console.log(number1 + ", " + number2)
    } else if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}
maxValue(20, 10);

// --- power -- 

function power(base, exponent) {
    var result = base * exponent;
    console.log(result);
}
power(5, 5);

// --- isProductGreater -- 

function isProductGreater(num1, num2, num3) {
    var product = num1 * num2 * num3;
    var sum = num1 + num2 + num3;
    console.log(product > sum)
}
isProductGreater(1, 2, 3); // Logs: false
isProductGreater(5, 6, 2); // Logs: true

// --- swapFirstAndLastChars -- 

function swapFirstAndLastChars(string) {
    if (string.length > 1) {
        var firstCharacter = string[0];
        var middle = string.slice(1, string.length -1);
        var lastCharacter = [string.length -1];
        var newStr = lastCharacter + middle + firstCharacter;
        console.log(newStr);
    } else {
        console.log(string);
    }
} 

// --- firstHalf -- 

function firstHalf(string) {
    var half = Math.floor(string.length / 2)
    console.log(string.slice(0, half))
}
firstHalf("hello"); // Logs: "he"
firstHalf("four"); // Logs: "fo" 

// --- getInitials --

function getInitials(fullName) {
    var firstSpaceIdx = fullName.indexOf(' ');
    var lastSpaceIdx = fullName.lastIndexOf(' ');
    var initial1 = fullName[0];
    var initial2 = fullName[firstSpaceIdx + 1];
    var initial3 = fullName[lastSpaceIdx + 1];
    var initials = initial1 + initial2 + initial3;
    console.log(initials.toUpperCase());
}

getInitials("Barack Hussein Obama")