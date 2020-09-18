
//      ---------- Total Question ----------

let userName = document.getElementById("name");
let user_Name = sessionStorage.getItem("name");
userName.innerHTML = user_Name;

//      ---------- Total Question ----------

let totalQuestion = document.getElementById("total-question");
totalQuestion.innerHTML = questions.length

//      ---------- Attempts ----------

let attempt = document.getElementById("attempt");
attempt.innerHTML = questions.length

//      ---------- Correct Answer ----------

let totalCorrectAnswer = document.getElementById("correct-answer")
let correctAnswer = sessionStorage.getItem("Correct Answer");
totalCorrectAnswer.innerHTML = correctAnswer;

//      ---------- Points ----------

let totalScore = document.getElementById("total-score");
let totalPoints = sessionStorage.getItem("Points");
totalScore.innerHTML = totalPoints; 

//      ---------- Time Taken ----------

let timeTaken = document.getElementById("time-taken");
let time_taken = sessionStorage.getItem("Time");
timeTaken.innerHTML = time_taken;


function backToHome(){
    location = "index.html"
}