document.addEventListener('DOMContentLoaded', function() {
    createStars();
});

function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

function selectDifficulty(difficulty) {
    const questionCount = document.getElementById('questionCount').value;
    
    // Validate question count
    if (questionCount < 10 || questionCount > 100) {
        alert('Please select a number of questions between 10 and 100');
        return;
    }

    // Store the settings and redirect to the game page
    localStorage.setItem('gameSettings', JSON.stringify({
        difficulty: difficulty,
        questionCount: parseInt(questionCount)
    }));

    // Redirect to the game page
    window.location.href = 'game.html';
}

// Input validation
document.getElementById('questionCount').addEventListener('input', function(e) {
    let value = parseInt(e.target.value);
    if (value < 10) e.target.value = 10;
    if (value > 100) e.target.value = 100;
});