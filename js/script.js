const quizQuestions = [{
        question: "HTML stands for ?",
        a: "Hyper text mark up language",
        b: "Hppps",
        c: "None of the above",
        d: " ALL",
        rigthAns: "ans1"
    },
    {
        question: "Which symbol is used in Html tags ?",
        a: "-",
        b: "#",
        c: "None of the above",
        d: "<>",
        rigthAns: "ans4"
    },
    {
        question: "Which is the right tag of anchor links?",
        a: "<a>",
        b: "<p>",
        c: "<br>",
        d: "None of the above",
        rigthAns: "ans1"
    },
    {
        question: "Which of the following is an example of an empty element ?",
        a: "<img></img>",
        b: "<img> </img>",
        c: "<img/>",
        d: "</img>",
        rigthAns: "ans3"
    },
    {
        question: "How to write an HTML comment?",
        a: "//This ia an HTML comment",
        b: "/*This is an HTML comment*/",
        c: "</This ia an HTML comment/>",
        d: "<!-- This is an HTML comment -->",
        rigthAns: "ans4"
    }
];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");

const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

// Writing an Arrow Function which  sets the question & options fields of html  
const loadQuestion = () => {
    // question.innerHTML=quizQuestions[0].question;
    // question.innerHTML = quizQuestions[questionCount].question;    
    let list = quizQuestions[questionCount];
    question.innerText = list.question;
    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

loadQuestion();


// Writing an function to check which input raido buttons are checked and to written them. 
const getCheckedAnswer = () => {
    let ans;
    answers.forEach((i) => {
        if (i.checked) {
            ans = i.id;
        }
    });
    return ans;
};


// Writing a function for deselecting the checked options 
const uncheckAnswers = () => {
    answers.forEach((i) => { i.checked = false; })
}



//Event Listener -->  When we click on submit Button
submit.addEventListener("click", () => {
    const x = getCheckedAnswer();
    if (x === quizQuestions[questionCount].rigthAns) {
        score++;
    }
    questionCount++;
    uncheckAnswers();
    if (questionCount < quizQuestions.length) {
        loadQuestion();
    } else {
        showScore.innerHTML =
            `
        <h3 class="h3">Your Score is  ${score}/${quizQuestions.length}    :)</h3>
        <button class="btn" onClick="location.reload()">Play   Again</button>
      `
        showScore.classList.remove("score");
    }
})