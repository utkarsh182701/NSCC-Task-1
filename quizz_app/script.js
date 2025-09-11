// --- Get HTML Elements ---
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit-btn');
const backButton = document.getElementById('back-btn');
const quizContentElement = document.getElementById('quiz-content');
const resultsElement = document.getElementById('results');
const controlsElement = document.querySelector('.controls');
const progressTrackerElement = document.getElementById('progress-tracker');
const highScoreContainer = document.getElementById('high-score-container');

// --- Quiz State ---
let currentQuestionIndex = 0;
let userAnswers = {};
let questionsForCurrentQuiz = [];
let allQuestions = [];
let highScore = 0;

// --- Functions ---
async function setupQuiz() {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) throw new Error('Network response was not ok');
        allQuestions = await response.json();
        // Load high score from localStorage
        highScore = localStorage.getItem('quizHighScore') || 0;
        startQuiz();
    } catch (error) {
        questionElement.innerText = "Failed to load questions. Please try again later.";
        console.error('There was a problem fetching the questions:', error);
    }
}

function startQuiz() {
    // Hide results and show quiz with animation
    resultsElement.classList.add('fade-out');
    setTimeout(() => {
        resultsElement.classList.add('hidden');
        
        questionsForCurrentQuiz = allQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
        currentQuestionIndex = 0;
        userAnswers = {};

        quizContentElement.classList.remove('hidden');
        quizContentElement.classList.remove('fade-out');
        controlsElement.classList.remove('hidden');
        progressTrackerElement.classList.remove('hidden');
        
        showQuestion(questionsForCurrentQuiz[currentQuestionIndex]);
    }, 300); // Match CSS transition duration
}

function showQuestion(question) {
    if (!question) {
        questionElement.innerText = "No more questions.";
        answerButtonsElement.innerHTML = '';
        return;
    }
    
    // Update progress tracker
    progressTrackerElement.innerText = `Question ${currentQuestionIndex + 1} of ${questionsForCurrentQuiz.length}`;

    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) button.dataset.correct = answer.correct;
        if (userAnswers[currentQuestionIndex] === answer.text) button.classList.add('selected');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    updateControls();
}

function updateControls() {
    backButton.classList.toggle('hidden', currentQuestionIndex === 0);
    submitButton.textContent = (currentQuestionIndex === questionsForCurrentQuiz.length - 1) ? 'Submit' : 'Next Question';
}

function showPreviousQuestion() {
    quizContentElement.classList.add('fade-out');
    setTimeout(() => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(questionsForCurrentQuiz[currentQuestionIndex]);
        }
        quizContentElement.classList.remove('fade-out');
    }, 300);
}

function selectAnswer(e) {
    userAnswers[currentQuestionIndex] = e.target.innerText;
    Array.from(answerButtonsElement.children).forEach(button => button.classList.remove('selected'));
    e.target.classList.add('selected');
}

function showResults() {
    quizContentElement.classList.add('fade-out');
    progressTrackerElement.classList.add('hidden');
    
    setTimeout(() => {
        quizContentElement.classList.add('hidden');
        controlsElement.classList.add('hidden');
        
        resultsElement.classList.remove('hidden');
        resultsElement.classList.remove('fade-out');
        resultsElement.innerHTML = '';

        let score = 0;
        let resultsHTML = '<h2>Your Results</h2>';

        questionsForCurrentQuiz.forEach((question, index) => {
            const correctAnswer = question.answers.find(answer => answer.correct).text;
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === correctAnswer;
            if (isCorrect) score++;

            resultsHTML += `
                <div class="results-question">
                    <p>${index + 1}. ${question.question}</p>
                    <span>Your answer: ${userAnswer || 'Not answered'}</span> - 
                    <span class="${isCorrect ? 'correct' : 'incorrect'}">
                        <span class="result-icon"></span>
                        ${isCorrect ? 'Correct' : `Incorrect (Correct was: ${correctAnswer})`}
                    </span>
                </div>
            `;
        });
        
        // Check and update high score
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('quizHighScore', highScore);
            highScoreContainer.innerHTML = `🏆 New High Score: ${highScore} / ${questionsForCurrentQuiz.length}`;
        } else {
            highScoreContainer.innerHTML = `Your High Score: ${highScore} / ${questionsForCurrentQuiz.length}`;
        }

        const finalScoreHTML = `<h2 class="results-score">You scored ${score} out of ${questionsForCurrentQuiz.length}!</h2>`;
        
        resultsElement.innerHTML = finalScoreHTML;
        resultsElement.prepend(highScoreContainer);
        resultsElement.innerHTML += resultsHTML;

        const retestButton = document.createElement('button');
        retestButton.innerText = 'Re-test';
        retestButton.id = 'retest-btn';
        retestButton.addEventListener('click', startQuiz);
        resultsElement.appendChild(retestButton);
    }, 300);
}

// --- Event Listeners ---
submitButton.addEventListener('click', () => {
    quizContentElement.classList.add('fade-out');
    setTimeout(() => {
        if (currentQuestionIndex < questionsForCurrentQuiz.length - 1) {
            currentQuestionIndex++;
            showQuestion(questionsForCurrentQuiz[currentQuestionIndex]);
        } else {
            showResults();
            return; // Exit here to prevent fade-in below
        }
        quizContentElement.classList.remove('fade-out');
    }, 300);
});

backButton.addEventListener('click', showPreviousQuestion);

// --- Start the Quiz ---
setupQuiz();

