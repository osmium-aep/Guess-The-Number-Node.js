const prompt = require('prompt-sync')();

let randomNumber = Math.floor((Math.random() * 100) +1);
let guess;
let chances = 0;


do{
guess = prompt("Guess a number between 0 and 100>_ ");
  if(guess > randomNumber){
console.log("Your Guess is Too high. Try Again");
  }else if(guess < randomNumber){
    console.log("Your Guess is Too low. Try Again");
  }else if(guess == randomNumber){
    console.log("You guessed it right! Good Job!");
    chances++;
  }
}while(guess != randomNumber);
console.log(`You took ${chances} chances to guess the number`);
