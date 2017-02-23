// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
// Array of Word Options (all lowercase).
alert('Play Game in Full Screen with Audio On');
var wordOptions= ["centenario", "aventador", "egoista", "gallardo", "diablo", "islero", "miura", "countach"];
// Computer selected solution will be held here.
var selectWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersinWord = [];
// This will be the number of blanks we show based on the solution. (_ _ _ _ _ _ _ _)
var numBlanks= 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses.
var wrongGuesses = [];
// Holds the letters guessed
var lettersGuessed = "";

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
// ==================
// startGame()
// It's how we we will start and restart the game.
function startGame() {
	selectWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
	lettersinWord=selectWord.split("");
	numBlanks = lettersinWord.length;


	//reset
	guessesLeft = 9;
	wrongGuesses = [];
	blanksAndSuccesses = [];


	//populate blanks and successes 
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_ ")	
	};

	//change HTML to reflect round conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
	//test
	console.log(selectWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
};
function checkLetters(letter){
	var isLetterInWord = false;
	for ( var i=0;i<numBlanks; i++){
		if(selectWord[i] == letter){
			isLetterInWord=true;
		}
	}
	if(isLetterInWord){
	for ( var i=0;i<numBlanks; i++){
		if(selectWord[i] == letter){
			blanksAndSuccesses[i]=letter;
		}
	}
}
		else{
			wrongGuesses.push(letter);
			guessesLeft--
		}
		console.log(blanksAndSuccesses);
};

function roundComplete(){
	console.log("win " + winCount +"loss "+ lossCount + "guesses left "+ guessesLeft );
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
	if (lettersinWord.toString() == blanksAndSuccesses.toString()){
		winCount++;
		alert("you won");
		document.getElementById("winCounter").innerHTML = winCount;
		startGame();
	}
	else if (guessesLeft==0){
		lossCount++;
		alert("you lost");
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
	}



}

// MAIN POCESS
// -----------------




startGame();

document.onkeyup= function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
};













