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
  question:"My fevorite hero would be? ",
  answer:"Hardik sharma"
},
{
  question:"My nick would be? ",
  answer:"Rutu"
},
{
  question:"My fevorite dish would be? ",
  answer:"Pani puri"
},
{
  question:"My ideal would be? ",
  answer:"Chatrapati shivaji maharaj"
},
{
  question:"My fevorite heroine would be? ",
  answer:"Mithila palkar"
},
{
  question:"My fevorite drink would be? ",
  answer:"Tea"
},
{
  question:"My fevorite book would be? ",
  answer:"Think and grow rich"
},
{
  question:"My fevorite pet would be? ",
  answer:"Cat"
},
{
  question:"Do I prefer peace and quiet? ",
  answer:"Yes"
}
]
//loop
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAY! You SCORED:",score);
