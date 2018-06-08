// vars defined
var wins = 0;
var losses = 0;
var randomLetter = "";
var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var unUsables = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", ";", "'", "|", "]", "[", " ",];
var userGuess = "";
var turnsLeft = 8;
var alreadyGuessed = [];
var gameRun = false;
var playAgainMessage = "Would you like to play again? Press Start to begin!"

//starting data pushed to html
document.getElementById("turnsLeft").textContent = turnsLeft;
document.getElementById("playAgainMessage").textContent = "";
document.getElementById("startButton").addEventListener("click", function(){
    beginGame();
})

// game function
function beginGame() {
    var turnsLeft = 8;
    var alreadyGuessed = [];
    var gameRun = true;
    document.getElementById("playAgainMessage").textContent = "";
    document.getElementById("guessedLetters").textContent = alreadyGuessed;
    document.getElementById("turnsLeft").textContent = turnsLeft;

//random letter from list
    randomLetter = Math.floor(Math.random() * alphabet.length);
    randomLetter= alphabet[randomLetter];
    console.log(randomLetter);
    
//define event key press
    document.addEventListener("keypress", function(event){
    userGuess = event.key; 

//compare keypress to random letter, and its correct
    while(gameRun == true){

        if(turnsLeft > 1 && userGuess == randomLetter && gameRun == true){
        wins++; alert("You guessed correct!");
        document.getElementById("gameWins").textContent = wins;
        randomLetter = Math.floor(Math.random() * alphabet.length);
        randomLetter= alphabet[randomLetter];
        alreadyGuessed = [];
        turnsLeft = 8;
        document.getElementById("guessedLetters").textContent = alreadyGuessed;
        document.getElementById("playAgainMessage").textContent = playAgainMessage;
        gameRun = false;
        }
    // key was used already
        else if(alreadyGuessed.includes(userGuess)){
        alert("You already tried that one!");
        break;
        }
    // key was not a l
        else if(unUsables.includes(userGuess)){
        alert("I don't think that's a letter! Try picking a letter!")
        break;
        }
    //keypress was not correct    
        else if(turnsLeft > 1 && userGuess !== randomLetter && gameRun == true){
        turnsLeft--;
        alreadyGuessed.push(userGuess);
        console.log(alreadyGuessed);
        document.getElementById("turnsLeft").textContent = turnsLeft;
        document.getElementById("guessedLetters").textContent = alreadyGuessed;
        break;
        }
    // out of turns, round is over  
        else{
        alert("Sorry, out of guesses!");
        losses++;
        document.getElementById("gameLosses").textContent = losses;
        alreadyGuessed = [];
        turnsLeft = 8;
        document.getElementById("guessedLetters").textContent = alreadyGuessed;
        document.getElementById("turnsLeft").textContent = turnsLeft;
        document.getElementById("playAgainMessage").textContent = playAgainMessage;
        gameRun = false;
        }
    }})}