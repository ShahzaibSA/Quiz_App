
window.onload = function () {
    showQuestion(questionCounter);
}

let questions = [
    {
        q1: 1,
        question: "Which is the country with the biggest population in Europe ?",
        answer: "Russia.",
        option: [
            "France.",
            "Germany.",
            "Russia.",
            "Chinese.",
        ]

    },
    {
        q2: 2,
        question: "What is the full form of GUI ?",
        answer: "Graphical User Interface.",
        option: [
            "Graphical User Interface.",
            "Graphical User interaction.",
            "Graphics Uniform interaction.",
            "None of the above.",
        ]
    },
    {
        q3: 3,
        question: "From which language is the word ‘ketchup’ derived ?",
        answer: "Chinese.",
        option: [
            "France.",
            "Russia.",
            "Germany.",
            "Chinese.",
        ]

    },
    {
        q4: 4,
        question: "What is the full form of E-mail ?",
        answer: "Electronic Mail.",
        option: [
            "Electric Mail.",
            "Electronic Mail.",
            "Engine Mail.",
            "None of the above."
        ]
    },
    {
        q5: 5,
        question: "How many states make up the United States of America?",
        answer: "50 States.",
        option: [
            "45 States",
            "40 States.",
            "60 States.",
            "50 States.",
        ]
    },
    {
        q6: 6,
        question: "What is the full form of RAM ?",
        answer: "Randon Access Memory.",
        option: [
            "Randomly Access Memory.",
            "Run Accept Memory.",
            "Randon Access Memory.",
            "None of these.",
        ]
    },
    {
        q7: 7,
        question: "What colour are the four stars on the flag of New Zealand ?",
        answer: "Red.",
        option: [
            "Yellow.",
            "Red.",
            "Blue.",
            "Sky Blue.",
        ]
    }
];

var questionCounter = 0;
var quizPoints = 0;
var countCorrectAnswer = 0;

function nextQuestion() {
    //          Checking Answer
    let userAnswer = document.querySelector("li.selected").innerHTML;
    if (userAnswer == questions[questionCounter].answer) {
        quizPoints = quizPoints + 10;
        sessionStorage.setItem("Points", quizPoints);

        countCorrectAnswer = countCorrectAnswer + 1;
        sessionStorage.setItem("Correct Answer", countCorrectAnswer)
    }


    //          Result
    if (questionCounter == questions.length - 1) {
        sessionStorage.setItem("Time", `${minutes} : ${seconds}`)
        location.href = "end.html";
        return;
    }


    questionCounter++;
    showQuestion(questionCounter)
}

function showQuestion(questionCounter) {
    let question = document.getElementById("question");
    question.innerHTML = `
        Q ${questionCounter + 1}. ${questions[questionCounter].question}
    <ul class="option-list">
        <li class="option text-center">${questions[questionCounter].option[0]}</li>
        <li class="option text-center">${questions[questionCounter].option[1]}</li>
        <li class="option text-center">${questions[questionCounter].option[2]}</li>
        <li class="option text-center">${questions[questionCounter].option[3]}</li>
    </ul>`;

    toggleSelected();

}

function toggleSelected() {
    let options = document.querySelectorAll("li.option");

    for (let i = 0; i < options.length; i++) {
        options[i].onclick = function () {
            for (let j = 0; j < options.length; j++) {
                if (options[j].classList.contains("selected")) {
                    options[j].classList.remove("selected");
                }
            }
            options[i].classList.add("selected");
        }
    }
}




//      ---------- User Name ----------

let userNamee = document.getElementById("user-name");
let userNameee = sessionStorage.getItem("name");
userNamee.innerHTML = userNameee;


