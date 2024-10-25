const GAME_STATE = {
    currentLevel: 1,
    maxLevel: 4,
    unlockedLevels: [1],
    selectedShip: 1,
    miniRockets: 0,
    levelConfigs: {
        1: { 
            alienSpeed: 2, 
            spawnRate: 2000, 
            requiredScore: 1000,
            alienType: 'basic'
        },
        2: { 
            alienSpeed: 3, 
            spawnRate: 1500, 
            requiredScore: 1000,
            alienType: 'speeder'
        },
        3: { 
            alienSpeed: 4, 
            spawnRate: 1000, 
            requiredScore: 1000,
            alienType: 'tank'
        },
        4: { 
            alienSpeed: 5, 
            spawnRate: 800, 
            requiredScore: 1000,
            isBoss: true,
            bossHealth: 300,
            spawnMinions: true
        }
    }
};

const ALIEN_TYPES = {
    basic: {
        svg: `<path d="M50 20 L70 45 L60 80 L40 80 L30 45 Z" fill="#FF4081"/>`,
        health: 10,
        points: 10
    },
    speeder: {
        svg: `<path d="M30 20 L70 20 L60 70 L40 70 Z" fill="#9C27B0"/>`,
        health: 5,
        points: 15
    },
    tank: {
        svg: `<path d="M20 30 L80 30 L70 80 L30 80 Z" fill="#F44336"/>`,
        health: 20,
        points: 20
    },
    boss: {
        svg: `<path d="M50 0 L100 50 L80 100 L20 100 L0 50 Z" fill="#E91E63"/>`,
        health: 1000,
        points: 500
    }
};

function saveProgress() {
    localStorage.setItem('spaceGameProgress', JSON.stringify({
        unlockedLevels: GAME_STATE.unlockedLevels,
        highScores: GAME_STATE.highScores || {}
    }));
}

function loadProgress() {
    const saved = localStorage.getItem('spaceGameProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        GAME_STATE.unlockedLevels = progress.unlockedLevels;
        GAME_STATE.highScores = progress.highScores || {};
        updateLevelButtons();
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        localStorage.removeItem('spaceGameProgress');
        GAME_STATE.unlockedLevels = [1];
        GAME_STATE.highScores = {};
        updateLevelButtons();
    }
}

function updateLevelButtons() {
    document.querySelectorAll('.level-button').forEach(button => {
        const level = parseInt(button.dataset.level);
        button.classList.toggle('unlocked', GAME_STATE.unlockedLevels.includes(level));
        button.disabled = !GAME_STATE.unlockedLevels.includes(level);
    });
}

let score = 0;
let health = 100;
let gameActive = false;
let playerPos = window.innerWidth / 2;
let alienSpeed = 2;
let aliens = [];
let lasers = [];
let helpers = [];
let keys = {};

function createStars() {
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1 + 's';
        document.getElementById('gameCanvas').appendChild(star);
    }
}

function createPlanets() {
    const colors = ['#FF9800', '#E91E63', '#9C27B0'];
    for (let i = 0; i < 3; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.width = (Math.random() * 100 + 50) + 'px';
        planet.style.height = planet.style.width;
        planet.style.background = colors[i];
        planet.style.left = Math.random() * 80 + 10 + '%';
        planet.style.top = Math.random() * 80 + 10 + '%';
        planet.style.opacity = '0.3';
        document.getElementById('gameCanvas').appendChild(planet);
    }
}

window.startGame = function(level) {
    GAME_STATE.currentLevel = level || 1;
    const config = GAME_STATE.levelConfigs[GAME_STATE.currentLevel];
    alienSpeed = config.alienSpeed;
    document.getElementById('shipSelect').style.display = 'none';
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('levelSelect').style.display = 'none';
    gameActive = true;
    createStars();
    createPlanets();
    
    if (GAME_STATE.currentLevel === 4) {
        GAME_STATE.miniRockets = 2;
        for (let i = 0; i < 2; i++) {
            helpers.push(createHelperRocket());
        }
    }
    
    gameLoop();
    spawnAliens();
}

