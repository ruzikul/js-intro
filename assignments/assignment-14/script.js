// --- isOdd --
function isOdd(number) {
    var odd = number % 3 === 0;
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
    var isIncludesStr = mainStr.includes(targetStr)
    console.log(isIncludesStr)
}
isIncludes("Hello world", "WORLD"); // Logs: true
isIncludes("Look here", "there"); // Logs: false
