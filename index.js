var readlineSync = require('readline-sync');

var userName = readlineSync.question("Please enter your name for the quiz\n");
console.log("Hi " + userName + "! Lets see how well do you know these sitcoms\n");

var score = 0;

var QandA = [
  {  
     question : "who is ross's first wife?\n",
     answer : "carol",
  },

  {
    question  : "who is phoebe's husband?\n",
    answer : "mike",
  },

  {
    question : " what is jake peralta's fav movie in brooklyn 99?\n",
    answer : "die hard",
  },
  
  {
    question : "when does the heist take place in brooklyn 99 in general?\n",
    answer : "halloween",
  },
  
 {
  question : "Whats the name of jess's bestfriend in new girl?\n",
  answer : "cece",
 }
]

for(var i = 0 ; i < QandA.length ; i++)
{

var QandAt= QandA[i];
  test(QandAt.question, QandAt.answer)
}
function test(question,answer)
  {
    var userAnswer = readlineSync.question(question)
    if(userAnswer.toLowerCase() === answer)
    {
      console.log("you are right");
      score = score+1;
    }
    else
    {
      console.log("You are wrong");
      score = score;
    }
  }
    console.log("\nyou have scored:" + score);
    
    if(score >= 4)
    {
      console.log("well done");
    }
    else
    {
      console.log("seems like you are not a fan of sitcoms!, NVM!")
    }