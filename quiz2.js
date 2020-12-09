var readlineSync = require("readline-sync")
const chalk = require('chalk');
const log = console.log;
var score =0;

console.log(chalk.yellow('LADIES AND GENTLEMEN, FASTEN YOUR SEAT BELT AND GET READY FOR A ROLLER COASTER RIDE 👻'))
var userName = readlineSync.question(chalk.black.bgYellow.bold("Kripiya Apna Shubh Name Bataye - \n"))
log(chalk.cyanBright('HELLO ' + userName + chalk.cyanBright('!') + chalk.bgCyan.white(' lets test your knowledge about F.R.I.E.N.D.S😁 ') ))

function quiz (question,answer)
{
  var userAnswer = readlineSync.question(question)
  if (userAnswer === questions[i].answer)
  {
    score = score + 1;
    console.log(chalk.bold.green("Amazinggg!🥳 and Your Score is ",score));

  }else{
    console.log(chalk.bold.red("Arrrrr...wrong😐"))

    console.log("****************************")
    console.log ("CURRENT SCORE : ",score)
    
  }

}
//array
var questions = [
  {
     question: "Q1 - Who is the Youngest Friend🙇 ? \n(a) phoebe \n(b) rachel \n(c) ross\n" ,
     answer : "b"
  },
  {
    question : "Q2 - How many babies where born in the show 🤔 ? \n(a) six \n(b) seven \n(c) five\n",
    answer : "b"
  },
  {
    question : "Q3 - What is joey's ethnic origin 🤓 ? \n(a) french \n(b) American \n(c) Italian\n",
    answer : "c"
  },
  {
    question : "Q4 - What is the real name of Joey's Agent 🤪 ?\n(a) Kim \n(b) Estelle \n(c) June Gable\n",
    answer : "c"
  },
  { 
    question : "Q5 - What was the name of Monica's boyfriend who tried to become Ultimate fighting campion💪 ? \n(a) Bob \n(b) Pete \n(c) Alan\n",
    answer : "b"
  }
]
//loop 
for (var i = 0;i < questions.length;i++)
{
  var currentQues = questions[i];
  quiz (currentQues.question,currentQues.answer)
}
console.log(chalk.bold.magenta.bgWhite("Hurrahh! 💃 Your final score is : ",score))
console.log("\n")
console.log(chalk.magentaBright("High Scores : "))

// array

var highscore =[
  {
    name : "anonymous",
    score : "2"
  },
  {
    name : "barkha",
    score : "3"
  },
  {
    name : "shruti",
    score : "5"
  },
  {
    name : "rahul",
    score : "3"
  }
]
console.table(highscore)




