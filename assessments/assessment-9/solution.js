console.log("Aziz");

// function compareRandomArrays(min, max) {

//     var getRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return getRandomNumber
// } 
    
  
//     var array1 = [];
//     var array2 = [];
//     for (var i = 0; i < 4; i++) {
//       array1(getRandomNumber(33, 43));
//       array2(getRandomNumber(33, 43));
//     }

//     var allMatch = true;
//     for (var j = 0; j < 4; j++) {
//       if (array1[j] !== array2[j]) {
//         allMatch = false;
//         break;
//       }
//     }
  
//     if (allMatch) {
//       return true;
//     } else {
//       var sum = 0;
//       for (var k = 0; k < 4; k++) {
//         sum += array1[k] + array2[k];
//       }
//       return sum;
//       console.log(compareRandomArrays());
//     }
  
function compareRandomArrays(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var array1 = [];
    var array2 = [];
    var match = true;
    for (var i = 0; i < 4; i++) {
        array1[i] = randomNumber(33, 43);
        array2[i] = randomNumber(33, 43);
        if (array1[i] !== array2[i]) {
            match = false;
        }
    }

    if (match) {
        return true;
    } else {
        var sum = 0;
        for (var j = 0; j < 4; j++) {
            sum += array1[j] + array2[j];
        }
        return sum;
    }
}

// Example 1: Arrays Match
// Generated Array 1: [33, 40, 42, 33]
// Generated Array 2: [33, 40, 42, 33]
// Expected Output: true
console.log(compareRandomArrays()); // Output: true (if arrays match exactly as shown)
// Example 2: Arrays Do Not Match
// Generated Array 1: [34, 41, 33, 43]
// Generated Array 2: [35, 42, 34, 44]
// Expected Output: 312 (sum of all numbers)
console.log(compareRandomArrays()); // Output: 306 (if arrays are as shown)