// -- sumUp -- 

function sumUp(num1, num2, num3, num4, num5) {
    var total = 0;
    if (num1 % 2 === 0) {
        total += num1;
    }
    if (num2 % 2 === 0) {
        total += num2;
    } 
    if (num3 % 2 === 0) {
        total += num3;
    }
    if (num4 % 2 === 0) {
        total += num4;
    }
    if (num5 % 2 === 0) {
        total += num5;
    }
    return total;
 }
 console.log(sumUp(6, 3, 8, 3, 4)); 
 console.log(sumUp(8, 6, 5, 3, 10)); 

// -- max --

function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
    return num2;
    } else {
    return num3;
} 
}
console.log(max(100, 90, 80));

// -- min --

function min(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
    return num2;
    } else {
    return num3;
} 
}
console.log(min(100, 90, 80));

// -- longestString --

function longestString(string1, string2, string3) {
    if (string1.length > string2.length && string1.length > string3.length) {
        return string1;
    } else if (string2.length > string1.length && string2.length > string3.length) {
    return string2;
    } else {
    return string3;
} 
}
console.log(longestString("hello", "world", "spaces here")); // Outputs: "spaces here"
console.log(longestString("short", "medium length", "longest one here")); // Outputs: "longest one here"
console.log(longestString("one", "two", "three")); // Outputs: "three"

// -- shortestString --

function shortestString(string1, string2, string3) {
    var removedCharStr1 = string1.replace("?", "")
    var removedCharStr2 = string2.replace("!", "")
    var removedCharStr3 = string3.replace(".", "")
    if (removedCharStr1.length < removedCharStr2.length && removedCharStr1.length < removedCharStr3.length) {
        return removedCharStr1;
    } else if (removedCharStr2.length < removedCharStr1.length && removedCharStr2.length < removedCharStr3.length) {
        return removedCharStr2;
    } else {
        return removedCharStr3;
    }
}
console.log(shortestString("hello?", "wo!rld", "yes.")); // Outputs: "yes"
console.log(shortestString("how are you?", "I am fine!", "What about you?")); // Outputs: "I am fine"
console.log(shortestString("this is a test?", "short!", "even shorter.")); // Outputs: "short"