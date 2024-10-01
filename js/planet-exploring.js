const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100; // Number of stars

function createStars() {
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.5 + 0.1 // Random speed for each star
        });
    }
}

function drawStars() {
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.y += star.speed; // Move star down
        // Reset star position when it goes off screen
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width; // Randomize x position
        }
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateStars();
    drawStars();
    requestAnimationFrame(animate);
}

createStars(); // Create stars on initialization
animate(); // Start the animation