const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
        question: "Though they sound happy, what animal's laugh is a reaction to being threatened?",
        answers: [
            {text: "Ox", correct: false},
            {text: "Woodpecker", correct: false},
            {text: "Hyena", correct: true},
            {text: "Baboon", correct: false},
        ],
        fact: "Hyenas produce a high-pitched series of short giggle-like sounds when threatened or frustrated.",
        fSource: "britannica.com",
    },
    {
        question: "Capable of exceeding 186 miles per hour, what is the fastest creature in animal kingdom?",
        answers: [
            {text: "Cheetah", correct: false},
            {text: "Black marlin", correct: false},
            {text: "Peregrine falcon", correct: true},
            {text: "Horsefly", correct: false},
        ],
        fact: "peregrine falcons catch their prey by fyling high and diving down at incredible speeds.",
        fSource: "britannica.com",
    },
    {
        question: "What's the first thing a caterpillar usually eats after it's born?",
        answers: [
            {text: "Other Bugs", correct: false},
            {text: "Grass", correct: false},
            {text: "Its Own Eggshell", correct: true},
            {text: "Cheerios", correct: false},
        ],
        fact: "Newborn caterpilliars typically get their first meal from their own eggshells.",
        fSource: "kids.nationalgeographic.com",
    },
    {
        question: "What is a male zebra called?",
        answers: [
            {text: "Stag", correct: false},
            {text: "Stallion", correct: true},
            {text: "Buck", correct: false},
            {text: "Bull", correct: true},
        ],
        fact: "Male zebras are called stallions, and female zebras are called mares.",
        fSource: "animalfactguide.com",
    },
    {
        question: "Known for its intelligance, which dog breed has been found capable of understanding more than a thousand words?",
        answers: [
            {text: "Cocker Spaniel", correct: false},
            {text: "Dachshund", correct: false},
            {text: "Border Collie", correct: true},
            {text: "French Bulldog", correct: false},
        ],
        fact: "A South Carolina Border Collie named Chaser earned worldwide fame for being able to recognize and react to 1,022 different nouns.",
        fSource: "britannica.com",
    },
    {
        question: "The trumpeter swan, North America's largest waterfowl weighs about how many pounds?",
        answers: [
            {text: "30", correct: true},
            {text: "10", correct: false},
            {text: "50", correct: false},
            {text: "70", correct: false},
        ],
        fact: "The trumpeter swan weighs about 30 pounds. That's twice the weight of the average Thanksgiving turkey.",
        fSource: "kids.nationalgeographic.com",
    },
    {
        question: "Which animal species can live in extremes of both heat and cold, from -20 °F to 120 °F?",
        answers: [
            {text: "Chuckwalla iguanas", correct: false},
            {text: "Polar bear", correct: false},
            {text: "Emperor penguin", correct: false},
            {text: "Bactrain camel", correct: true},
        ],
        fact: "Camels have a reputation for being desert animals but Bactrian camels(the two-humped variety) have adapted to the tremendous heat of China's Gobi Desert as well as the bitter cold of the Mongolian steppes.",
        fSource: "britannica.com",
    },
    {
        question: "How many hours a day do lions spend sleeping or resting?",
        answers: [
            {text: "1-4 hours", correct: false},
            {text: "5-9 hours", correct: false},
            {text: "10-15 hours", correct: false},
            {text: "16-20 hours", correct: true},
        ],
        fact: "I knew i had some similarities to a lion",
        fSource: "animalfactguide.com",
    },
    {
        question: "The tiniest animal with a backbone is a what?",
        answers: [
            {text: "frog", correct: true},
            {text: "bird", correct: false},
            {text: "fish", correct: false},
            {text: "lizard", correct: false},
        ],
        fact: "On average, the tiny frog Paedophryne amauensis measures only 7.7 millimeters long.",
        fSources: "britinnica.com"
    },

];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(){
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex/ quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answerContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if(answersDisabled) return

    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"

    Array.from(answerContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button == selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }
    }, 600)
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Great";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good";
    } else {
        resultMessage.textContent = "Not Good";
    }
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    score = 0

    startQuiz()
}