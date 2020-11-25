var readlineSync = require('readline-sync');
const chalk = require('chalk');

questionOne = {
  question: "Who is Tony Stark?\n1. Thor\n2. Iron Man\n3. Hulk\n",
  answer: 2
}

questionTwo = {
  question: "What Tony stark said to his daughter once?\n1. love you 1000\n2. love you 2000\n3. love you 3000\n4. love you 4000\n",
  answer: 3
}

var quesList = [questionOne, questionTwo];
var userName = readlineSync.question("Enter your Name: ");
console.log("\nInstructions\nOnly use option no. corresponding to your answer.\n");
var score = [];
function quizGame(quesObject){
  var gameScore = 0;
  
  for(i=0;i<quesObject.length;i++){
    var userAns = readlineSync.question(quesObject[i].question);
    if(userAns == quesObject[i].answer){
      gameScore = gameScore+1;
      console.log(chalk.bold.green("Correct Answer!!"));
    }else{
      console.log(chalk.bold.red("Sad! wrong answer, but you can surely try again"));
    }
    console.log("------------------------------");
  }
  score.push(gameScore);
  console.log(chalk.yellow("Thanks for playing: ",userName));
  console.log(chalk.yellow("your score is: "+gameScore+"/"+quesList.length));
  var max = score.reduce(function(a, b) {
    return Math.max(a, b);
  });
  console.log(chalk.green("your highest score is: ",max));

  var playAgain = readlineSync.question("Want to play again? [yes/no] \n");
  if(playAgain == "yes"){
    quizGame(quesObject);
  }else{
    console.log("see you soon, Thanks for playing :)) ");
  }
}

quizGame(quesList);


