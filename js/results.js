document.addEventListener('DOMContentLoaded', function() {
    createStars();
    loadResults();
    createConfetti();
});

function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = '#fff';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;
        starsContainer.appendChild(star);
    }
}

function createConfetti() {
    const colors = ['#00a1ff', '#00ff9d', '#ffd700', '#ff69b4', '#7b68ee'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.opacity = Math.random();
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            document.body.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }, i * 100);
    }
}

function loadResults() {
    const results = JSON.parse(localStorage.getItem('gameResults'));
    if (!results) {
        window.location.href = 'space-quiz-challenge.html';
        return;
    }

    document.getElementById('final-score').textContent = results.score;
    document.getElementById('time-taken').textContent = formatTime(results.time);
    document.getElementById('difficulty').textContent = 
        results.difficulty.charAt(0).toUpperCase() + results.difficulty.slice(1);

    setAchievement(results);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function setAchievement(results) {
    let achievement = '';
    let description = '';

    if (results.score >= 2000) {
        achievement = 'Galactic Master';
        description = 'You\'re truly out of this world!';
    } else if (results.score >= 1500) {
        achievement = 'Star Commander';
        description = 'Your knowledge shines bright!';
    } else if (results.score >= 1000) {
        achievement = 'Space Explorer';
        description = 'You\'re reaching for the stars!';
    } else {
        achievement = 'Space Cadet';
        description = 'Keep exploring the cosmos!';
    }

    document.querySelector('.achievement-title').textContent = achievement;
    document.getElementById('achievement-description').textContent = description;
}

function shareResults() {
    const results = JSON.parse(localStorage.getItem('gameResults'));
    const text = `🚀 I just scored ${results.score} points in ${formatTime(results.time)} on ${results.difficulty} difficulty in the Space Quiz by Monofeya Heroes!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Space Quiz Results',
            text: text,
            url: 'game.html'
        }).catch(console.error);
    } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(text)
            .then(() => alert('Results copied to clipboard!'))
            .catch(console.error);
    }
}