let gameState = {
    score: 0,
    currentQuestion: 0,
    timeStarted: null,
    questions: [],
    settings: null
};

// Questions database
const questionsByDifficulty = {
    easy: [
        {
            question: "Which planet has the longest day?",
            options: ["Venus", "Jupiter", "Earth", "Mars"],
            correct: 0
        },
        {
            question: "How many planets are in our solar system?",
            options: ["7", "8", "9", "10"],
            correct: 1
        },
        {
            question: "What is the closest planet to the Sun?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            correct: 0
        },
        {
            question: "What is the name of our galaxy?",
            options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"],
            correct: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Earth", "Jupiter", "Saturn"],
            correct: 0
        },
        {
            question: "What do you call a group of stars?",
            options: ["Galaxy", "Constellation", "Cluster", "Nebula"],
            correct: 1
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: 3
        },
        {
            question: "Which planet is famous for its rings?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1
        },
        {
            question: "How many Earths can fit inside the Sun?",
            options: ["1 million", "10 million", "100 million", "1 billion"],
            correct: 0
        },
        {
            question: "Which planet is known for its great red spot?",
            options: ["Venus", "Jupiter", "Saturn", "Mars"],
            correct: 1
        },
        {
            question: "What is the main gas in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Mars"],
            correct: 1
        },
        {
            question: "Which planet is known for having a tilt that makes it rotate on its side?",
            options: ["Jupiter", "Uranus", "Saturn", "Neptune"],
            correct: 1
        },
        {
            question: "What is the hottest planet in our solar system?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "Which celestial body is known as the Earth's natural satellite?",
            options: ["Moon", "Mars", "Sun", "Venus"],
            correct: 0
        },
        {
            question: "What do we call the path of a planet around the Sun?",
            options: ["Orbit", "Rotation", "Revolution", "Spin"],
            correct: 0
        },
        {
            question: "Which planet is known as the Morning Star?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 0
        },
        {
            question: "What is the largest moon of Saturn?",
            options: ["Titan", "Europa", "Ganymede", "Callisto"],
            correct: 0
        },
        {
            question: "Which planet is known for its storms and high winds?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: 2
        },
        {
            question: "What is a black hole?",
            options: ["A dense star", "A void in space", "An area of intense gravity", "A wormhole"],
            correct: 2
        },
        {
            question: "What is the name of the first human to travel into space?",
            options: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Buzz Aldrin"],
            correct: 1
        },
        {
            question: "Which planet is known for its blue color?",
            options: ["Earth", "Mars", "Neptune", "Uranus"],
            correct: 2
        },
        {
            question: "What is the main component of the Sun?",
            options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
            correct: 0
        },
        {
            question: "What is the closest star to Earth?",
            options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
            correct: 0
        },
        {
            question: "What do you call a shooting star?",
            options: ["Meteor", "Comet", "Asteroid", "Satellite"],
            correct: 0
        },
        {
            question: "How long does it take for sunlight to reach Earth?",
            options: ["8 minutes", "12 minutes", "5 minutes", "10 minutes"],
            correct: 0
        },
        {
            question: "What is the coldest planet in our solar system?",
            options: ["Mars", "Neptune", "Uranus", "Pluto"],
            correct: 1
        },
        {
            question: "What is the term for the time it takes a planet to complete one rotation?",
            options: ["Day", "Year", "Cycle", "Orbit"],
            correct: 0
        },
        {
            question: "Which planet is known for its hexagonal storm at the North Pole?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1
        },
        {
            question: "What is the term for a planet's year?",
            options: ["Orbit", "Rotation", "Revolution", "Cycle"],
            correct: 2
        },
        {
            question: "Which planet is known for its tilt of 23.5 degrees?",
            options: ["Earth", "Mars", "Saturn", "Venus"],
            correct: 0
        },
        {
            question: "What is the name of the space telescope launched in 1990?",
            options: ["Hubble", "Kepler", "Chandra", "Spitzer"],
            correct: 0
        },
        {
            question: "What is the second-largest planet in our solar system?",
            options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
            correct: 0
        },
        {
            question: "Which planet has the longest orbit around the Sun?",
            options: ["Neptune", "Uranus", "Pluto", "Saturn"],
            correct: 0
        },
        {
            question: "What is the term for the rings of Saturn?",
            options: ["Rings", "Bands", "Clouds", "Girdles"],
            correct: 0
        },
        {
            question: "What is a comet primarily made of?",
            options: ["Ice and dust", "Rock and metal", "Gas and dust", "Liquid"],
            correct: 0
        },
        {
            question: "What is the Great Wall of Galaxies?",
            options: ["A galaxy cluster", "A cosmic structure", "A supercluster", "A dark matter region"],
            correct: 1
        },
        {
            question: "What is the hottest part of the Sun?",
            options: ["Core", "Surface", "Atmosphere", "Corona"],
            correct: 0
        },
        {
            question: "Which planet can be seen without a telescope?",
            options: ["Venus", "Mars", "Jupiter", "All of the above"],
            correct: 3
        },
        {
            question: "What is the largest volcano in the solar system?",
            options: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Mount Fuji"],
            correct: 0
        },
        {
            question: "What is the term for the distance light travels in one year?",
            options: ["Light year", "Astronomical unit", "Parsec", "Kilometer"],
            correct: 0
        },
        {
            question: "Which planet is known as the ice giant?",
            options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
            correct: 0
        },
        {
            question: "What do we call the zone where a planet can support liquid water?",
            options: ["Goldilocks zone", "Habitable zone", "Safe zone", "Life zone"],
            correct: 1
        },
        {
            question: "Which planet rotates the fastest?",
            options: ["Jupiter", "Mars", "Earth", "Saturn"],
            correct: 0
        },
        {
            question: "What was the first artificial satellite?",
            options: ["Sputnik", "Apollo", "Explorer", "Vostok"],
            correct: 0
        },
        {
            question: "What is the name of the largest desert on Earth?",
            options: ["Sahara", "Antarctic", "Gobi", "Arabian"],
            correct: 1
        },
        {
            question: "What do we call the study of stars and planets?",
            options: ["Astronomy", "Astrophysics", "Cosmology", "Astrobiology"],
            correct: 0
        },
        {
            question: "Which planet has the highest mountain?",
            options: ["Mars", "Earth", "Venus", "Jupiter"],
            correct: 0
        },
        {
            question: "What is the main component of Mars' atmosphere?",
            options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Argon"],
            correct: 0
        },
        {
            question: "Which planet is the largest rocky planet?",
            options: ["Earth", "Mars", "Venus", "Mercury"],
            correct: 0
        },
        {
            question: "What is the term for the region of space beyond Neptune?",
            options: ["Kuiper Belt", "Asteroid Belt", "Oort Cloud", "Zodiacal Cloud"],
            correct: 0
        },
        {
            question: "How many dwarf planets are officially recognized?",
            options: ["1", "5", "10", "20"],
            correct: 1
        },
        {
            question: "What is the primary purpose of space telescopes?",
            options: ["Observe distant objects", "Communicate", "Navigate", "Transport"],
            correct: 0
        },
        {
            question: "Which celestial event occurs when the Moon blocks the Sun?",
            options: ["Lunar eclipse", "Solar eclipse", "Supermoon", "Blood Moon"],
            correct: 1
        },
        {
            question: "What is the term for the explosion of a star?",
            options: ["Nova", "Supernova", "Pulsar", "Black hole"],
            correct: 1
        },
        {
            question: "What is the largest structure in the universe?",
            options: ["Galaxies", "Galaxy clusters", "Superclusters", "Filaments"],
            correct: 2
        },
        {
            question: "What planet is known for having a strong magnetic field?",
            options: ["Earth", "Mars", "Jupiter", "Mercury"],
            correct: 2
        },
        {
            question: "Which planet has the shortest day?",
            options: ["Jupiter", "Earth", "Mercury", "Mars"],
            correct: 0
        },
        {
            question: "What is the name of our solar system?",
            options: ["Milky Way", "Andromeda", "Local Group", "Virgo Cluster"],
            correct: 0
        },
        {
            question: "What do we call the area of space where no light can escape?",
            options: ["Black hole", "Nebula", "Quasar", "Pulsar"],
            correct: 0
        },
        {
            question: "What is the term for a planet that orbits a star?",
            options: ["Exoplanet", "Dwarf planet", "Asteroid", "Moon"],
            correct: 0
        },
        {
            question: "Which planet is known as the 'Evening Star'?",
            options: ["Venus", "Mars", "Mercury", "Jupiter"],
            correct: 0
        },
        {
            question: "What is the average distance from the Earth to the Sun?",
            options: ["93 million miles", "39 million miles", "150 million miles", "200 million miles"],
            correct: 2
        },
        {
            question: "What is the phenomenon where light is bent by gravity?",
            options: ["Gravitational lensing", "Reflection", "Refraction", "Diffraction"],
            correct: 0
        },
        {
            question: "What is the term for an object that orbits a planet?",
            options: ["Moon", "Satellite", "Asteroid", "Comet"],
            correct: 1
        },
        {
            question: "Which planet has a storm known as the Great Dark Spot?",
            options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
            correct: 0
        },
        {
            question: "How many rings does Saturn have?",
            options: ["1", "3", "7", "9"],
            correct: 2
        },
        {
            question: "What do we call the cloud of gas and dust surrounding a star?",
            options: ["Nebula", "Galaxy", "Cluster", "Supernova"],
            correct: 0
        },
        {
            question: "What is the most distant planet in our solar system?",
            options: ["Neptune", "Uranus", "Pluto", "Mercury"],
            correct: 0
        },
        {
            question: "Which planet has the highest temperature?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "What is the term for the boundary around a black hole?",
            options: ["Event horizon", "Singularity", "Accretion disk", "Photon sphere"],
            correct: 0
        },
        {
            question: "What do you call a planet that is not in the habitable zone?",
            options: ["Desolate planet", "Dead planet", "Uninhabitable planet", "Dwarf planet"],
            correct: 2
        },
        {
            question: "Which planet is known for its stunning blue color due to methane in its atmosphere?",
            options: ["Uranus", "Neptune", "Earth", "Mars"],
            correct: 1
        },
        {
            question: "What is the primary reason for the seasons on Earth?",
            options: ["Tilt of the Earth", "Distance from the Sun", "Sun's activity", "Moon's phases"],
            correct: 0
        },
        {
            question: "What is the name of the first human-made object to reach space?",
            options: ["Vostok 1", "Voyager 1", "Sputnik 1", "Apollo 11"],
            correct: 2
        },
        {
            question: "What is the name of our closest neighboring galaxy?",
            options: ["Andromeda", "Sombrero", "Whirlpool", "Milky Way"],
            correct: 0
        },
        {
            question: "What is a nebula?",
            options: ["A cloud of gas and dust", "A type of star", "A galaxy", "A black hole"],
            correct: 0
        },
        {
            question: "Which planet is often called Earth's twin?",
            options: ["Mars", "Venus", "Mercury", "Jupiter"],
            correct: 1
        },
        {
            question: "How many stars are in the Milky Way?",
            options: ["100 billion", "200 billion", "300 billion", "400 billion"],
            correct: 1
        },
        {
            question: "What is the primary element in stars?",
            options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
            correct: 0
        }
    ], 

    medium: [
        {
            question: "What is the largest moon of Saturn?",
            options: ["Titan", "Rhea", "Iapetus", "Enceladus"],
            correct: 0
        },
        {
            question: "What is the smallest planet in our solar system?",
            options: ["Mercury", "Mars", "Pluto", "Venus"],
            correct: 0
        },
        {
            question: "What planet is known as the Morning Star?",
            options: ["Mars", "Earth", "Venus", "Jupiter"],
            correct: 2
        },
        {
            question: "Which planet rotates on its side?",
            options: ["Uranus", "Venus", "Saturn", "Neptune"],
            correct: 0
        },
        {
            question: "What is the name of the rover that landed on Mars in 2021?",
            options: ["Perseverance", "Curiosity", "Spirit", "Opportunity"],
            correct: 0
        },
        {
            question: "Which planet has the highest mountain?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correct: 1
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            correct: 1
        },
        {
            question: "Which planet is known for having a storm called the Great Dark Spot?",
            options: ["Uranus", "Neptune", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "Which spacecraft was the first to reach interstellar space?",
            options: ["Voyager 1", "Voyager 2", "New Horizons", "Pioneer 10"],
            correct: 0
        },
        {
            question: "What is the name of the first man-made object to land on the moon?",
            options: ["Apollo 11", "Luna 2", "Viking 1", "Mars Rover"],
            correct: 1
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
            correct: 3
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            correct: 0
        },
        {
            question: "How many planets are in the solar system?",
            options: ["7", "8", "9", "10"],
            correct: 1
        },
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
            correct: 0
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
            correct: 1
        },
        {
            question: "What is the fastest land animal?",
            options: ["Cheetah", "Lion", "Tiger", "Horse"],
            correct: 0
        },
        {
            question: "What is the currency of the United States?",
            options: ["Dollar", "Euro", "Yen", "Pound"],
            correct: 0
        },
        {
            question: "Which vitamin is produced when exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 3
        },
        {
            question: "What is the second largest planet in our solar system?",
            options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
            correct: 0
        },
        {
            question: "Which planet is known for its rings?",
            options: ["Jupiter", "Saturn", "Mars", "Neptune"],
            correct: 1
        },
        {
            question: "What is the hottest planet in our solar system?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "What is the name of the galaxy we live in?",
            options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"],
            correct: 1
        },
        {
            question: "Which planet is known for having a day longer than its year?",
            options: ["Venus", "Earth", "Mars", "Jupiter"],
            correct: 0
        },
        {
            question: "What was the first animal in space?",
            options: ["Laika", "Monkeys", "Cats", "Rabbits"],
            correct: 0
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 0
        },
        {
            question: "What is the term for a moon that is larger than a planet?",
            options: ["Planet", "Dwarf planet", "Satellite", "None"],
            correct: 3
        },
        {
            question: "Which celestial body is known as Earth's twin?",
            options: ["Venus", "Mars", "Mercury", "Jupiter"],
            correct: 0
        },
        {
            question: "What is the name of the first human in space?",
            options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
            correct: 0
        },
        {
            question: "Which planet is famous for its great red spot?",
            options: ["Jupiter", "Mars", "Saturn", "Uranus"],
            correct: 0
        },
        {
            question: "What phenomenon occurs when the moon blocks the sun?",
            options: ["Lunar Eclipse", "Solar Eclipse", "Meteor Shower", "Comet"],
            correct: 1
        },
        {
            question: "What is the name of the largest volcano in the solar system?",
            options: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Mount Kilimanjaro"],
            correct: 0
        },
        {
            question: "What is the nearest star to Earth?",
            options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
            correct: 0
        },
        {
            question: "What is the main component of the Sun?",
            options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
            correct: 0
        },
        {
            question: "What type of galaxy is the Milky Way?",
            options: ["Elliptical", "Spiral", "Irregular", "Lenticular"],
            correct: 1
        },
        {
            question: "Which planet has the longest day?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "What is a light-year?",
            options: ["A unit of time", "A unit of distance", "A measure of speed", "None of the above"],
            correct: 1
        },
        {
            question: "What is the primary reason for seasons on Earth?",
            options: ["Earth's distance from the sun", "Tilt of Earth's axis", "Sun's intensity", "Earth's rotation"],
            correct: 1
        },
        {
            question: "Which spacecraft was the first to land on Mars?",
            options: ["Viking 1", "Mars Pathfinder", "Spirit", "Opportunity"],
            correct: 0
        },
        {
            question: "Which planet is known for its extreme winds?",
            options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
            correct: 2
        },
        {
            question: "What is the name of the first space station?",
            options: ["Mir", "Skylab", "International Space Station", "Salyut"],
            correct: 1
        },
        {
            question: "What is the term for a comet's tail?",
            options: ["Coma", "Plume", "Halo", "Dust Trail"],
            correct: 0
        },
        {
            question: "What type of celestial body is Halley's Comet?",
            options: ["Asteroid", "Meteor", "Comet", "Planet"],
            correct: 2
        },
        {
            question: "Which planet is the coldest in the solar system?",
            options: ["Neptune", "Uranus", "Pluto", "Mercury"],
            correct: 1
        },
        {
            question: "What do we call the boundary beyond which we cannot see?",
            options: ["Event Horizon", "Black Hole", "Cosmic Horizon", "Light Barrier"],
            correct: 2
        },
        {
            question: "What is the main purpose of a telescope?",
            options: ["To observe planets", "To measure distances", "To observe stars", "To study space"],
            correct: 0
        },
        {
            question: "Which planet has a day that lasts about 10 hours?",
            options: ["Jupiter", "Saturn", "Earth", "Neptune"],
            correct: 0
        },
        {
            question: "What is the term for the study of the universe?",
            options: ["Astronomy", "Astrophysics", "Cosmology", "Astrobiology"],
            correct: 0
        },
        {
            question: "Which planet is known for its blue color?",
            options: ["Earth", "Neptune", "Uranus", "Saturn"],
            correct: 1
        },
        {
            question: "What is the Kuiper Belt?",
            options: ["A region of asteroids", "A region of comets", "A region of gas giants", "A region of rocky planets"],
            correct: 1
        },
        {
            question: "What phenomenon is caused by the gravitational pull of the moon?",
            options: ["Tides", "Eclipses", "Auroras", "Seasons"],
            correct: 0
        },
        {
            question: "Which planet has the most extensive ring system?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1
        },
        {
            question: "What is the largest structure in the universe?",
            options: ["Galaxy", "Galaxy Cluster", "Supercluster", "Void"],
            correct: 2
        },
        {
            question: "Which space probe was launched to study the outer planets?",
            options: ["Voyager 1", "Pioneer 10", "New Horizons", "Cassini"],
            correct: 0
        },
        {
            question: "What is the term for a group of stars that form a recognizable pattern?",
            options: ["Galaxy", "Constellation", "Nebula", "Cluster"],
            correct: 1
        },
        {
            question: "What are the building blocks of stars?",
            options: ["Gas and dust", "Metals", "Rocks", "Ice"],
            correct: 0
        },
        {
            question: "Which planet is known for its Great Red Spot?",
            options: ["Jupiter", "Mars", "Saturn", "Neptune"],
            correct: 0
        },
        {
            question: "What is the phenomenon called when a star explodes?",
            options: ["Nova", "Supernova", "Black Hole", "Pulsar"],
            correct: 1
        },
        {
            question: "What is the name of the first artificial satellite?",
            options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"],
            correct: 1
        },
        {
            question: "What is the study of extraterrestrial life called?",
            options: ["Astrobiology", "Astrophysics", "Astronomy", "Exobiology"],
            correct: 0
        },
        {
            question: "What do we call the region of space beyond Neptune?",
            options: ["Asteroid Belt", "Kuiper Belt", "Oort Cloud", "Heliosphere"],
            correct: 1
        },
        {
            question: "Which planet has the shortest year?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 0
        },
        {
            question: "What is the name of NASA's Mars rover that explored Gale Crater?",
            options: ["Curiosity", "Perseverance", "Spirit", "Opportunity"],
            correct: 0
        },
        {
            question: "What is the term for a moon that orbits a planet?",
            options: ["Satellite", "Asteroid", "Comet", "Nebula"],
            correct: 0
        },
        {
            question: "What is the largest type of galaxy?",
            options: ["Spiral", "Elliptical", "Irregular", "Lenticular"],
            correct: 1
        },
        {
            question: "Which planet is famous for its large storms?",
            options: ["Jupiter", "Mars", "Venus", "Saturn"],
            correct: 0
        },
        {
            question: "What is the primary gas in the atmosphere of Mars?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2
        },
        {
            question: "What do we call the remains of a star that has collapsed?",
            options: ["White Dwarf", "Neutron Star", "Black Hole", "All of the above"],
            correct: 3
        },
        {
            question: "What is the closest galaxy to the Milky Way?",
            options: ["Andromeda", "Triangulum", "Sombrero", "Whirlpool"],
            correct: 0
        },
        {
            question: "What is the name of the telescope launched into space to observe distant stars and galaxies?",
            options: ["Hubble", "Kepler", "Chandra", "James Webb"],
            correct: 0
        },
        {
            question: "Which planet has a rotation period of 243 Earth days?",
            options: ["Venus", "Mercury", "Jupiter", "Neptune"],
            correct: 0
        },
        {
            question: "What is the main reason for the seasons on Earth?",
            options: ["Distance from the Sun", "Tilt of Earth's axis", "Earth's rotation", "Magnetic field"],
            correct: 1
        },
        {
            question: "Which planet is known for having a significant tilt, resulting in extreme seasonal variations?",
            options: ["Mars", "Uranus", "Earth", "Jupiter"],
            correct: 1
        },
        {
            question: "What is the most abundant element in the universe?",
            options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
            correct: 2
        },
        {
            question: "What is the term for a planet that orbits a star outside our solar system?",
            options: ["Exoplanet", "Dwarf Planet", "Satellite", "Asteroid"],
            correct: 0
        },
        {
            question: "Which planet has a surface temperature of around -225 degrees Fahrenheit?",
            options: ["Pluto", "Neptune", "Uranus", "Mercury"],
            correct: 2
        },
        {
            question: "What is the term for the path that a celestial body follows around another body?",
            options: ["Orbit", "Trajectory", "Pathway", "Revolution"],
            correct: 0
        },
        {
            question: "What is a nebula?",
            options: ["A star", "A planet", "A cloud of gas and dust", "A black hole"],
            correct: 2
        },
        {
            question: "Which planet is known for its many moons, including Titan?",
            options: ["Mars", "Jupiter", "Saturn", "Neptune"],
            correct: 2
        },
        {
            question: "What is the name of the first space shuttle?",
            options: ["Challenger", "Discovery", "Atlantis", "Columbia"],
            correct: 3
        },
        {
            question: "What is the most famous telescope located in space?",
            options: ["Hubble Space Telescope", "Kepler Space Telescope", "Chandra X-ray Observatory", "James Webb Space Telescope"],
            correct: 0
        },
        {
            question: "What is the primary purpose of a space probe?",
            options: ["To carry humans", "To collect data", "To land on planets", "To build space stations"],
            correct: 1
        },
        {
            question: "Which planet has the most extreme temperatures?",
            options: ["Mercury", "Venus", "Mars", "Uranus"],
            correct: 1
        },
        {
            question: "What is a pulsar?",
            options: ["A type of planet", "A rotating neutron star", "A black hole", "A comet"],
            correct: 1
        },
        {
            question: "What do we call a star that is in the process of dying?",
            options: ["Supernova", "Nova", "Giant", "Main Sequence"],
            correct: 0
        },
        {
            question: "What is the main component of Saturn's rings?",
            options: ["Rock", "Ice", "Gas", "Dust"],
            correct: 1
        },
        {
            question: "What is the term for the observable universe's edge?",
            options: ["Cosmic Background Radiation", "Observable Limit", "Cosmic Horizon", "Event Horizon"],
            correct: 2
        },
        {
            question: "Which planet is known for its vast canyons and volcanoes?",
            options: ["Mars", "Venus", "Earth", "Mercury"],
            correct: 0
        },
        {
            question: "What is the study of planets outside our solar system called?",
            options: ["Planetology", "Exoplanetary Science", "Astrobiology", "Astrophysics"],
            correct: 1
        }
    ],    
    hard: [
        {
            question: "What is the largest moon of Saturn?",
            options: ["Titan", "Rhea", "Iapetus", "Enceladus"],
            correct: 0
        },
        {
            question: "What is the smallest planet in our solar system?",
            options: ["Mercury", "Mars", "Pluto", "Venus"],
            correct: 0
        },
        {
            question: "What planet is known as the Morning Star?",
            options: ["Mars", "Earth", "Venus", "Jupiter"],
            correct: 2
        },
        {
            question: "Which planet rotates on its side?",
            options: ["Uranus", "Venus", "Saturn", "Neptune"],
            correct: 0
        },
        {
            question: "What is the name of the rover that landed on Mars in 2021?",
            options: ["Perseverance", "Curiosity", "Spirit", "Opportunity"],
            correct: 0
        },
        {
            question: "Which planet has the highest mountain?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correct: 1
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            correct: 1
        },
        {
            question: "Which planet is known for having a storm called the Great Dark Spot?",
            options: ["Uranus", "Neptune", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "Which spacecraft was the first to reach interstellar space?",
            options: ["Voyager 1", "Voyager 2", "New Horizons", "Pioneer 10"],
            correct: 0
        },
        {
            question: "What is the name of the first man-made object to land on the moon?",
            options: ["Apollo 11", "Luna 2", "Viking 1", "Mars Rover"],
            correct: 1
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
            correct: 3
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            correct: 0
        },
        {
            question: "How many planets are in the solar system?",
            options: ["7", "8", "9", "10"],
            correct: 1
        },
        {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
            correct: 0
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
            correct: 1
        },
        {
            question: "What is the fastest land animal?",
            options: ["Cheetah", "Lion", "Tiger", "Horse"],
            correct: 0
        },
        {
            question: "What is the currency of the United States?",
            options: ["Dollar", "Euro", "Yen", "Pound"],
            correct: 0
        },
        {
            question: "Which vitamin is produced when exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            correct: 3
        },
        {
            question: "What is the second largest planet in our solar system?",
            options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
            correct: 0
        },
        {
            question: "Which planet is known for its rings?",
            options: ["Jupiter", "Saturn", "Mars", "Neptune"],
            correct: 1
        },
        {
            question: "What is the hottest planet in our solar system?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "What is the name of the galaxy we live in?",
            options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"],
            correct: 1
        },
        {
            question: "Which planet is known for having a day longer than its year?",
            options: ["Venus", "Earth", "Mars", "Jupiter"],
            correct: 0
        },
        {
            question: "What was the first animal in space?",
            options: ["Laika", "Monkeys", "Cats", "Rabbits"],
            correct: 0
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 0
        },
        {
            question: "What is the term for a moon that is larger than a planet?",
            options: ["Planet", "Dwarf planet", "Satellite", "None"],
            correct: 3
        },
        {
            question: "Which celestial body is known as Earth's twin?",
            options: ["Venus", "Mars", "Mercury", "Jupiter"],
            correct: 0
        },
        {
            question: "What is the name of the first human in space?",
            options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
            correct: 0
        },
        {
            question: "Which planet is famous for its great red spot?",
            options: ["Jupiter", "Mars", "Saturn", "Uranus"],
            correct: 0
        },
        {
            question: "What phenomenon occurs when the moon blocks the sun?",
            options: ["Lunar Eclipse", "Solar Eclipse", "Meteor Shower", "Comet"],
            correct: 1
        },
        {
            question: "What is the name of the largest volcano in the solar system?",
            options: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Mount Kilimanjaro"],
            correct: 0
        },
        {
            question: "What is the nearest star to Earth?",
            options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
            correct: 0
        },
        {
            question: "What is the main component of the Sun?",
            options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
            correct: 0
        },
        {
            question: "What type of galaxy is the Milky Way?",
            options: ["Elliptical", "Spiral", "Irregular", "Lenticular"],
            correct: 1
        },
        {
            question: "Which planet has the longest day?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "What is a light-year?",
            options: ["A unit of time", "A unit of distance", "A measure of speed", "None of the above"],
            correct: 1
        },
        {
            question: "What is the primary reason for seasons on Earth?",
            options: ["Earth's distance from the sun", "Tilt of Earth's axis", "Sun's intensity", "Earth's rotation"],
            correct: 1
        },
        {
            question: "Which spacecraft was the first to land on Mars?",
            options: ["Viking 1", "Mars Pathfinder", "Spirit", "Opportunity"],
            correct: 0
        },
        {
            question: "Which planet is known for its extreme winds?",
            options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
            correct: 2
        },
        {
            question: "What is the name of the first space station?",
            options: ["Mir", "Skylab", "International Space Station", "Salyut"],
            correct: 1
        },
        {
            question: "What is the term for a comet's tail?",
            options: ["Coma", "Plume", "Halo", "Dust Trail"],
            correct: 0
        },
        {
            question: "What type of celestial body is Halley's Comet?",
            options: ["Asteroid", "Meteor", "Comet", "Planet"],
            correct: 2
        },
        {
            question: "Which planet is the coldest in the solar system?",
            options: ["Neptune", "Uranus", "Pluto", "Mercury"],
            correct: 1
        },
        {
            question: "What do we call the boundary beyond which we cannot see?",
            options: ["Event Horizon", "Black Hole", "Cosmic Horizon", "Light Barrier"],
            correct: 2
        },
        {
            question: "What is the main purpose of a telescope?",
            options: ["To observe planets", "To measure distances", "To observe stars", "To study space"],
            correct: 0
        },
        {
            question: "Which planet has a day that lasts about 10 hours?",
            options: ["Jupiter", "Saturn", "Earth", "Neptune"],
            correct: 0
        },
        {
            question: "What is the term for the study of the universe?",
            options: ["Astronomy", "Astrophysics", "Cosmology", "Astrobiology"],
            correct: 2
        },
        {
            question: "What is the largest known star?",
            options: ["Betelgeuse", "VY Canis Majoris", "Sirius", "Antares"],
            correct: 1
        },
        {
            question: "Which planet is known for its blue color due to methane?",
            options: ["Neptune", "Uranus", "Earth", "Saturn"],
            correct: 1
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    initializeGame();
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

function initializeGame() {
    // Get settings from localStorage
    const settings = JSON.parse(localStorage.getItem('gameSettings'));
    if (!settings) {
        window.location.href = 'space-quiz-challenge.html';
        return;
    }

    gameState.settings = settings;
    gameState.questions = generateQuestions(settings.difficulty, settings.questionCount);
    gameState.timeStarted = new Date();
    
    updateQuestion();
    startTimer();
}

function generateQuestions(difficulty, count) {
    const baseQuestions = questionsByDifficulty[difficulty];
    let questions = [];
    
    // If we don't have enough questions, repeat them
    for (let i = 0; i < count; i++) {
        questions.push(baseQuestions[i % baseQuestions.length]);
    }
    
    return questions;
}

function updateQuestion() {
    const question = gameState.questions[gameState.currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    // Update progress bar
    const progress = ((gameState.currentQuestion + 1) / gameState.questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function checkAnswer(selectedIndex) {
    const question = gameState.questions[gameState.currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        gameState.score += getPoints();
        document.getElementById('score').textContent = gameState.score;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
    }

    setTimeout(() => {
        gameState.currentQuestion++;
        if (gameState.currentQuestion < gameState.questions.length) {
            updateQuestion();
        } else {
            endGame();
        }
    }, 1500);
}

function getPoints() {
    switch (gameState.settings.difficulty) {
        case 'easy': return 100;
        case 'medium': return 200;
        case 'hard': return 300;
        default: return 100;
    }
}

function startTimer() {
    setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now - gameState.timeStarted) / 1000);
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;
        document.getElementById('timer').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function endGame() {
    const totalTime = Math.floor((new Date() - gameState.timeStarted) / 1000);
    const finalScore = gameState.score;
    
    localStorage.setItem('gameResults', JSON.stringify({
        score: finalScore,
        time: totalTime,
        difficulty: gameState.settings.difficulty,
        questionCount: gameState.settings.questionCount
    }));

    window.location.href = 'results.html';
}