var startEl = document.querySelector("#startQuiz");
var questionEl = document.querySelector("#displayQuestion");
var introEl = document.querySelector("#introSection");
var answerEl = document.querySelector("#answerList");
var timerEl = document.querySelector("#timer");
var initialsEl = document.querySelector("#initials");
var questionSectionEl = document.querySelector("#questionSection");
var highScoreEl = document.querySelector("#highScore");
var clockId = 0;
var questionIndex = 0;
var score = 0;

// these are all of the questions for te quiz
var questions = [{
question:"what was the first language that we learned?",
answers:["HTML", "JavaScript", "CSS"],
correctAnswer:"HTML"
},
{
   question:"What language is primarily used to change the look of a program?",
   answers:["CSS", "JavaScript"," HTML"],
   correctAnswer:"CSS"
},

{
   question:"What method changes JSON to a string? ",
   answers:["Stringify", "Java", "nodejs"],
   correctAnswer:"Stringify "

},
{
   question:"what do you use to input an h2 into HTML using java script?",
   answers:["createElement", "spaceBar", "backspace"],
   correctAnswer:"createElement"

},
{
   question:"use a ___ to link a button to a certain event. ",
   answers:["addEventListener", "querySelector", "string"],
   correctAnswer:"addEventListener"

},
{
   question:" this comes on after the first set of curly brackets in an ifelse statement. ",
   answers:["else", "and", "but"],
   correctAnswer:"else"

},


]
//this is how much the timer starts with 
var remainingTime = questions.length*15


function displayQuestion(event) {
   
   introEl.classList.add("hide");

   clockId = setInterval(function() {
      remainingTime--;
      timerEl.textContent = remainingTime;

      if (remainingTime === 0){
         clearInterval(clockId);
         timerEl.textContent = " "
      }
   }, 1000);

      
   var currentQuestion = questions[questionIndex];

   questionEl.textContent = currentQuestion.question;
   answerEl.textContent = ""
   currentQuestion.answers.forEach(answer =>{
      var answerItem = document.createElement("li")
      answerItem.textContent=answer;
      answerEl.appendChild(answerItem);
   });  
}

   answerEl.addEventListener("click", function(event) {
   var selectedAnswer = event.target.textContent;
   var currentQuestion = questions[questionIndex];
   var correctAnswer = currentQuestion.correctAnswer;
   //this if statement makes any changes to the quiz 
   if (selectedAnswer === correctAnswer) {
    //this section says to increase the score if the answer is correct
      questionIndex++
      displayQuestion();
      score++
   } else {
      
    //section to subtract time from timer if the answer is wrong
      remainingTime = remainingTime - 10
    questionIndex++
    displayQuestion();
   }

   if (questionEl === questions.length ) {
      //this is where the quiz should end 
      clearInterval(clockId);
      final();
   }
   
 });
//this section stops the timer and displays the score of the person taking quiz
 function final(){
   questionSectionEl.classList.add("hide");
   timerEl.textContent = " "
  var currentScore = document.createElement("h1")
  currentScore.textContent = "your Score is = " + score.textContent;
  highScoreEl.appendChild(currentScore);

 }
 

startEl.addEventListener("click", displayQuestion);