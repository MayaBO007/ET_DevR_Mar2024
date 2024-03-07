// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: 'כמה זמן יימשך המשחק?',
        choiceA: '12 ימים',
        choiceB: 'שבועיים',
        choiceC: 'חודש',
        correct: "A"
    }, {
        question: 'כמה פעמים צריך לשחק במשחק בכל יום?',
        choiceA: 'פעם אחת',
        choiceB: 'כמה שיותר',
        choiceC: "שלוש פעמים",
        correct: "A"
    }, {
        question: "כמה זמן נמשך המשחק בכל יום?",
        choiceA: "שעה",
        choiceB: "כמה שרוצים",
        choiceC: 'עד 5 דקות',
        correct: "C"
    }
    , {
        question: 'מה חשוב לזכור לפני שמתחילים לשחק?',
        choiceA: 'שום דבר',
        choiceB: 'לוודא שיש לי 5 דקות פנויות ולהעביר את הטלפון למצב "נא לא להפריע"',
        choiceC: 'לעשות מתיחות',
        correct: "B"
    }, {
        question: 'מה השווי של כל לחיצה?',
        choiceA: 'נקודה אדומה/כחולה אחת',
        choiceB: 'הסכום משתנה והוא יוצג בכל פעם בהתאם',
        choiceC: '1 מטבע זהב',
        correct: "A"
    }, {
        question: 'מתי צריך ללחוץ על הכפתור האדום או הכחול?',
        choiceA: 'כשעוברת מכונית, אין לחץ זמן',
        choiceB: 'כאשר עוברת מכונית אדומה/כחולה ולפני שהמכונית הבאה מופיעה',
        choiceC: 'צריך ללחוץ רק על הכפתור האדום תמיד',
        correct: "B"
    }, {
        question: 'מה עושים כשעוברת מכונית צהובה?',
        choiceA: 'כלום',
        choiceB: 'לוחצים על שני הכפתורים יחד',
        choiceC: 'לוחצים על הכפתור האדום ומחכים למכונית הבאה',
        correct: "B"
    }, {
        question: 'כיצד אוכל להרוויח כסף אמיתי?',
        choiceA: 'אין אפשרות להרוויח כסף אמיתי במשחק',
        choiceB: 'פשוט להיכנס לאפליקציה, לא חייבים לשחק במשחק',
        choiceC: 'פשוט להיכנס לאפליקציה ולשחק. בסיום המשחק ישנו בונוס!',
        correct: "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
//let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    //    renderCounter();
    //TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    document.getElementById("progress").style.display = "inline";
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            // clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        // clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(106, 153, 78)";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(188, 71, 73)";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "inline";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    scoreButton = null;
    if (scorePerCent > 99) {
        document.getElementById("ins12").style.display = "inline";
        document.getElementById("ins12").addEventListener("click", function () {
            setTimeout(() => {
                platform.goToUrl("days/training/training.html");
            }, 200)
        });
    } else {
        document.getElementById("scoreContainer").onclick = function () {
            scoreButton = 1;
            if (scoreButton == 1) {
                scoreDiv.style.display = "none";
                progress.innerHTML = "";
                runningQuestion = 0;
                count = 0;
                score = 0;
                scoreButton = 0;
                qIndex = 0;
                runningQuestion = 0;
                startQuiz();
            }
        }
    }
}





















