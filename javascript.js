// GLOBAL VAL
// -----------------
alert('Play Game in Full Screen with Audio On');
var wordOptions= ["centenario", "aventador", "egoista", "gallardo", "diablo", "islero", "miura", "countach"];
var selectWord = "";
var lettersinWord = [];
var numBlanks= 0;
var blanksAndSuccesses = [];
var wrongGuesses = [" "];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
// ==================
function startGame() {
	selectWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
	lettersinWord=selectWord.split("");
	numBlanks = lettersinWord.length;


	//reset
	guessesLeft = 9;
	wrongGuesses = [" "];
	blanksAndSuccesses = [];


	//populate blanks and successes 
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_")	
	};

	//change HTML to reflect round conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses") .innerHTML = guessesLeft;
	document.getElementById("winCounter") .innerHTML = winCount;
	document.getElementById("lossCounter") .innerHTML = lossCount;
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













