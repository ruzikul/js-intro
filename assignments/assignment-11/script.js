// --- Password Correctness --- \\

var createdPassword = "Secret";
var password2 = "Secret2";

if (createdPassword === password2) {
    console.log("Access Granted.");
} else {
    console.log("Access Denied. Incorrect Password.");
}

// --- Age Verifacation --- \\

var ageRequirement = 21;
var age = 20;

if (ageRequirement > age) {
    console.log("You now have access to the content!");
} else console.log("Access restricted. You must be 21 or over to view this content.");


// --- Checking Input Length --- \\

var user = "Aziz";
var userLength = user.length

if (user.length >= 5) {
    console.log("Valid username.")
} else { 
    console.log("Username must be at least 5 characters long.")
}

// --- Quiz --- \\
// True or False: Chrome is better than Safari.

var correctAnswer = "Yes";
var typedAnswer = "No";

if (correctAnswer === typedAnswer) {
    console.log("Correct!!")
} else {
    console.log("Wrong")
}
