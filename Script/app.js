

function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
}


//      ---------- Total Question ----------
let totalQuestionsss = document.getElementById("total-questionssss");
totalQuestionsss.innerHTML = questions.length;



















