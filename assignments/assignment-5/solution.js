var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

// literal method

var literal = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`
console.log(literal)


//------------------------------------------------------//
// concat() method

var concat = part1.concat(" ", part2, " ", part3, " ", part4, " ", part5, " ", author)
console.log(concat);


//------------------------------------------------------//
// + operator

var addition = part1 + " " + part2 + " " + part3 + " " + part4 + " " + part5 + " " + author;
console.log(addition);


//------------------------------------------------------//
// += operator

var result = "";
result += part1;
result += " " + part2;
result += " " + part3;
result += " " + part4;
result += " " + part5;
result += " " + author;
console.log(result)