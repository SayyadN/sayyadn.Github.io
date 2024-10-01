const questions = {
    easy: [
        { question: "Which planet has the longest day?", answers: ["Venus", "Jupiter", "Earth", "Mars"], correct: 0 },
        { question: "How many planets are in our solar system?", answers: ["7", "8", "9", "10"], correct: 1 },
        { question: "What is the closest planet to the Sun?", answers: ["Mercury", "Venus", "Earth", "Mars"], correct: 0 },
        { question: "What is the name of our galaxy?", answers: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"], correct: 1 },
        { question: "Which planet is known as the Red Planet?", answers: ["Mars", "Earth", "Jupiter", "Saturn"], correct: 0 },
        { question: "What do you call a group of stars?", answers: ["Galaxy", "Constellation", "Cluster", "Nebula"], correct: 1 },
        { question: "Which planet has the most moons?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 3 },
        { question: "Which planet is famous for its rings?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
        { question: "How many Earths can fit inside the Sun?", answers: ["1 million", "10 million", "100 million", "1 billion"], correct: 0 },
        { question: "Which planet is known for its great red spot?", answers: ["Venus", "Jupiter", "Saturn", "Mars"], correct: 1 },
    ],
    medium: [
        { question: "What is the largest moon of Saturn?", answers: ["Titan", "Rhea", "Iapetus", "Enceladus"], correct: 0 },
        { question: "What is the smallest planet in our solar system?", answers: ["Mercury", "Mars", "Pluto", "Venus"], correct: 0 },
        { question: "What planet is known as the Morning Star?", answers: ["Mars", "Earth", "Venus", "Jupiter"], correct: 2 },
        { question: "Which planet rotates on its side?", answers: ["Uranus", "Venus", "Saturn", "Neptune"], correct: 0 },
        { question: "What is the name of the rover that landed on Mars in 2021?", answers: ["Perseverance", "Curiosity", "Spirit", "Opportunity"], correct: 0 },
        { question: "Which planet has the highest mountain?", answers: ["Earth", "Mars", "Venus", "Jupiter"], correct: 1 },
        { question: "What is the largest planet in our solar system?", answers: ["Earth", "Jupiter", "Saturn", "Neptune"], correct: 1 },
        { question: "Which planet is known for having a storm called the Great Dark Spot?", answers: ["Uranus", "Neptune", "Jupiter", "Saturn"], correct: 1 },
        { question: "Which spacecraft was the first to reach interstellar space?", answers: ["Voyager 1", "Voyager 2", "New Horizons", "Pioneer 10"], correct: 0 },
        { question: "What is the name of the first man-made object to land on the moon?", answers: ["Apollo 11", "Luna 2", "Viking 1", "Mars Rover"], correct: 1 },
    ],
    hard: [
        { question: "Which planet has a day longer than its year?", answers: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 0 },
        { question: "What phenomenon causes the tail of a comet?", answers: ["Solar wind", "Gravity", "Magnetism", "Radiation"], correct: 0 },
        { question: "What is the name of the effect that causes the change in frequency of a wave in relation to an observer?", answers: ["Doppler effect", "Photoelectric effect", "Gravitational effect", "Quantum effect"], correct: 0 },
        { question: "Which planet is the hottest in the solar system?", answers: ["Venus", "Mercury", "Mars", "Jupiter"], correct: 0 },
        { question: "How many moons does Mars have?", answers: ["1", "2", "3", "4"], correct: 1 },
        { question: "What is the largest volcano in the solar system?", answers: ["Olympus Mons", "Mauna Loa", "Mount Everest", "Mount Kilimanjaro"], correct: 0 },
        { question: "What is the most abundant gas in the universe?", answers: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Helium"], correct: 0 },
        { question: "What is the hottest planet in the solar system?", answers: ["Venus", "Mercury", "Mars", "Jupiter"], correct: 0 },
        { question: "What is the primary component of the Sun?", answers: ["Hydrogen", "Helium", "Carbon", "Oxygen"], correct: 0 },
        { question: "What is the main ingredient of stars?", answers: ["Hydrogen", "Helium", "Carbon", "Oxygen"], correct: 0 },
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let currentLevel = 'easy';

// Function to start the quiz with the selected difficulty
function startQuiz(difficulty) {
    currentLevel = difficulty; // Set the current level to the selected difficulty
    totalQuestions = parseInt(document.getElementById('questionCount').value); // Get the number of questions from the input
    if (totalQuestions > 20) totalQuestions = 20; // Limit to max 20 questions
    if (totalQuestions < 1) totalQuestions = 1; // Limit to min 1 question
    currentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    document.getElementById('quizContainer').style.display = 'flex'; // Show the quiz container
    document.getElementById('questionLimit').style.display = 'none'; // Hide the question limit selection
    showQuestion(currentLevel); // Show the first question immediately

    // Play background music and unmute it
    const music = document.getElementById('backgroundMusic');
    music.muted = false; // Unmute music
    music.play(); // Start playing music
}

// Function to show the current question
function showQuestion(difficulty) {
    const quizQuestions = questions[difficulty];
    if (currentQuestionIndex < totalQuestions) {
        const question = quizQuestions[currentQuestionIndex];
        document.getElementById('quizQuestion').textContent = question.question;
        const answersDiv = document.getElementById('answers');
        answersDiv.innerHTML = ''; // Clear previous answers
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-light';
            button.textContent = answer;
            button.onclick = () => checkAnswer(index, question.correct, question.answers[question.correct]);
            answersDiv.appendChild(button);
        });
        document.getElementById('nextQuestion').style.display = 'none';
        document.getElementById('correctAnswer').style.display = 'none';
    } else {
        showFinalScore();
    }
}

// Function to check the selected answer
function checkAnswer(selected, correct, correctAnswer) {
    const correctAnswerDiv = document.getElementById('correctAnswer');
    if (selected === correct) {
        score++;
        correctAnswerDiv.textContent = "Correct!";
    } else {
        correctAnswerDiv.textContent = `Wrong! Correct answer was: ${correctAnswer}`;
    }
    correctAnswerDiv.style.display = 'block';
    currentQuestionIndex++;

    // Disable all answer buttons
    const answerButtons = document.querySelectorAll('#answers button');
    answerButtons.forEach(button => button.disabled = true);
    
    if (currentQuestionIndex < totalQuestions) {
        document.getElementById('nextQuestion').style.display = 'block';
    } else {
        showFinalScore();
    }
}

// Event listener for the next question button
document.getElementById('nextQuestion').onclick = () => {
    if (currentQuestionIndex < totalQuestions) {
        showQuestion(currentLevel);
    } else {
        showFinalScore();
    }
};

// Function to show the final score
function showFinalScore() {
    document.getElementById('quizContainer').innerHTML = `
        <h2>Your Score: ${score} out of ${totalQuestions}</h2>
        <button onclick="exitGame()" class="btn btn-danger">Exit Game</button>
    `;
    // Stop music when showing final score
    const music = document.getElementById('backgroundMusic');
    music.pause();
}

// Function to exit the game
function exitGame() {
    window.location.href = "index.html"; // Change to your homepage or desired page
}

// Function to show current score
document.getElementById('showScore').onclick = () => alert(`Current Score: ${score} out of ${totalQuestions}`);

// Function to create star background
function createStars() {
    const starCount = 100; // Number of stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(star);
    }
}

createStars(); // Create stars on page load
