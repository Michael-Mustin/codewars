// Create an array and sum the numbers of the array.
let myArr = [10, 20, 30, 40];
console.log(myArr.reduce((acc, c) => acc + c, 0));

// Create a function that takes in an array of numbers
// Return a new array of numbers that is every original number squared
// Hint... What do you use when you need to return a new array?
let newArr = (nums) => nums.map((num) => num ** 2);

// Declare a variable, assign it a string of multiple words,
// replace every "jr. dev" with "software engineer",
// and print it to the console
let myJob = "I am a jr. dev at Red Hat.";
console.log(myJob.replaceAll("jr. dev", "software engineer"));

// Create a function that takes in a string
// Alert if the string is a palindrome or not
function palindromeChecker(str) {
  if (str === str.split("").reverse().join("")) {
    console.log("Is a palindrome");
  } else {
    console.log("Is not a palindrome");
  }
}
palindromeChecker("poop");

// Create a dog object that has four properties and three methods.
class MakeCar {}

function rockPaperScissors() {}

// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question.
// let str = "is this a question?";
// if (str.endsWith("?")) {
//   console.log("Is a question?");
// } else {
//   console.log("Not a question");
// }
const str = "Is this the best week ever?";
console.log(str.endsWith("?"));

// Create a function that takes string
// Print the reverse of that string to the console.

function strReverse(str) {
  console.log(str.split("").reverse().join(""));
}

strReverse("michael");

// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(playerChoice) {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Create a function that takes in a choice
// (rock, paper, or scissors) and determines if they won a game
// of rock paper scissors against a bot using the above function.
function checkWin(playerChoice) {
  let botChoice = rockPaperScissors();
  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    console.log("You Win!");
  } else if (playerChoice === botChoice) {
    console.log("Draw!");
  } else {
    console.log("You Lose!");
  }
}

checkWin("paper");
