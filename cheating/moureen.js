$(document).ready(function() {

  var lives = 0;
  var numWins = 0;
  var numLosses = 0;
//  var WordsArray = ["larynx", "leg", "nose", "ear", "head", "foot", "shoulder"];
  var WordsArray = ["air","aquifer","atmosphere","biodegradable","biodiversity","biohazard","biosphere","blackwater","condensation","contaminate","conservation","climate","cloud","deforestation","dirt","ecology","ecoterrorism","emissions","environment","evaporation","hurricane","green","greenhouse","landfill","meteorology","moon","monsoon","nature","oxygen","ozone","polution","preservation","rain","reclamation","recycling","reforestation","renewable","river","sanctuary","smog","sun","","sustainability","toxicity","tree","tropical","tsunami","typhoon","water"];
  var randomWord = "";      // randomly chosen word
  var anyLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var lettersInWord = [];     // determine what letters are actually in the word
  var numOfLtrsInWord = 0;    // calculate the # of letters in each randonWord
  var guessesStored = [];     // correctly guessed letters and/or underscores
  var incorrectLtrs = [];   // incorrectly guessed letters
  var qualifyAsLetter = true;

//  document.getElementById("letterIn").innerHTML = guessesStored.join(" ");

  function allLetter(inputtxt, isInputALetter) 
    { 

    var isInputALetter = false;

    for (var i=0; i < anyLetters.length; i++) {
      if (anyLetters[i] == inputtxt) {
          isInputALetter = true;
          qualifyAsLetter = true;
          console.log("Letter matched: " + inputtxt);
          i = anyLetters.length;
      }
      else {
        isInputALetter = false;
        qualifyAsLetter = false;
      }
    };

    };


  function startNewGame(){

 //  Resets game at beginning (each time they win or lose)

  console.log(" B RESET: RemGuess: " + lives + " guessesStored " + guessesStored +  " incorrectLtrs " + incorrectLtrs);

  lives = 9;
  guessesStored = [];
  incorrectLtrs = [];

  console.log(" A RESET: RemGuess: " + lives + " guessesStored " + guessesStored +  " incorrectLtrs " + incorrectLtrs);

 // Generate a ramdom word from an array of words (and store it in a variable)
  randomWord = WordsArray[Math.floor(Math.random() * WordsArray.length)];
  console.log(" we have this randomWord  " + randomWord);
  console.log("randomWord.length: " + randomWord.length + " should equal the following ");

  lettersInWord = randomWord.split("");
  console.log(lettersInWord);

  numberOfSpacesNeeded = lettersInWord.length;
  console.log(" numberOfSpacesNeeded: " + numberOfSpacesNeeded);

// each space has an underscore for the letters to guess   numberOfSpacesNeeded
  for (var i=0; i < numberOfSpacesNeeded; i++) {
    guessesStored.push("_");
    console.log(" Each Underscore " + guessesStored[i] + " " + i);
  };   //  end of for loop

	console.log(" Guess bank " + guessesStored);

  //  .join gets rid of the commas that we see above in Guess Bank
  //  Also, push items to the screen.
	document.getElementById("letterIn").innerHTML = guessesStored.join(" ");
	document.getElementById("lives").innerHTML = lives;
	document.getElementById("numWins").innerHTML = numWins;
	document.getElementById("numLosses").innerHTML = numLosses;
	document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs;

  } // end of startNewGame function 

// Create a function that takes in a letter argument and loops through the entire word // we are trying to match and sees if any of the letters match.

  function compareLetters(letter) {   // see if userguessed letter matches any letter

    var matchedUp = false;

    for (var i=0; i < randomWord.length; i++) {
      if (randomWord[i] == letter) {
          matchedUp = true;
          console.log("Letter matched: " + letter);
      }; // end of if
    };  // end of for

    if (matchedUp) {
      for (var i=0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
        console.log("assigning it to the i: " + i + " position");
          // assign it to a specific position in the array
                 guessesStored[i] = letter;
        }; // end of if
      }; // end of for
      console.log("end of matchedUp for and if");
    } // end of if (matchedUp)
    
    else {    
      console.log("qualifyAsLetter " + qualifyAsLetter) ;
      console.log("q5q lives: " + lives);
     
      // Don't automatically push to incorrect list (only if it is not already in there)

      if (incorrectLtrs.length === 0) {
    	   incorrectLtrs.push(letter);     
    	   console.log("Pushed the heck out of it")                  
         lives--;						
      }
      else {
	      console.log("Before FOR Loop Length:" + incorrectLtrs.length + " ltr: " + letter);
		    var alreadyguessed = false;
        for (var index=0; index < incorrectLtrs.length; index++) {
			     if (incorrectLtrs[index] === letter) {
				      alreadyguessed = true;
				      index = incorrectLtrs.length; // get out of this loop
			     }  // end of if
		    };  // end of for
		
		    console.log("alreadyguessed: " + alreadyguessed);

		    if (!alreadyguessed) {          //  If it has not been guessed, then deduct and push
	         incorrectLtrs.push(letter);
	         lives--;						
		    }  // end of if
      }  // end of else tied with this if (incorrectLtrs.length === 0) 
	  }  // end of else tied with (matchedUp)
  }   // end of compareLetters function;


  function WinOrLoseGame() {
    console.log(" numWins: " + numWins + " numLosses: " + numLosses + " lives: " + lives);

    // Screen interactions
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("letterIn").innerHTML = guessesStored.join(" ");
    document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs.join(" ");
    console.log ("Compare A: " + randomWord + " to B: " + guessesStored);

    var mergedCorrectLtrs = guessesStored.join("");
    console.log("mergedCorrectLtrs: " + mergedCorrectLtrs);

  // win and loss counters below
    if (randomWord == mergedCorrectLtrs) {
    numWins++;

    alert("You Won this round!!  As you guessed, the word was: " + randomWord + "!  Press <Enter> to play a new round");

    document.getElementById("numWins").innerHTML = numWins;
    document.getElementById("letterIn").innerHTML = guessesStored.join(" ");
    console.log("guessesStored: when it SHOULD RESET " + guessesStored);
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("numLosses").innerHTML = numLosses;
    document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs;

    startNewGame();

    }

    else if (lives == 0) {
      numLosses++;
      alert("So sorry!  You have lost this round.  The word was: " + randomWord + "!  Press <Enter> to play a new round");

      document.getElementById("numLosses").innerHTML = numLosses;

      startNewGame();
    }  // end of else if (lives == 0)
  };  // end of function WinOrLoseGame

//  ******************      AND SO IT BEGINS     *******************

  startNewGame();   // This is where the game starts/restarts and resets variables


// get your first input from user
  document.onkeyup = function() {
    var userGuess = event.key.toLowerCase();
    console.log("userGuess after toLowerCase: " + userGuess);

// validating if the input is a valid letter

    qualifyAsLetter = true;
    console.log("This is the daggone letter " + userGuess);
    allLetter(userGuess, qualifyAsLetter);

    console.log(" qualifyAsLetter -outside: " + qualifyAsLetter);
 
    if (qualifyAsLetter) {