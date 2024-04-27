// -- 1 --

function sumStrings(num1, num2) {
    var result = parseFloat(num1) + parseFloat(num2);
    return result;
}

console.log(sumStrings("123", "456"));
console.log(sumStrings("101", "899"));
console.log(sumStrings("333", "666"));

// -- 2 --


// -- 3 --


// -- 4 -- 

function multiplyHalves(intiger) {
    var splitHalves = intiger / 2;
    return splitHalves;
}

// -- 5 --

function isOddStringInteger(intiger) {
    var lengthOfOddStr = intiger.length % 2 !== 0;
    return lengthOfOddStr;
}

// -- 6 -- 

function roundAndConvert(num1) {
    var roundedNum1 = Math.round(num1);
    return roundedNum1.toString();
}