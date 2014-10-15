var prompt = require('sync-prompt').prompt;

var dollarsRemaining = 100;
  
  while(dollarsRemaining > 0) {
    var bet = prompt("place a bet between 5 and 10 dollars");
    var guess = prompt("choose a number from 0 to 10");
    var secretNum = Math.floor(Math.random()*11);
    
    if(guess === secretNum){
      dollarsRemaining = dollarsRemaining + (bet * 2);
      console.log("The number was " + secretNum + "! You double your bet! You have " + dollarsRemaining + " dollars left!");
    } else if(guess == secretNum++ || guess == secretNum--){
     console.log("The number was " + secretNum + "! Off by 1! You get to keep your bet though. You have " + dollarsRemaining + " dollars left!");
    } else {
      dollarsRemaining = dollarsRemaining - bet;
      console.log("The number was " + secretNum + "! You lose! You have " + dollarsRemaining + " dollars left!");
    }
  }