var startEl = document.querySelector("#startQuiz");
var firstEl = document.querySelector("#firstQuestion");
var score = 0;


var questions = [{
question:"what was the first language that we learned?",
answers:["HTML", "JavaScript", "CSS"],
correctAnswer:"HTML"
},

]

function displayQuestion(questionIndex) {
   var currentQuestion = questions[questionIndex];
   var questionContainer = document.querySelector("#questionContainer");

   questionElement.textContent = currentQuestion.question;

   currentQuestion.answers.forEach(answer =>{
      answerItem.textContent=answer;
      answerList.appendchild(answerItem);
   });  
}
answerList.addEventListener("click", function(event) {
   var selectedAnswer = event.target.textContent;
   var correctAnswer = currentQuestion.correctAnswer;
   
   if (selectedAnswer === correctAnswer) {
      displayQuestion(questionIndex + 1);
      score++
   } else {
    //section to subtract time from timer 
    displayQuestion(questionIndex + 1);
   }

   if (questionIndex === questions.length -1 ) {
      //this is where the quiz should end 
   }
   
 });
 

startEl.addEventListener("click", firstQuestion);