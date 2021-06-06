var readlineSync=require("readline-sync");
var score=0;
var userName=readlineSync.question("What is your name? ");
console.log("Welcome "+ userName +" to DO YOU KNOW Rutuja?");
//play function
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

if(userAnswer===answer)
{
  console.log("right!");
  score=score+1;
}
else
{
  console.log("Wrong!");
}
console.log("current score: ",score);
console.log("-----------");
}
//Array of the objects
var questions=[{
  question:"Where do I live? ",
  answer:"Kopargaon"
},
{
  question:"My fevorite superhero would be?",
  answer:"Hardik Sharma"
}]
//loop
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAY! You SCORED:",score);
