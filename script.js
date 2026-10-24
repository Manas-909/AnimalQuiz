const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
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
const mammalCard = document.getElementById("mammal-card");
const fishCard = document.getElementById("fish-card");
const factContainer = document.getElementById("fact-container");
const factText = document.getElementById("fact-text");
const factSource = document.getElementById("fact-source");
const nextButton = document.getElementById("next-btn");

const mammalQuestions = [
    {
        question: "Though they sound happy, what animal's laugh is a reaction to being threatened?",
        answers: [
            {text: "Ox", correct: false},
            {text: "Woodpecker", correct: false},
            {text: "Hyena", correct: true},
            {text: "Baboon", correct: false},
        ],
        fact: "Hyenas produce a high-pitched series of short giggle-like sounds when threatened or frustrated.",
        fSource: "Source: britannica.com",
    },
    {
        question: "Capable of exceeding 186 miles per hour, what is the fastest creature in animal kingdom?",
        answers: [
            {text: "Cheetah", correct: false},
            {text: "Black marlin", correct: false},
            {text: "Peregrine falcon", correct: true},
            {text: "Horsefly", correct: false},
        ],
        fact: "Peregrine falcons catch their prey by fyling high and diving down at incredible speeds.",
        fSource: "Source: britannica.com",
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
        fSource: "Source: kids.nationalgeographic.com",
    },
    {
        question: "What is a male zebra called?",
        answers: [
            {text: "Stag", correct: false},
            {text: "Stallion", correct: true},
            {text: "Buck", correct: false},
            {text: "Bull", correct: false},
        ],
        fact: "Male zebras are called stallions, and female zebras are called mares.",
        fSource: "Source: animalfactguide.com",
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
        fSource: "Source: britannica.com",
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
        fSource: "Source: kids.nationalgeographic.com",
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
        fSource: "Source: britannica.com",
    },
    {
        question: "How many hours a day do lions spend sleeping or resting?",
        answers: [
            {text: "1-4 hours", correct: false},
            {text: "5-9 hours", correct: false},
            {text: "10-15 hours", correct: false},
            {text: "16-20 hours", correct: true},
        ],
        fact: "I knew i had some similarities to a lion.",
        fSource: "Source: animalfactguide.com",
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
        fSource: "Source: britinnica.com"
    },
    {
        question: "The largest “town” home to what animal was an underground colony measuring 25,000 square miles, found in Texas?",
        answers: [
            {text: "prairie dog", correct: true},
            {text: "capybara", correct: false},
            {text: "meerkat", correct: false},
            {text: "beaver", correct: false},
        ],
        fact: "Prairie dogs are actually a type of squirrel, not canine. Many different extended families of prairie dogs live together in the same “town,” usually about 247 acres (0.4 square mile) in size.",
        fSource: "Source: britinnica.com"
    },

];

