let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let currentLevel = 'easy';


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
        { question: "What is the main gas in the Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
        { question: "What is the largest planet in our solar system?", answers: ["Earth", "Jupiter", "Saturn", "Mars"], correct: 1 },
        { question: "Which planet is known for having a tilt that makes it rotate on its side?", answers: ["Jupiter", "Uranus", "Saturn", "Neptune"], correct: 1 },
        { question: "What is the hottest planet in our solar system?", answers: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
        { question: "Which celestial body is known as the Earth's natural satellite?", answers: ["Moon", "Mars", "Sun", "Venus"], correct: 0 },
        { question: "What do we call the path of a planet around the Sun?", answers: ["Orbit", "Rotation", "Revolution", "Spin"], correct: 0 },
        { question: "Which planet is known as the Morning Star?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 0 },
        { question: "What is the largest moon of Saturn?", answers: ["Titan", "Europa", "Ganymede", "Callisto"], correct: 0 },
        { question: "Which planet is known for its storms and high winds?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
        { question: "What is a black hole?", answers: ["A dense star", "A void in space", "An area of intense gravity", "A wormhole"], correct: 2 },
        { question: "What is the name of the first human to travel into space?", answers: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Buzz Aldrin"], correct: 1 },
        { question: "Which planet is known for its blue color?", answers: ["Earth", "Mars", "Neptune", "Uranus"], correct: 2 },
        { question: "What is the main component of the Sun?", answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"], correct: 0 },
        { question: "What is the closest star to Earth?", answers: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"], correct: 0 },
        { question: "What do you call a shooting star?", answers: ["Meteor", "Comet", "Asteroid", "Satellite"], correct: 0 },
        { question: "How long does it take for sunlight to reach Earth?", answers: ["8 minutes", "12 minutes", "5 minutes", "10 minutes"], correct: 0 },
        { question: "What is the coldest planet in our solar system?", answers: ["Mars", "Neptune", "Uranus", "Pluto"], correct: 1 },
        { question: "What is the term for the time it takes a planet to complete one rotation?", answers: ["Day", "Year", "Cycle", "Orbit"], correct: 0 },
        { question: "Which planet is known for its hexagonal storm at the North Pole?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
        { question: "What is the term for a planet's year?", answers: ["Orbit", "Rotation", "Revolution", "Cycle"], correct: 2 },
        { question: "Which planet is known for its tilt of 23.5 degrees?", answers: ["Earth", "Mars", "Saturn", "Venus"], correct: 0 },
        { question: "What is the name of the space telescope launched in 1990?", answers: ["Hubble", "Kepler", "Chandra", "Spitzer"], correct: 0 },
        { question: "What is the second-largest planet in our solar system?", answers: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 0 },
        { question: "Which planet has the longest orbit around the Sun?", answers: ["Neptune", "Uranus", "Pluto", "Saturn"], correct: 0 },
        { question: "What is the term for the rings of Saturn?", answers: ["Rings", "Bands", "Clouds", "Girdles"], correct: 0 },
        { question: "What is a comet primarily made of?", answers: ["Ice and dust", "Rock and metal", "Gas and dust", "Liquid"], correct: 0 },
        { question: "What is the Great Wall of Galaxies?", answers: ["A galaxy cluster", "A cosmic structure", "A supercluster", "A dark matter region"], correct: 1 },
        { question: "What is the hottest part of the Sun?", answers: ["Core", "Surface", "Atmosphere", "Corona"], correct: 0 },
        { question: "Which planet can be seen without a telescope?", answers: ["Venus", "Mars", "Jupiter", "All of the above"], correct: 3 },
        { question: "What is the largest volcano in the solar system?", answers: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Mount Fuji"], correct: 0 },
        { question: "What is the term for the distance light travels in one year?", answers: ["Light year", "Astronomical unit", "Parsec", "Kilometer"], correct: 0 },
        { question: "Which planet is known as the ice giant?", answers: ["Uranus", "Neptune", "Saturn", "Jupiter"], correct: 0 },
        { question: "What do we call the zone where a planet can support liquid water?", answers: ["Goldilocks zone", "Habitable zone", "Safe zone", "Life zone"], correct: 1 },
        { question: "Which planet rotates the fastest?", answers: ["Jupiter", "Mars", "Earth", "Saturn"], correct: 0 },
        { question: "What was the first artificial satellite?", answers: ["Sputnik", "Apollo", "Explorer", "Vostok"], correct: 0 },
        { question: "What is the name of the largest desert on Earth?", answers: ["Sahara", "Antarctic", "Gobi", "Arabian"], correct: 1 },
        { question: "What do we call the study of stars and planets?", answers: ["Astronomy", "Astrophysics", "Cosmology", "Astrobiology"], correct: 0 },
        { question: "Which planet has the highest mountain?", answers: ["Mars", "Earth", "Venus", "Jupiter"], correct: 0 },
        { question: "What is the main component of Mars' atmosphere?", answers: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Argon"], correct: 0 },
        { question: "Which planet is the largest rocky planet?", answers: ["Earth", "Mars", "Venus", "Mercury"], correct: 0 },
        { question: "What is the term for the region of space beyond Neptune?", answers: ["Kuiper Belt", "Asteroid Belt", "Oort Cloud", "Zodiacal Cloud"], correct: 0 },
        { question: "How many dwarf planets are officially recognized?", answers: ["1", "5", "10", "20"], correct: 1 },
        { question: "What is the primary purpose of space telescopes?", answers: ["Observe distant objects", "Communicate", "Navigate", "Transport"], correct: 0 },
        { question: "Which celestial event occurs when the Moon blocks the Sun?", answers: ["Lunar eclipse", "Solar eclipse", "Supermoon", "Blood Moon"], correct: 1 },
        { question: "What is the term for the explosion of a star?", answers: ["Nova", "Supernova", "Pulsar", "Black hole"], correct: 1 },
        { question: "What is the largest structure in the universe?", answers: ["Galaxies", "Galaxy clusters", "Superclusters", "Filaments"], correct: 2 },
        { question: "What planet is known for having a strong magnetic field?", answers: ["Earth", "Mars", "Jupiter", "Mercury"], correct: 2 },
        { question: "Which planet has the shortest day?", answers: ["Jupiter", "Earth", "Mercury", "Mars"], correct: 0 },
        { question: "What is the name of our solar system?", answers: ["Milky Way", "Andromeda", "Local Group", "Virgo Cluster"], correct: 0 },
        { question: "What do we call the area of space where no light can escape?", answers: ["Black hole", "Nebula", "Quasar", "Pulsar"], correct: 0 },
        { question: "What is the term for a planet that orbits a star?", answers: ["Exoplanet", "Dwarf planet", "Asteroid", "Moon"], correct: 0 },
        { question: "Which planet is known as the 'Evening Star'?", answers: ["Venus", "Mars", "Mercury", "Jupiter"], correct: 0 },
        { question: "What is the average distance from the Earth to the Sun?", answers: ["93 million miles", "39 million miles", "150 million miles", "200 million miles"], correct: 2 },
        { question: "What is the phenomenon where light is bent by gravity?", answers: ["Gravitational lensing", "Reflection", "Refraction", "Diffraction"], correct: 0 },
        { question: "What is the term for an object that orbits a planet?", answers: ["Moon", "Satellite", "Asteroid", "Comet"], correct: 1 },
        { question: "Which planet has a storm known as the Great Dark Spot?", answers: ["Neptune", "Uranus", "Saturn", "Jupiter"], correct: 0 },
        { question: "How many rings does Saturn have?", answers: ["1", "3", "7", "9"], correct: 2 },
        { question: "What do we call the cloud of gas and dust surrounding a star?", answers: ["Nebula", "Galaxy", "Cluster", "Supernova"], correct: 0 },
        { question: "What is the most distant planet in our solar system?", answers: ["Neptune", "Uranus", "Pluto", "Mercury"], correct: 0 },
        { question: "Which planet has the highest temperature?", answers: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
        { question: "What is the term for the boundary around a black hole?", answers: ["Event horizon", "Singularity", "Accretion disk", "Photon sphere"], correct: 0 },
        { question: "What do you call a planet that is not in the habitable zone?", answers: ["Desolate planet", "Dead planet", "Uninhabitable planet", "Dwarf planet"], correct: 2 },
        { question: "Which planet is known for its stunning blue color due to methane in its atmosphere?", answers: ["Uranus", "Neptune", "Earth", "Mars"], correct: 1 },
        { question: "What is the primary reason for the seasons on Earth?", answers: ["Tilt of the Earth", "Distance from the Sun", "Sun's activity", "Moon's phases"], correct: 0 },
        { question: "What is the name of the first human-made object to reach space?", answers: ["Vostok 1", "Voyager 1", "Sputnik 1", "Apollo 11"], correct: 2 },
        { question: "What is the name of our closest neighboring galaxy?", answers: ["Andromeda", "Sombrero", "Whirlpool", "Milky Way"], correct: 0 },
        { question: "What is a nebula?", answers: ["A cloud of gas and dust", "A type of star", "A galaxy", "A black hole"], correct: 0 },
        { question: "Which planet is often called Earth's twin?", answers: ["Mars", "Venus", "Mercury", "Jupiter"], correct: 1 },
        { question: "How many stars are in the Milky Way?", answers: ["100 billion", "200 billion", "300 billion", "400 billion"], correct: 1 },
        { question: "What is the primary element in stars?", answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"], correct: 0 }
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
        { question: "What is the largest desert in the world?", answers: ["Sahara", "Arabian", "Gobi", "Antarctica"], correct: 3 },
        { question: "What is the chemical symbol for gold?", answers: ["Au", "Ag", "Pb", "Fe"], correct: 0 },
        { question: "How many planets are in the solar system?", answers: ["7", "8", "9", "10"], correct: 1 },
        { question: "What is the capital of Japan?", answers: ["Tokyo", "Seoul", "Beijing", "Bangkok"], correct: 0 },
        { question: "What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"], correct: 1 },
        { question: "What is the fastest land animal?", answers: ["Cheetah", "Lion", "Tiger", "Horse"], correct: 0 },
        { question: "What is the currency of the United States?", answers: ["Dollar", "Euro", "Yen", "Pound"], correct: 0 },
        { question: "Which vitamin is produced when exposed to sunlight?", answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 3 },
        { question: "What is the second largest planet in our solar system?", answers: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: 0 },
        { question: "Which planet is known for its rings?", answers: ["Jupiter", "Saturn", "Mars", "Neptune"], correct: 1 },
        { question: "What is the hottest planet in our solar system?", answers: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
        { question: "What is the name of the galaxy we live in?", answers: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"], correct: 1 },
        { question: "Which planet is known for having a day longer than its year?", answers: ["Venus", "Earth", "Mars", "Jupiter"], correct: 0 },
        { question: "What was the first animal in space?", answers: ["Laika", "Monkeys", "Cats", "Rabbits"], correct: 0 },
        { question: "Which planet has the most moons?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 0 },
        { question: "What is the term for a moon that is larger than a planet?", answers: ["Planet", "Dwarf planet", "Satellite", "None"], correct: 3 },
        { question: "Which celestial body is known as Earth's twin?", answers: ["Venus", "Mars", "Mercury", "Jupiter"], correct: 0 },
        { question: "What is the name of the first human in space?", answers: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"], correct: 0 },
        { question: "Which planet is famous for its great red spot?", answers: ["Jupiter", "Mars", "Saturn", "Uranus"], correct: 0 },
        { question: "What phenomenon occurs when the moon blocks the sun?", answers: ["Lunar Eclipse", "Solar Eclipse", "Meteor Shower", "Comet"], correct: 1 },
        { question: "What is the name of the largest volcano in the solar system?", answers: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Mount Kilimanjaro"], correct: 0 },
        { question: "What is the nearest star to Earth?", answers: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"], correct: 0 },
        { question: "What is the main component of the Sun?", answers: ["Hydrogen", "Helium", "Oxygen", "Carbon"], correct: 0 },
        { question: "What type of galaxy is the Milky Way?", answers: ["Elliptical", "Spiral", "Irregular", "Lenticular"], correct: 1 },
        { question: "Which planet has the longest day?", answers: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
        { question: "What is a light-year?", answers: ["A unit of time", "A unit of distance", "A measure of speed", "None of the above"], correct: 1 },
        { question: "What is the primary reason for seasons on Earth?", answers: ["Earth's distance from the sun", "Tilt of Earth's axis", "Sun's intensity", "Earth's rotation"], correct: 1 },
        { question: "Which spacecraft was the first to land on Mars?", answers: ["Viking 1", "Mars Pathfinder", "Spirit", "Opportunity"], correct: 0 },
        { question: "Which planet is known for its extreme winds?", answers: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: 2 },
        { question: "What is the name of the first space station?", answers: ["Mir", "Skylab", "International Space Station", "Salyut"], correct: 1 },
        { question: "What is the term for a comet's tail?", answers: ["Coma", "Plume", "Halo", "Dust Trail"], correct: 0 },
        { question: "What type of celestial body is Halley's Comet?", answers: ["Asteroid", "Meteor", "Comet", "Planet"], correct: 2 },
        { question: "Which planet is the coldest in the solar system?", answers: ["Neptune", "Uranus", "Pluto", "Mercury"], correct: 1 },
        { question: "What do we call the boundary beyond which we cannot see?", answers: ["Event Horizon", "Black Hole", "Cosmic Horizon", "Light Barrier"], correct: 2 },
        { question: "What is the main purpose of a telescope?", answers: ["To observe planets", "To measure distances", "To observe stars", "To study space"], correct: 0 },
        { question: "Which planet has a day that lasts about 10 hours?", answers: ["Jupiter", "Saturn", "Earth", "Neptune"], correct: 0 },
        { question: "What is the term for the study of the universe?", answers: ["Astronomy", "Astrophysics", "Cosmology", "Astrobiology"], correct: 0 },
        { question: "Which planet is known for its blue color?", answers: ["Earth", "Neptune", "Uranus", "Saturn"], correct: 1 },
        { question: "What is the Kuiper Belt?", answers: ["A region of asteroids", "A region of comets", "A region of gas giants", "A region of rocky planets"], correct: 1 },
        { question: "What phenomenon is caused by the gravitational pull of the moon?", answers: ["Tides", "Eclipses", "Auroras", "Seasons"], correct: 0 },
        { question: "Which planet has the most extensive ring system?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
        { question: "What is the largest structure in the universe?", answers: ["Galaxy", "Galaxy Cluster", "Supercluster", "Void"], correct: 2 },
        { question: "Which space probe was launched to study the outer planets?", answers: ["Voyager 1", "Pioneer 10", "New Horizons", "Cassini"], correct: 0 },
        { question: "What is the term for a group of stars that form a recognizable pattern?", answers: ["Galaxy", "Constellation", "Nebula", "Cluster"], correct: 1 },
        { question: "What are the building blocks of stars?", answers: ["Gas and dust", "Metals", "Rocks", "Ice"], correct: 0 },
        { question: "Which planet is known for its Great Red Spot?", answers: ["Jupiter", "Mars", "Saturn", "Neptune"], correct: 0 },
        { question: "What is the phenomenon called when a star explodes?", answers: ["Nova", "Supernova", "Black Hole", "Pulsar"], correct: 1 },
        { question: "What is the name of the first artificial satellite?", answers: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"], correct: 1 },
        { question: "What is the study of extraterrestrial life called?", answers: ["Astrobiology", "Astrophysics", "Astronomy", "Exobiology"], correct: 0 },
        { question: "What do we call the region of space beyond Neptune?", answers: ["Asteroid Belt", "Kuiper Belt", "Oort Cloud", "Heliosphere"], correct: 1 },
        { question: "Which planet has the shortest year?", answers: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 0 },
        { question: "What is the name of NASA's Mars rover that explored Gale Crater?", answers: ["Curiosity", "Perseverance", "Spirit", "Opportunity"], correct: 0 },
        { question: "What is the term for a moon that orbits a planet?", answers: ["Satellite", "Asteroid", "Comet", "Nebula"], correct: 0 },
        { question: "What is the largest type of galaxy?", answers: ["Spiral", "Elliptical", "Irregular", "Lenticular"], correct: 1 },
        { question: "Which planet is famous for its large storms?", answers: ["Jupiter", "Mars", "Venus", "Saturn"], correct: 0 },
        { question: "What is the primary gas in the atmosphere of Mars?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
        { question: "What do we call the remains of a star that has collapsed?", answers: ["White Dwarf", "Neutron Star", "Black Hole", "All of the above"], correct: 3 },
        { question: "What is the closest galaxy to the Milky Way?", answers: ["Andromeda", "Triangulum", "Sombrero", "Whirlpool"], correct: 0 },
        { question: "What is the name of the telescope launched into space to observe distant stars and galaxies?", answers: ["Hubble", "Kepler", "Chandra", "James Webb"], correct: 0 },
        { question: "Which planet has a rotation period of 243 Earth days?", answers: ["Venus", "Mercury", "Jupiter", "Neptune"], correct: 0 },
        { question: "What is the main reason for the seasons on Earth?", answers: ["Distance from the Sun", "Tilt of Earth's axis", "Earth's rotation", "Magnetic field"], correct: 1 },
        { question: "Which planet is known for having a significant tilt, resulting in extreme seasonal variations?", answers: ["Mars", "Uranus", "Earth", "Jupiter"], correct: 1 },
        { question: "What is the most abundant element in the universe?", answers: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correct: 2 },
        { question: "What is the term for a planet that orbits a star outside our solar system?", answers: ["Exoplanet", "Dwarf Planet", "Satellite", "Asteroid"], correct: 0 },
        { question: "Which planet has a surface temperature of around -225 degrees Fahrenheit?", answers: ["Pluto", "Neptune", "Uranus", "Mercury"], correct: 2 },
        { question: "What is the term for the path that a celestial body follows around another body?", answers: ["Orbit", "Trajectory", "Pathway", "Revolution"], correct: 0 },
        { question: "What is a nebula?", answers: ["A star", "A planet", "A cloud of gas and dust", "A black hole"], correct: 2 },
        { question: "Which planet is known for its many moons, including Titan?", answers: ["Mars", "Jupiter", "Saturn", "Neptune"], correct: 2 },
        { question: "What is the name of the first space shuttle?", answers: ["Challenger", "Discovery", "Atlantis", "Columbia"], correct: 3 },
        { question: "What is the most famous telescope located in space?", answers: ["Hubble Space Telescope", "Kepler Space Telescope", "Chandra X-ray Observatory", "James Webb Space Telescope"], correct: 0 },
        { question: "What is the primary purpose of a space probe?", answers: ["To carry humans", "To collect data", "To land on planets", "To build space stations"], correct: 1 },
        { question: "Which planet has the most extreme temperatures?", answers: ["Mercury", "Venus", "Mars", "Uranus"], correct: 1 },
        { question: "What is a pulsar?", answers: ["A type of planet", "A rotating neutron star", "A black hole", "A comet"], correct: 1 },
        { question: "What do we call a star that is in the process of dying?", answers: ["Supernova", "Nova", "Giant", "Main Sequence"], correct: 0 },
        { question: "What is the main component of Saturn's rings?", answers: ["Rock", "Ice", "Gas", "Dust"], correct: 1 },
        { question: "What is the term for the observable universe's edge?", answers: ["Cosmic Background Radiation", "Observable Limit", "Cosmic Horizon", "Event Horizon"], correct: 2 },
        { question: "Which planet is known for its vast canyons and volcanoes?", answers: ["Mars", "Venus", "Earth", "Mercury"], correct: 0 },
        { question: "What is the study of planets outside our solar system called?", answers: ["Planetology", "Exoplanetary Science", "Astrobiology", "Astrophysics"], correct: 1 },
    ],    
    hard: [
        { question: "Which planet has a day longer than its year?", answers: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 0 },
        { question: "What phenomenon causes the tail of a comet?", answers: ["Solar wind", "Gravity", "Magnetism", "Radiation"], correct: 0 },
        { question: "What is the name of the effect that causes the change in frequency of a wave in relation to an observer?", answers: ["Doppler effect", "Photoelectric effect", "Gravitational effect", "Quantum effect"], correct: 0 },
        { question: "Which planet is the hottest in the solar system?", answers: ["Venus", "Mercury", "Mars", "Jupiter"], correct: 0 },
        { question: "How many moons does Mars have?", answers: ["1", "2", "3", "4"], correct: 1 },
        { question: "What is the largest volcano in the solar system?", answers: ["Olympus Mons", "Mauna Loa", "Mount Everest", "Mount Kilimanjaro"], correct: 0 },
        { question: "What is the most abundant gas in the universe?", answers: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Helium"], correct: 0 },
        { question: "What is the primary component of the Sun?", answers: ["Hydrogen", "Helium", "Carbon", "Oxygen"], correct: 0 },
        { question: "What is the main ingredient of stars?", answers: ["Hydrogen", "Helium", "Carbon", "Oxygen"], correct: 0 },
        { question: "What is the distance from the Earth to the Sun?", answers: ["93 million miles", "100 million miles", "87 million miles", "90 million miles"], correct: 0 },
        { question: "What type of galaxy is the Milky Way?", answers: ["Spiral", "Elliptical", "Irregular", "Lenticular"], correct: 0 },
        { question: "Which planet is known as the Ice Giant?", answers: ["Uranus", "Neptune", "Saturn", "Jupiter"], correct: 1 },
        { question: "Which planet has the most extensive ring system?", answers: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: 0 },
        { question: "What is the name of the first artificial satellite?", answers: ["Sputnik", "Apollo", "Voyager", "Hubble"], correct: 0 },
        { question: "Which planet is tilted at an angle of 98 degrees?", answers: ["Uranus", "Venus", "Neptune", "Mars"], correct: 0 },
        { question: "What is the chemical formula for table salt?", answers: ["NaCl", "KCl", "CaCl2", "MgCl2"], correct: 0 },
        { question: "What is the second most abundant element in the universe?", answers: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 0 },
        { question: "What is the approximate age of the universe?", answers: ["10 billion years", "13.8 billion years", "15 billion years", "20 billion years"], correct: 1 },
        { question: "Which planet has the largest ocean?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 0 },
        { question: "What type of star is the Sun?", answers: ["Red dwarf", "White dwarf", "Main sequence", "Neutron star"], correct: 2 },
        { question: "What is the most widely accepted theory of the universe's origin?", answers: ["Big Bang", "Steady State", "Multiverse", "String Theory"], correct: 0 },
        { question: "What is the name of the effect that causes the apparent bending of light around massive objects?", answers: ["Gravitational lensing", "Refraction", "Reflection", "Diffraction"], correct: 0 },
        { question: "What is the largest known structure in the universe?", answers: ["Galaxy cluster", "Supercluster", "Void", "Filament"], correct: 1 },
        { question: "Which planet has a surface pressure 92 times that of Earth?", answers: ["Venus", "Jupiter", "Neptune", "Uranus"], correct: 0 },
        { question: "What type of black hole forms from the remnants of a supernova?", answers: ["Stellar black hole", "Supermassive black hole", "Primordial black hole", "Intermediate black hole"], correct: 0 },
        { question: "What is the main component of the gas giants?", answers: ["Rock", "Ice", "Gas", "Liquid"], correct: 2 },
        { question: "What is the approximate temperature at the core of the Sun?", answers: ["1 million °C", "5 million °C", "15 million °C", "25 million °C"], correct: 2 },
        { question: "Which planet's atmosphere contains methane?", answers: ["Mars", "Venus", "Uranus", "Neptune"], correct: 3 },
        { question: "What is the name of the boundary around a black hole beyond which nothing can escape?", answers: ["Event horizon", "Singularity", "Accretion disk", "Photon sphere"], correct: 0 },
        { question: "What is the primary method for detecting exoplanets?", answers: ["Transits", "Radial velocity", "Direct imaging", "Gravitational lensing"], correct: 0 },
        { question: "What is the term for the fading of light from distant galaxies due to the expansion of the universe?", answers: ["Doppler shift", "Redshift", "Blueshift", "Gravitational shift"], correct: 1 },
        { question: "Which planet has a moon that is larger than the planet itself?", answers: ["Pluto", "Mars", "Earth", "Mercury"], correct: 0 },
        { question: "What is the name of the largest moon of Saturn?", answers: ["Titan", "Rhea", "Iapetus", "Enceladus"], correct: 0 },
        { question: "What is the most common type of star in the universe?", answers: ["Red dwarf", "Yellow dwarf", "Giant", "Supergiant"], correct: 0 },
        { question: "What is the average density of Earth compared to water?", answers: ["Less than water", "Equal to water", "Greater than water", "Twice that of water"], correct: 2 },
        { question: "What is the term for a star that explodes as a result of nuclear fusion?", answers: ["Supernova", "Nova", "Red giant", "White dwarf"], correct: 0 },
        { question: "Which space mission first took images of the far side of the moon?", answers: ["Apollo 11", "Luna 3", "Voyager 1", "Chandrayaan-1"], correct: 1 },
        { question: "What is the primary fuel for nuclear fusion in stars?", answers: ["Hydrogen", "Helium", "Carbon", "Uranium"], correct: 0 },
        { question: "What is the term for a rocky body that orbits a star but is not large enough to be a planet?", answers: ["Asteroid", "Comet", "Dwarf planet", "Meteor"], correct: 0 },
        { question: "What is the largest known galaxy?", answers: ["IC 1101", "Milky Way", "Andromeda", "Sombrero"], correct: 0 },
        { question: "What is the average temperature of Neptune?", answers: ["-214 °C", "-230 °C", "-200 °C", "-180 °C"], correct: 1 },
        { question: "What is the primary component of Jupiter's atmosphere?", answers: ["Hydrogen", "Helium", "Methane", "Ammonia"], correct: 0 },
        { question: "What type of radiation is primarily emitted by black holes?", answers: ["Gamma rays", "X-rays", "Radio waves", "Infrared"], correct: 1 },
        { question: "What is the name of the first woman in space?", answers: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"], correct: 0 },
        { question: "Which planet is often referred to as Earth's twin?", answers: ["Venus", "Mars", "Mercury", "Jupiter"], correct: 0 },
        { question: "What is the phenomenon of stars forming in groups called?", answers: ["Star cluster", "Galaxy", "Nebula", "Supernova"], correct: 0 },
        { question: "What is the name of the first successful Mars rover?", answers: ["Spirit", "Opportunity", "Curiosity", "Perseverance"], correct: 0 },
        { question: "Which type of galaxy is characterized by a smooth, featureless light profile?", answers: ["Elliptical", "Spiral", "Irregular", "Lenticular"], correct: 0 },
        { question: "What is the name of the first human-made object to reach the moon?", answers: ["Apollo 11", "Luna 2", "Voyager 1", "Mars Rover"], correct: 1 },
        { question: "Which planet's day is longer than its year?", answers: ["Venus", "Jupiter", "Saturn", "Mercury"], correct: 0 },
        { question: "What is the name of the largest terrestrial planet?", answers: ["Earth", "Mars", "Venus", "Mercury"], correct: 0 },
        { question: "What is the term for a region in space with a gravitational pull so strong that nothing can escape?", answers: ["Black hole", "Neutron star", "White dwarf", "Quasar"], correct: 0 },
        { question: "What is the name of the galaxy closest to the Milky Way?", answers: ["Andromeda", "Triangulum", "Whirlpool", "Sombrero"], correct: 0 },
        { question: "What is the main driver of plate tectonics on Earth?", answers: ["Convection currents", "Solar energy", "Gravitational pull", "Moon's gravity"], correct: 0 },
        { question: "Which planet has the most extreme temperature fluctuations?", answers: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 0 },
        { question: "What is the name of the boundary that separates the Earth's atmosphere from outer space?", answers: ["Kármán line", "Geostationary orbit", "Stratosphere", "Troposphere"], correct: 0 },
        { question: "What is the term for the hypothetical end point of the universe's expansion?", answers: ["Big Freeze", "Big Crunch", "Big Rip", "Heat Death"], correct: 0 },
        { question: "What is the primary method of determining the mass of a star?", answers: ["Spectroscopy", "Kepler's laws", "Stellar parallax", "Newton's laws"], correct: 1 },
        { question: "What is the name of the region surrounding a black hole from which light cannot escape?", answers: ["Event horizon", "Accretion disk", "Photon sphere", "Singularity"], correct: 0 },
        { question: "What is the term for the process of star formation from a molecular cloud?", answers: ["Gravitational collapse", "Nuclear fusion", "Accretion", "Coalescence"], correct: 0 },
        { question: "Which spacecraft was the first to successfully land on Mars?", answers: ["Viking 1", "Mars Pathfinder", "Spirit", "Curiosity"], correct: 0 },
        { question: "What is the primary source of energy for the Earth?", answers: ["The Sun", "Geothermal", "Nuclear", "Wind"], correct: 0 },
        { question: "Which planet is known for its prominent rings?", answers: ["Saturn", "Uranus", "Jupiter", "Neptune"], correct: 0 },
        { question: "What is the term for a star that has exhausted its nuclear fuel?", answers: ["White dwarf", "Neutron star", "Red giant", "Black hole"], correct: 0 },
        { question: "What is the term for the expansion of the universe observed through redshift?", answers: ["Hubble's law", "Newton's law", "Einstein's theory", "Kepler's laws"], correct: 0 },
        { question: "What is the name of the largest moon of Jupiter?", answers: ["Ganymede", "Callisto", "Io", "Europa"], correct: 0 },
        { question: "What is the name of the dark region on the Moon's surface?", answers: ["Mare", "Craters", "Highlands", "Plains"], correct: 0 },
        { question: "What is the term for a celestial object that orbits a planet?", answers: ["Satellite", "Planet", "Asteroid", "Comet"], correct: 0 },
        { question: "What is the primary method used to study the universe's early stages?", answers: ["Cosmic microwave background radiation", "Gravitational waves", "Supernovae", "Galactic redshift"], correct: 0 },
        { question: "What is the chemical composition of the Martian atmosphere?", answers: ["Nitrogen and Oxygen", "Carbon Dioxide and Argon", "Hydrogen and Helium", "Methane and Ammonia"], correct: 1 },
        { question: "Which element is used in the nuclear fusion process within stars?", answers: ["Hydrogen", "Oxygen", "Carbon", "Iron"], correct: 0 },
        { question: "What is the term for the process of a star collapsing under its gravity?", answers: ["Supernova", "Black hole formation", "Nova", "White dwarf"], correct: 1 },
        { question: "Which planet is the farthest from the Sun?", answers: ["Pluto", "Neptune", "Uranus", "Saturn"], correct: 1 },
    ]    
};


// Function to start the quiz with the selected difficulty
function startQuiz(difficulty) {
    currentLevel = difficulty;
    totalQuestions = parseInt(document.getElementById('questionCount').value);
    if (totalQuestions > 20) totalQuestions = 20;
    if (totalQuestions < 1) totalQuestions = 1;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quizContainer').style.display = 'flex';
    document.getElementById('questionLimit').style.display = 'none';
    showQuestion(currentLevel);
}

// Function to show the current question
function showQuestion(difficulty) {
    const quizQuestions = questions[difficulty];
    const randomQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
    
    if (currentQuestionIndex < randomQuestions.length) {
        const question = randomQuestions[currentQuestionIndex];
        document.getElementById('quizQuestion').textContent = question.question;
        const answersDiv = document.getElementById('answers');
        answersDiv.innerHTML = '';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-button';
            button.textContent = answer;
            button.onclick = () => checkAnswer(index, question.correct);
            answersDiv.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

// Function to check the answer
function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(button => button.disabled = true); // Disable all buttons

    if (selected === correct) {
        score++;
        document.getElementById('currentScore').textContent = score; // Update current score
        setTimeout(() => showQuestion(currentLevel), 1400); // Next question after 1.4 seconds
    } else {
        alert(`Incorrect! Your current score is ${score}.`);
        setTimeout(() => showQuestion(currentLevel), 1400); // Next question after 1.4 seconds
    }
}

// Function to end the quiz and show score
function endQuiz() {
    document.getElementById('quizContainer').style.display = 'none';
    alert(`Quiz Over! Your score is ${score} out of ${totalQuestions}`);
}

function exitGame() {
    // Functionality to exit the game, e.g., redirect or reset
    window.location.reload();
}
