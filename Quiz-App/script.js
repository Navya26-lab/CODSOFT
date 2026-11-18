
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Earth", "Mars", "Mercury", "Venus"],
        answer: "Mercury"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O2", "O", "Ox", "Om"],
        answer: "O"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;

    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;

        optionElement.addEventListener('click', () => {
            selectOption(optionElement, option);
        });

        optionsContainer.appendChild(optionElement);
    });

    selectedOption = null;
}

function selectOption(optionElement, option) {
    clearSelectedOption();

    optionElement.classList.add('selected');
    selectedOption = option;
}

function clearSelectedOption() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
}

function submitAnswer() {
    if (selectedOption === null) {
        alert('Please select an answer!');
        return;
    }

    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    document.getElementById('score').textContent =
        `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;

    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}