function createAlien(type = 'basic') {
    const alien = document.createElement('div');
    alien.className = GAME_STATE.levelConfigs[GAME_STATE.currentLevel].isBoss ? 'alien-boss' : 'alien';
    
    const x = Math.random() * (window.innerWidth - 60);
    alien.style.left = x + 'px';
    alien.style.top = '-60px';
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.width = '100%';
    svg.style.height = '100%';
    
    const alienDesign = ALIEN_TYPES[type];
    svg.innerHTML = alienDesign.svg;
    alien.appendChild(svg);
    
    document.getElementById('gameCanvas').appendChild(alien);
    return {
        element: alien,
        x: x,
        y: -60,
        speed: GAME_STATE.levelConfigs[GAME_STATE.currentLevel].alienSpeed,
        health: alienDesign.health,
        points: alienDesign.points
    };
}

function spawnAliens() {
    if (!gameActive) return;
    const alienType = GAME_STATE.levelConfigs[GAME_STATE.currentLevel].alienType;
    aliens.push(createAlien(alienType));
    setTimeout(spawnAliens, GAME_STATE.levelConfigs[GAME_STATE.currentLevel].spawnRate);
}

function selectShip(shipId) {
    GAME_STATE.selectedShip = shipId;
    const player = document.getElementById('player');
    
    switch(shipId) {
        case 1:
            player.innerHTML = `
                <defs>
                    <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#2196F3"/>
                        <stop offset="100%" style="stop-color:#4CAF50"/>
                    </linearGradient>
                </defs>
                <path d="M50 0 L80 80 L50 100 L20 80 Z" fill="url(#rocketGrad)"/>
                <circle cx="50" cy="40" r="10" fill="#fff"/>
                <path class="rocket-flame" d="M40 100 L50 120 L60 100 Z" fill="#FF9800"/>
            `;
            break;
        case 2:
            player.innerHTML = `
                <path d="M20 80 L50 0 L80 80 L50 60 Z" fill="#4CAF50"/>
                <circle cx="50" cy="40" r="8" fill="#fff"/>
                <path class="rocket-flame" d="M40 100 L50 120 L60 100 Z" fill="#FF9800"/>
            `;
            break;
        case 3:
            player.innerHTML = `
                <path d="M10 80 L50 0 L90 80 L50 70 Z" fill="#2196F3"/>
                <rect x="35" y="30" width="30" height="20" fill="#fff"/>
                <path class="rocket-flame" d="M40 100 L50 120 L60 100 Z" fill="#FF9800"/>
            `;
            break;
    }
}

function createHelperRocket() {
    const rocket = document.createElement('div');
    rocket.className = 'mini-rocket';
    rocket.innerHTML = `<svg viewBox="0 0 40 60">
        <path d="M20 0 L35 40 L20 50 L5 40 Z" fill="#2196F3"/>
    </svg>`;
    document.getElementById('gameCanvas').appendChild(rocket);
    
    const side = GAME_STATE.miniRockets % 2 === 0 ? -60 : 60;
    return {
        element: rocket,
        x: playerPos + side,
        y: window.innerHeight - 50,
        lastShot: null
    };
}

function helperRocketShoot(helper) {
    if (!gameActive) return;
    const laser = document.createElement('div');
    laser.className = 'laser';
    laser.style.left = (helper.x + 15) + 'px';
    laser.style.top = helper.y + 'px';
    document.getElementById('gameCanvas').appendChild(laser);
    lasers.push({
        element: laser,
        x: helper.x + 15,
        y: helper.y
    });
}

function shoot() {
    if (!gameActive) return;
    const laser = document.createElement('div');
    laser.className = 'laser';
    laser.style.left = (playerPos + 38) + 'px';
    laser.style.bottom = '130px';
    document.getElementById('gameCanvas').appendChild(laser);
    lasers.push({
        element: laser,
        x: playerPos + 38,
        y: window.innerHeight - 130
    });
}

