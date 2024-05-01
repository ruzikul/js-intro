// -- 1 --

function sumExclusiveRange(min, max) {
    var sum = 0;
    if (max < min) {
        return "Not valid range"
    }

    for (var i = min + 1; i < max; i++) {
        sum += i;
    } return sum;
}

console.log(sumExclusiveRange(1, 5)); // Outputs: 9 (2+3+4)
console.log(sumExclusiveRange(5, 1)); // Outputs: "Not valid range"
console.log(sumExclusiveRange(3, 7)); // Outputs: 18 (4+5+6)

// -- 2 --

function sumEvenNumbers(n) {
    var sum = 0;
    
    for (var i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            continue; 
        }
       sum += i;
    }
    return sum;
}

console.log(sumEvenNumbers(10)); // Outputs: 30 (2+4+6+8+10)
console.log(sumEvenNumbers(7));  // Outputs: 12 (2+4+6)
console.log(sumEvenNumbers(15)); // Outputs: 56 (2+4+6+8+10+12+14)

// -- 3 --

function factorial(n) {
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

console.log(factorial(5)); // Outputs: 120 (5*4*3*2*1)
console.log(factorial(3)); // Outputs: 6 (3*2*1)
console.log(factorial(7)); // Outputs: 5040 (7*6*5*4*3*2*1)

// -- 4 -- 

function sumUpToMax(num1, num2, num3) {
    var maxNum = num1;
    if (num2 > maxNum) {
        maxNum = num2;
    }
    if (num3 > maxNum) {
        maxNum = num3;
    }
    if (maxNum <= 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 1; i <= maxNum; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumUpToMax(3, 5, 2)); // Outputs: 15 (sum of numbers from 1 to 5)
console.log(sumUpToMax(10, 5, 3)); // Outputs: 55 (sum of numbers from 1 to 10)
console.log(sumUpToMax(1, 2, 3)); // Outputs: 6 (sum of numbers from 1 to 3)
console.log(sumUpToMax(-1, -2, -3)); // Outputs: 0 (no positive numbers up to the max)
console.log(sumUpToMax(7, 0, 5)); // Outputs: 0 (presence of zero invalidates the sum) ??????

// -- 5 --

function sumDivisibleByFour(min, max) {
    var sum = 0;
    for (var i = min; i <= max; i++) {
        if (i % 4 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumDivisibleByFour(1, 10)); // Outputs: 12 (4+8)
console.log(sumDivisibleByFour(4, 20)); // Outputs: 60 (4+8+12+16+20)
console.log(sumDivisibleByFour(3, 15)); // Outputs: 24 (4+8+12)