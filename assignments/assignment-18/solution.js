// -- 1 --

function multiplyAllDigits(num1, num2) {
    var numStr1 = num1.toString();
    var numStr2 = num2.toString();
    var multiply1 =
        parseInt(numStr1[0]) * parseInt(numStr1[1]) * parseInt(numStr1[2]);
    
    var mulitply2 =
        parseInt(numStr2[0]) * parseInt(numStr2[1]) * parseInt(numStr2[2]);
    return multiply1 * mulitply2;
}
console.log(multiplyAllDigits(123, 678)); 
// Expected output: 2016
// Explanation: 1*2*3*6*7*8 = 2016

console.log(multiplyAllDigits(2, 56));
// Expected output: 60
// Explanation: 2*5*6 = 60

console.log(multiplyAllDigits(111, 999)); 
// Expected output: 729
// Explanation: 1*1*1*9*9*9 = 729

// -- 2 --

function sumUpToBoth(num1, num2) {
    var number1 = 0;
    for (var i = 1; i <= num1; i++) {
        number1 += i;
    }
    var number2 = 0;
    for (var i = 1; i <= num2; i++) {
        number2 += i;
    }
    var total = number1 + number2;
    return total;
}
sumUpToBoth(5, 7); // Outputs: 40 (1+2+3+4+5 + 1+2+3+4+5+6+7)
sumUpToBoth(3, 4); // Outputs: 16 (1+2+3 + 1+2+3+4)
sumUpToBoth(6, 3); // Outputs: 27 (1+2+3+4+5+6 + 1+2+3)

// -- 3 --



// -- 4 --



// -- 5 --

function countDivisibleByThreeOrFive(num) {
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 !== 0) sum += 1;
        else if (i % 5 === 0 && i % 3 !== 0) sum += 1;
    }
    return sum;
}

countDivisibleByThreeOrFive(15); // Outputs: 6 (3, 5, 6, 9, 10, 12)
countDivisibleByThreeOrFive(10); // Outputs: 4 (3, 5, 6, 9)
countDivisibleByThreeOrFive(30); // Outputs: 11 (3, 5, 6, 9, 10, 12, 18, 20, 21, 24, 27)