var startEl = document.querySelector("#startQuiz");
var firstEl = document.querySelector("#firstQuestion");




var questions = [{
question:"what was the first language that we learned?",
answers:["HTML", "JavaScript", "CSS"],
correctAnswer:"HTML"
},

]


startEl.addEventListener("click", firstQuestion);