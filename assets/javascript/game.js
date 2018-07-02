//These are my variables defined upfront//

var gameWords = ["css", "bootstrap", "javascript", "mongo", "html", "jquery", "function", "variable", "array", "object", "scope"];


//This is the first function that will generate a random Game Word selected from the gameWords array//

function phrase(){
    rand = Math.floor(Math.random()*gameWords.length);
    word = gameWords[rand];
    console.log(word);
}
phrase()

//This will split the selected Game Word into a set of characters 

var chars = word.split('');
console.log(chars);
var char1 = chars[0];
var char2 = chars[1];
var char3 = chars[2];
var char4 = chars[3];
var char5 = chars[4];
var char6 = chars[5];
var char7 = chars[6];
var char8 = chars[7];
var char9 = chars[8];
var char10 = chars[9];

//This will place the individual letters of each word on the spots on the board for the hangman game//

if (char1 === undefined){
}
else {
var char1Div = document.getElementById("letter1");
var char1Text = document.createTextNode(char1);
char1Div.appendChild(char1Text);
}

if (char2 === undefined){
}
else {
var char2Div = document.getElementById("letter2");
var char2Text = document.createTextNode(char2);
char2Div.appendChild(char2Text);
}

if (char3 === undefined){
}
else {
var char3Div = document.getElementById("letter3");
var char3Text = document.createTextNode(char3);
char3Div.appendChild(char3Text);
}

if (char4 === undefined){
}
else {
var char4Div = document.getElementById("letter4");
var char4Text = document.createTextNode(char4);
char4Div.appendChild(char4Text);
}

if (char5 === undefined){
}
else {
var char5Div = document.getElementById("letter5");
var char5Text = document.createTextNode(char5);
char5Div.appendChild(char5Text);
}

if (char6 === undefined){
}
else {
var char6Div = document.getElementById("letter6");
var char6Text = document.createTextNode(char6);
char6Div.appendChild(char6Text);
}

if (char7 === undefined){
}
else {
var char7Div = document.getElementById("letter7");
var char7Text = document.createTextNode(char7);
char7Div.appendChild(char7Text);
}

if (char8 === undefined){
}
else {
var char8Div = document.getElementById("letter8");
var char8Text = document.createTextNode(char8);
char8Div.appendChild(char8Text);
}

if (char9 === undefined){
}
else {
var char9Div = document.getElementById("letter9");
var char9Text = document.createTextNode(char9);
char9Div.appendChild(char9Text);
}

if (char10 === undefined){
}
else {
var char10Div = document.getElementById("letter10");
var char10Text = document.createTextNode(char10);
char10Div.appendChild(char10Text);
}

//Finally we want to set those letters to be transparent to that the player doesn't know what to guess!//

function transparentFunction() {
    var x = document.getElementsByClassName("letter");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "transparent";
    }
}
transparentFunction();

function revealFunction1() {
    var x = document.getElementById("letter1");
    x.style.color = "black";
}

function revealFunction2() {
    var x = document.getElementById("letter2");
    x.style.color = "black";
}

function revealFunction3() {
    var x = document.getElementById("letter3");
    x.style.color = "black";
}

function revealFunction4() {
    var x = document.getElementById("letter4");
    x.style.color = "black";
}

function revealFunction5() {
    var x = document.getElementById("letter5");
    x.style.color = "black";
}

function revealFunction6() {
    var x = document.getElementById("letter6");
    x.style.color = "black";
}

function revealFunction7() {
    var x = document.getElementById("letter7");
    x.style.color = "black";
}

function revealFunction8() {
    var x = document.getElementById("letter8");
    x.style.color = "black";
}

function revealFunction9() {
    var x = document.getElementById("letter9");
    x.style.color = "black";
}

function revealFunction10() {
    var x = document.getElementById("letter10");
    x.style.color = "black";
}

//Now we're going to start getting into the game of guessing the letters!//

var guesses = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

//First add 1 to my number of guesses
var numberGuesses = document.getElementById("number-of-guesses");
var guessesText = document.createTextNode(guesses);
numberGuesses.appendChild(guessesText);

// Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

//Reveals the correct letters that have been pressed
//alphabet["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var i;
//for (i=0; i < alphabet.lenth; i++){

    if (userGuess === char1){
        revealFunction1();
    }

    else if (userGuess === char2){
        revealFunction2();
    }

    else if (userGuess === char3){
        revealFunction3();
    }

    else if (userGuess === char4){
        revealFunction4();
    }

    else if (userGuess === char5){
        revealFunction5();
    }

    else if (userGuess === char6){
        revealFunction6();
    }

    else if (userGuess === char7){
        revealFunction7();
    }

    else if (userGuess === char8){
        revealFunction8();
    }

    else if (userGuess === char9){
        revealFunction9();
    }

    else if (userGuess === char10){
        revealFunction10();
    }

    else {
        guesses++;
    }

    if (guesses > 10){
        guesses=0;
        alert("Game Over!");
        phrases();
    }

}




