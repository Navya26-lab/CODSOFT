// Sample questions for the quiz
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"],
        answer: "Harper Lee"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Earth", "Mars", "Mercury", "Venus"],
        answer: "Mercury"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Silver", "Iron"],
        answer: "Oxygen"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    displayQuestion();
}

// Display a question
function displayQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(optionElement, option);
        optionsContainer.appendChild(optionElement);
    });
}

// Select an option
function selectOption(element, option) {
    clearSelectedOption();
    element.classList.add('selected');
    selectedOption = option;
}

// Clear previously selected option
function clearSelectedOption() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
}

// Submit the answer
function submitAnswer() {
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was ${correctAnswer}.`);
    }

    currentQuestionIndex++;
    selectedOption = null;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show the quiz results
function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${quizQuestions.length}.`;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}
