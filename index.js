var readlineSync = require('readline-sync');
const chalk = require('chalk');

questionOne = {
  question: "Who is my favorite superhero?\n1. Thor\n2. Iron Man\n3. Hulk\n",
  answer: 1
}

questionTwo = {
  question: "Who is my favorite singer?\n1. Hariharan\n2. AR Rehman\n3. Suresh Wadekar\n4. All of the above\n",
  answer: 4
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


