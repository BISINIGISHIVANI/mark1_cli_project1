var readlineSync=require("readline-sync");
var ownerOfQuiz="hi,its me Shivani \nwelcomes you... let's start quiz about me? ";
console.log(ownerOfQuiz);
console.log("--------")
var score=0;
var userAnswer=readlineSync.question("Enter Your Name start sample Quiz? ");

console.log("welcome! "+userAnswer+" ,let me know how well you know me? ");
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("your right!");
    score=score+1;
  }else{
    console.log("your wrong!");
    score=score-1;
  }
  console.log("your score is:"+score);
}
play("do i like coffee or tea? ","tea");
var question=[{
  question:"what is my favourite color ? ",  
  answer:"red"
},{
  question:"what is my full name? ",
  answer:"bisinigi shivani"
},{
   question:"where do i live? ",
   answer:"guntakal"
},{
  question:"which game i can play better? ",
   answer:"table tennis"
},{
  question:"what is my First pet name? a.chan b.guni c.doke d:blacky ",
  answer:"blacky"
}]
for(j=0;j<question.length;j=j+1){
  var currentQuestion=question[j];
  play(currentQuestion.question,currentQuestion.answer)
}
var myQuiz=[{
  name:"Sai",
  highScore:"5"
}]
console.log("My current high scores for quiz beaten,Congratulations")
for(i=0;i<myQuiz.length;i=i+1){
  var currentHighScore=myQuiz[i];
  console.log(currentHighScore.name,currentHighScore.highScore);
  if(currentHighScore.highScore<score===true){
    console.log(userAnswer+" sent me your score you beaten highscores to update my quiz and welcome you qualified level one")
  console.log("let's start 2nd level...")
  var question=[{
    question:"which fruit i like to prefer to eat? ",
    answer:"apple"
  },{
    question:"which school i completed my schooling? ",
    answer:"indiragandhi school"
  },{
    question:"do i like icecream? ",
    answer:"yes"
  },{
    question:"what is my favourite plant? ",
    answer:"rose plant"
  },{
    question:"well tell which cartoon I like? ",
    answer:"Tom and Jerry"
  }];
  for(i=0;i<question.length;i=i+1){
  var firstLevel=question[i];
  play(firstLevel.question,firstLevel.answer);
  }
  }else{
    console.log("you are not beaten highscore!")
  }
}
console.log("hey! "+userAnswer+" ,your final score is: "+score);
console.log(userAnswer+" ,Thanks for Participating.Hope you Enjoyed It...")