function checkCollision(rect1, rect2) {
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

function updateGame() {
    if (!gameActive) return;
    
    if (keys.ArrowLeft) playerPos = Math.max(0, playerPos - 10);
    if (keys.ArrowRight) playerPos = Math.min(window.innerWidth - 80, playerPos + 10);
    document.getElementById('player').style.left = playerPos + 'px';

    lasers.forEach((laser, laserIndex) => {
        laser.y -= 10;
        laser.element.style.top = laser.y + 'px';
        
        if (laser.y < 0) {
            laser.element.remove();
            lasers.splice(laserIndex, 1);
        }
        
        aliens.forEach((alien, alienIndex) => {
            const laserRect = laser.element.getBoundingClientRect();
            const alienRect = alien.element.getBoundingClientRect();
            
            if (checkCollision(laserRect, alienRect)) {
                const explosion = document.createElement('div');
                explosion.className = 'explosion';
                explosion.style.left = alien.x + 'px';
                explosion.style.top = alien.y + 'px';
                explosion.innerHTML = '💥';
                document.getElementById('gameCanvas').appendChild(explosion);
                
                setTimeout(() => explosion.remove(), 500);
                
                alien.element.remove();
                aliens.splice(alienIndex, 1);
                laser.element.remove();
                lasers.splice(laserIndex, 1);
                score += alien.points;
                document.getElementById('score').textContent = 'Score: ' + score;
            }
        });
    });

    aliens.forEach((alien, index) => {
        alien.y += alien.speed;
        alien.element.style.top = alien.y + 'px';
        
        if (alien.y > window.innerHeight) {
            alien.element.remove();
            aliens.splice(index, 1);
            health -= 10;
            document.getElementById('health').textContent = 'Health: ' + health;
            
            if (health <= 0) {
                gameOver();
            }
        }
        
        const alienRect = alien.element.getBoundingClientRect();
        const playerRect = document.getElementById('player').getBoundingClientRect();
        
        if (checkCollision(alienRect, playerRect)) {
            alien.element.remove();
            aliens.splice(index, 1);
            health -= 20;
            document.getElementById('health').textContent = 'Health: ' + health;
            
            if (health <= 0) {
                gameOver();
            }
        }
    });

    // Auto-shoot for helper rockets
    if (GAME_STATE.currentLevel === 4) {
        helpers.forEach(helper => {
            if (!helper.lastShot || Date.now() - helper.lastShot >= 1000) {
                helperRocketShoot(helper);
                helper.lastShot = Date.now();
            }
            
            const side = helpers.indexOf(helper) % 2 === 0 ? -60 : 60;
            helper.x = playerPos + side;
            helper.y = window.innerHeight - 50;
            helper.element.style.left = helper.x + 'px';
            helper.element.style.bottom = '50px';
        });
    }

    // Boss spawning minions
    if (GAME_STATE.currentLevel === 4 && aliens.length > 0) {
        const boss = aliens.find(a => a.element.classList.contains('alien-boss'));
        if (boss && Math.random() < 0.02) {
            const minion = createAlien('basic');
            minion.x = boss.x + Math.random() * 200 - 100;
            minion.y = boss.y + 100;
            minion.element.style.left = minion.x + 'px';
            minion.element.style.top = minion.y + 'px';
            aliens.push(minion);
        }
    }
}

function gameOver() {
    gameActive = false;
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
    
    const config = GAME_STATE.levelConfigs[GAME_STATE.currentLevel];
    if (score >= config.requiredScore) {
        const nextLevel = GAME_STATE.currentLevel + 1;
        if (nextLevel <= GAME_STATE.maxLevel && !GAME_STATE.unlockedLevels.includes(nextLevel)) {
            GAME_STATE.unlockedLevels.push(nextLevel);
            saveProgress();
            alert(`Congratulations! You've unlocked Level ${nextLevel}!`);
        }
    }
}

function gameLoop() {
    if (!gameActive) return;
    updateGame();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    if (e.key === ' ') {
        shoot();
        e.preventDefault();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

let touchStartX = null;
document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    if (touchStartX === null) return;
    
    const touchX = e.touches[0].clientX;
    const diff = touchX - touchStartX;
    
    playerPos = Math.max(0, Math.min(window.innerWidth - 80, playerPos + diff));
    document.getElementById('player').style.left = playerPos + 'px';
    
    touchStartX = touchX;
});

document.addEventListener('touchend', () => {
    touchStartX = null;
    shoot();
});

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    document.querySelectorAll('.level-button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('unlocked')) {
                startGame(parseInt(button.dataset.level));
            }
        });
    });
    document.querySelectorAll('.ship-choice').forEach(choice => {
        choice.addEventListener('click', () => {
            const shipId = parseInt(choice.dataset.ship);
            selectShip(shipId);
            document.getElementById('shipSelect').style.display = 'none';
            document.getElementById('levelSelect').style.display = 'block';
        });
    });
});