const fishQuestions = [
    {
        question: "Growing up to 59 feet (18 meters) long, which is the world’s largest living fish?",
        answers: [
            {text: "manta ray", correct: false},
            {text: "sailfish", correct: false},
            {text: "marlin", correct: false},
            {text: "whale shark", correct: true},
        ],
        fact: "The whale shark is the largest fish alive today. It can grow up to 18 meters long.",
        fSource: "Source: britannica.com",
    },
    {
        question: "Which of these “fish” is actually a fish?",
        answers: [
            {text: "crayfish", correct: false},
            {text: "starfish", correct: false},
            {text: "swordfish", correct: true},
            {text: "jellyfish", correct: false},
        ],
        fact: "Jellyfish are technically plankton, and starfish are echinoderms. Both are invertebrates (lacking backbones), and neither are fish.",
        fSource: "Source: britannica.com",
    },
    {
        question: "The special structures in seahorses' skin cells that allow them to change color are called?",
        answers: [
            {text: "tentacles", correct: false},
            {text: "chromatophores", correct: false},
            {text: "ossicles", correct: false},
            {text: "ossicones", correct: true},
        ],
        fact: "Seahorses can move each of their eyes independently, allowing them to look in two different directions at the same time.",
        fSource: "Source: animalfactguide.com",
    },
    {
        question: "In seahorses, which parent carries the developing embryos in a brood pouch?",
        answers: [
            {text: "the male", correct: true},
            {text: "both parents", correct: false},
            {text: "the female", correct: false},
            {text: "neither", correct: false},
        ],
        fact: "In seahorses, it’s the male that becomes pregnant! The female deposits her eggs into the male’s brood pouch, where he carries them until they hatch.",
        fSource: "Source: freudly.ai",
    },
    {
        question: "What kind of creature sleeps with one eye open?",
        answers: [
            {text: "Clownfish", correct: false},
            {text: "Sharks", correct: true},
            {text: "Goldfish", correct: false},
            {text: "Seahorses", correct: false},
        ],
        fact: "Sharks have been on Earth for approximately 450 million years, making them older than dinosaurs and even older than trees.",
        fSource: "Source: freudly.ai",
    },
    {
        question: "To which family do most goldfish belong?",
        answers: [
            {text: "tuna family", correct: false},
            {text: "salmon family", correct: false},
            {text: "crap family", correct: true},
            {text: "Shark family", correct: false},
        ],
        fact: "The goldfish is an ornamental aquarium and pond fish of the carp family native to East Asia.",
        fSource: "Source: britannica.com",
    },
    {
        question: "Which of these fish is known as a living fossil?",
        answers: [
            {text: "angelfish", correct: false},
            {text: "coelacanth", correct: true},
            {text: "puffer", correct: false},
            {text: "cat fish", correct: false},
        ],
        fact: "The coelacanth is known as a living fossil. It was thought to have become extinct about 60 million years ago, but in 1938 a living member was netted in the Indian Ocean near Madagascar.",
        fSource: "Source: britannica.com",
    },
    {
        question: "Which of these fish is dangerous to eat and is called fugu in Japan?",
        answers: [
            {text: "barracula", correct: false},
            {text: "pomfret", correct: false},
            {text: "piranha", correct: false},
            {text: "puffer", correct: true},
        ],
        fact: "The puffer belong to a family of fishes noted for their ability to inflate themselves into a globular form when disturbed.",
        fSource: "Source: britannica.com",
    },
    {
        question: "What is also known as a 'ten-pounder'?",
        answers: [
            {text: "dolphin", correct: false},
            {text: "tarpon", correct: false},
            {text: "ladyfish", correct: true},
            {text: "perch", correct: false},
        ],
        fact: "The ladyfish is also called a ten-pounder. It is a primarily tropical coastal marine fish that is slender and pikelike in form and covered with fine silver scales.",
        fSource: "Source: britannica.com",
    },
    {
        question: "What is the name for the scientific study of fish?",
        answers: [
            {text: "entomology", correct: false},
            {text: "ornithology", correct: false},
            {text: "oncology", correct: false},
            {text: "ichthyyology", correct: true},
        ],
        fact: "Ichthyology is the scientific study of fish.",
        fSource: "Source: britannica.com",
    },

];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let quizQuestions = mammalQuestions;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

mammalCard.addEventListener("click", () => selectCategory("mammals"));
fishCard.addEventListener("click", () => selectCategory("fishes"))
restartButton.addEventListener("click", restartQuiz);
nextButton.addEventListener("click", nextQuestion);

function startQuiz(){
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}

function showQuestion() {
    factContainer.classList.remove("show");
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

function selectCategory(category) {

    if (category === "mammals") {
        quizQuestions = mammalQuestions;
    } else if (category === "fishes") {
        quizQuestions = fishQuestions;
    }

    totalQuestionsSpan.textContent = quizQuestions.length;
    maxScoreSpan.textContent = quizQuestions.length;

    startQuiz()
}

function selectAnswer(event) {
    if(answersDisabled) return

    answersDisabled = true

    const currentQuestion = quizQuestions[currentQuestionIndex];
    factText.textContent = currentQuestion.fact;
    factSource.textContent = currentQuestion.fSource;
    factContainer.classList.add("show");

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
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "Excellent!";
    } else if (percentage >= 70) {
        resultMessage.textContent = "Great!";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good!";
    } else if (percentage >= 20) {
        resultMessage.textContent = "Not Bad!";
    }else {
        resultMessage.textContent = "Maybe try again";
    }
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    startScreen.classList.add("active");
    score = 0
}