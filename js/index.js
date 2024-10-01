        // Date and Time Functionality
        function updateDateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
            };
            document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
        }
        setInterval(updateDateTime, 1000);
        updateDateTime(); // Initial call

        // Generate Stars
        function createStars(numStars) {
            const body = document.body;
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 1; // Random size between 1 and 4
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.top = `${Math.random() * 100}vh`;
                star.style.left = `${Math.random() * 100}vw`;
                body.appendChild(star);
            }
        }

        // Generate Planets
        function createPlanets(numPlanets) {
            const body = document.body;
            const planetMinSize = 10; // Minimum planet size
            const planetMaxSize = 30; // Maximum planet size
            const screenPadding = 100; // Padding from screen edges

            for (let i = 0; i < numPlanets; i++) {
                const planet = document.createElement('div');
                planet.className = 'planet';
                const size = Math.random() * (planetMaxSize - planetMinSize) + planetMinSize; // Random size
                planet.style.width = `${size}px`;
                planet.style.height = `${size}px`;
                planet.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
                
                // Random position ensuring the planet is not at the edges
                const posX = Math.random() * (window.innerWidth - size - screenPadding) + (size / 2);
                const posY = Math.random() * (window.innerHeight - size - screenPadding) + (size / 2);
                planet.style.left = `${posX}px`;
                planet.style.top = `${posY}px`;
                body.appendChild(planet);

                // Function to move planets randomly
                function movePlanet() {
                    const randomX = (Math.random() * 2 - 1) * 5; // Random value between -5 and 5
                    const randomY = (Math.random() * 2 - 1) * 5; // Random value between -5 and 5
                    const currentTop = parseFloat(planet.style.top);
                    const currentLeft = parseFloat(planet.style.left);
                    
                    planet.style.top = `${Math.min(Math.max(currentTop + randomY, 0), window.innerHeight)}px`; // Keep within bounds
                    planet.style.left = `${Math.min(Math.max(currentLeft + randomX, 0), window.innerWidth)}px`; // Keep within bounds

                    // Call movePlanet again after a random interval
                    setTimeout(movePlanet, Math.random() * 2000 + 500); // Random interval between 500ms and 2500ms
                }

                // Function to "fight" back from cursor
                function fightBackFromCursor(event) {
                    const planetRect = planet.getBoundingClientRect();
                    const planetCenterX = planetRect.left + planetRect.width / 2;
                    const planetCenterY = planetRect.top + planetRect.height / 2;

                    const distanceX = event.clientX - planetCenterX;
                    const distanceY = event.clientY - planetCenterY;
                    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                    // If the cursor is close, move the planet away
                    if (distance < 100) {
                        const angle = Math.atan2(distanceY, distanceX);
                        const escapeDistance = 30; // Distance to move away

                        const moveX = Math.cos(angle) * escapeDistance;
                        const moveY = Math.sin(angle) * escapeDistance;

                        planet.style.top = `${Math.min(Math.max(planetCenterY + moveY, 0), window.innerHeight)}px`;
                        planet.style.left = `${Math.min(Math.max(planetCenterX + moveX, 0), window.innerWidth)}px`;
                    }
                }

                // Attach mouse move event listener
                document.addEventListener('mousemove', fightBackFromCursor);
                movePlanet(); // Start moving the planet
            }
        }
        createStars(100); // Generate 100 stars
        createPlanets(5); // Generate 5 planets

        // Change cursor color based on mouse position without following
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            const red = Math.round((clientX / window.innerWidth) * 255);
            const green = Math.round((clientY / window.innerHeight) * 255);
            const blue = 100; // Fixed blue value

            const cursorColor = `rgb(${red}, ${green}, ${blue})`;
            cursor.style.backgroundColor = cursorColor;
            cursor.style.transform = `translate(${clientX}px, ${clientY}px)`; // Centered on mouse
        });