const quizData = [
    {
        question: 'what is ineuron.ai',
        a: 'Data science company',
        b: 'Education startup',
        c: 'IT company',
        d: 'All of the above',
        correct: 'd'
    },
    {
        question: 'Which is not the framework of Javascript',
        a: 'ReactJS',
        b: 'Laravel',
        c: 'VueJS',
        d: 'Angular',
        correct: 'b'
    },
    {
        question: 'Indian IT minister',
        a: 'Amit shah',
        b: 'Jayshankar prasad',
        c: 'Rahul gandhi',
        d: 'Rajeev chandra sekhar',
        correct: 'c'
    },
    {
        question: 'Most famous Programming language?',
        a: 'Python',
        b: 'C++',
        c: 'Java',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'which is the correct framework of javascript',
        a: 'ReactJS',
        b: 'Laravel',
        c: 'Springboot',
        d: 'Dino',
        correct: 'a'
    },

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});