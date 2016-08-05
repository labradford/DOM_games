//Allow the user to put there name in before the game starts.
 //When the user has won the game, let the user know they have
  //won, using their name.
  var name;
  function getName() {
    name = document.getElementById("name").value;
  }

// Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  var randomNumber = Math.floor(Math.random() * (101 - 1)) + 1;
  //print out random number so we can test
  console.log(randomNumber);
//set the counter to zero
var count = 1;
//declare the function for the hilo game
function hilo() {
  // Create a var for user input
  var userGuess;
  //while loop counter is less than 8 and user and random numbers don't match
  while (count < 8 && (userGuess != randomNumber)) {
    //ask the username to guess a number from 1 to 100
    userGuess = parseInt(document.getElementById("userGuess").value);
    console.log(userGuess);
    //compares the count to see if it equals 7 guesses
    if (count === 7 ) {
      //give the user a message that they guessed too many incorrectly
      document.getElementById("gameOver").innerHTML = "Too many guesses. Sorry, " + name + " you LOSE!";
      break;
    }
    //checks the user input to see if it is a valid number
    if (isNaN(userGuess)) {
      document.getElementById("error").innerHTML = "Numbers only please";
      document.getElementById("userGuess").value = "";
      break;
    }
    //checks to make sure the user input is between 1 and 100
    if (userGuess <1 || userGuess>100) {
      document.getElementById("error").innerHTML = "Your guess needs to be between 1 and 100";
      document.getElementById("userGuess").value = "";
      break;
    }
    //log the count to make sure it is functioning properly
    console.log(count);
    // compares the user input to see if its greater than the random number
    if (userGuess > randomNumber) {
      //give the user a message that the guess is too high
      document.getElementById("error").innerHTML = "Your Guess is too high, Try Again";
      document.getElementById("userGuess").value = "";
      //increment the count by one
      count = count + 1;
      break;
    }
    //compare the user input with to see if its less  than the random number
    if (userGuess < randomNumber) {
      //give the user a message that the guess is too low
      document.getElementById("error").innerHTML = "Your Guess is too low, Try Again";
      document.getElementById("userGuess").value = "";
      //increment the count by one
      count = count + 1;
      break;
    }
    //compares the user input to see if it is equal to the random number
    if (userGuess === randomNumber) {
      //give the user a message that they won
      document.getElementById("win").innerHTML = "You WIN, " + name + "!";
      break;
    }

  }
  //alert("You are Done");
}
