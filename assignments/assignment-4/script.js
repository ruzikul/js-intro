// 1. Arithmetic Operation

var num1 = 10;
var num2 = 15;

console.log('Addition:', num1 + num2) // 25
console.log('Subtraction:', num1 - num2) // -5
console.log('Multiplacation:', num1 * num2) // 150
console.log('Division:', num1 / num2) // 0.6666666666666666


// ----------------------------------------------- //
// 2. Increment and Decrement

num1++;
console.log(num1)

num2--;
console.log(num2)


// ----------------------------------------------- //
// 3. Assignment Operations

var total = 0;
total += num1;
total += num2;
console.log(total)

num1 -= total;
console.log(total)

total *= num2;
console.log(total)

total /= num1;
console.log(total)



// ----------------------------------------------- //
// 4. Comparison Operations

console.log(num1 > num2) // false
console.log(num1 <= num2) // true

var result = num1 * num2 >= total;
console.log(result) // true


// ----------------------------------------------- //
// 5. Understanding Variable Assignment

var result = num1 + num2 - total;
console.log(result)