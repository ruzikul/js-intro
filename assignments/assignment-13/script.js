// --- Time gen --

var timeGen = Math.floor(Math.random() * 86400);

// --- Time conversion --

var hours = Math.floor(totalSeconds / 3600);
var remainingSeconds = totalSeconds % 3600;
var minutes = Math.floor(remainingSeconds / 60);
var seconds = remainingSeconds % 60;


// --- Greeting Message Based on Time --

var randomTime = Math.floor(Math.random() * 24);

if (randomTime = 0 && randomTime <= 12) {
    console.log("Good Morning!")
} else if (randomTime >= 12 && randomTime <= 17) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!")
}
