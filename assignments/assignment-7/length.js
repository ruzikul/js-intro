//-----------------------------------------------\\
             // length
var post1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."

var post2 = "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."

var comparisonResult
comparisonResult = post1.length === post2.length;
console.log(comparisonResult); // false


//-----------------------------------------------\\
            // index

var greeting = "Hello, World!"
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);

// -- accessing last characters
console.log(greeting.length) // 12
console.log(greeting[11]);
console.log(greeting[12]);


//-----------------------------------------------\\
            // concat

var greetings = "Hello, "
var name = "Alice"

var welcomeMessage = greetings.concat(name);
console.log(welcomeMessage)


//-----------------------------------------------\\
            // endsWith

var announcement = "Today's event starts at 3 PM!"
var news = announcement.endsWith('PM!');
console.log(news); // true



//-----------------------------------------------\\
            // includes

"Looking for the hidden gems in the city."
var working = "Looking for the hidden gems in the city.".includes('hidden');
console.log(working); // true


//-----------------------------------------------\\
            // indexOf

"Repeat after me: JavaScript is fun!";
console.log("Repeat after me: JavaScript is fun!".indexOf('JavaScript'));


//-----------------------------------------------\\
            // replace
var feedback = "This product is good!";
console.log(feedback.replace("good", 'excellent'));


//-----------------------------------------------\\
            // toUpperCase and toLowerCase

var shout = "can you hear me?";
console.log(shout.toUpperCase());

"PLEASE LOWER YOUR VOICE";
console.log("PLEASE LOWER YOUR VOICE".toLowerCase());


//-----------------------------------------------\\
            // .trim(), .trimStart(), and .trimEnd()

" JavaScript is awesome! "

console.log(" JavaScript is awesome! ".trim()) //JavaScript is awesome! 
console.log(" JavaScript is awesome! ".trimStart()) //JavaScript is awesome! 
console.log(" JavaScript is awesome! ".trimEnd()) // JavaScript is awesome!


//-----------------------------------------------\\
            // slice -- Did not understand

var str = "Hello, world!"

console.log(str.slice(7));
var noHello = str.slice('7');
console.log(noHello);
var noWorld = str.slice('-1');
console.log(noWorld);