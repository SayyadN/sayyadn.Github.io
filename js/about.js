// Update current date and time
function updateDateTime() {
    const now = new Date(); // Get the current date and time
    document.getElementById('currentDateTime').textContent = now.toLocaleString(); // Update the text content with the current date and time
}

// Call updateDateTime every second
setInterval(updateDateTime, 1000); // Set an interval to update the date and time every 1000 milliseconds (1 second)

// Canvas for star effect
const canvas = document.getElementById('canvas'); // Get the canvas element by its ID
const ctx = canvas.getContext('2d'); // Get the 2D rendering context for the canvas
canvas.width = window.innerWidth; // Set the canvas width to the window's inner width
canvas.height = window.innerHeight; // Set the canvas height to the window's inner height

// Star generation
const stars = []; // Initialize an empty array to hold star objects
const numStars = 100; // Define the number of stars to generate

// Generate stars with random properties
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width, // Random x position within the canvas
        y: Math.random() * canvas.height, // Random y position within the canvas
        size: Math.random() * 2 + 1, // Random size between 1 and 3
        speed: Math.random() * 0.5 + 0.1 // Random speed between 0.1 and 0.6
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for the new frame
    stars.forEach(star => { // Loop through each star in the stars array
        star.y += star.speed; // Move the star down by its speed
        if (star.y > canvas.height) { // If the star moves out of the bottom of the canvas
            star.y = 0; // Reset the star's y position to the top
            star.x = Math.random() * canvas.width; // Assign a new random x position
        }
        ctx.beginPath(); // Begin a new path for drawing
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2); // Draw a circle for the star
        ctx.fillStyle = 'white'; // Set the star's color to white
        ctx.fill(); // Fill the star shape with the color
    });
    requestAnimationFrame(animate); // Request the next frame of the animation
}
animate(); // Start the animation loop

// Change cursor color based on mouse position without following
const cursor = document.getElementById('cursor'); // Get the custom cursor element by its ID
document.addEventListener('mousemove', (event) => { // Add a mousemove event listener to the document
    const { clientX, clientY } = event; // Destructure to get the mouse's x and y coordinates
    const red = Math.round((clientX / window.innerWidth) * 255); // Calculate red value based on mouse x position
    const green = Math.round((clientY / window.innerHeight) * 255); // Calculate green value based on mouse y position
    const blue = 100; // Fixed blue value for the cursor color

    const cursorColor = `rgb(${red}, ${green}, ${blue})`; // Create an RGB color string
    cursor.style.backgroundColor = cursorColor; // Set the cursor's background color
    cursor.style.transform = `translate(${clientX}px, ${clientY}px)`; // Move the cursor to follow the mouse (centered)
});
