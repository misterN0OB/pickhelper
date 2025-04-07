const heroes = {
    "Abaddon": ["Ancient Apparition", "Shadow Demon", "Outworld Destroyer"],
    "Alchemist": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    // Добавь всех 124 героев с их контр-пиками (для примера оставлю 2)
};

let myPicks = [];
let enemyPicks = [];
let pickPhase = 0;
let pickCount = 0;
let firstTeam = null;

const startScreen = document.getElementById("start-screen");
const draftScreen = document.getElementById("draftScreen");
const phaseTitle = document.getElementById("phase-title");
const myPicksList = document.getElementById("my-picks-list");
const enemyPicksList = document.getElementById("enemy-picks-list");
const counterPicksList = document.getElementById("counter-picks-list");
const counterPicksDiv = document.getElementById("counter-picks");
const heroList = document.getElementById("hero-list");
const restartBtn = document.getElementById("restart");

document.getElementById("enemy-first").addEventListener("click", () => startDraft("enemy"));
document.getElementById("my-first").addEventListener("click", () => startDraft("my"));
restartBtn.addEventListener("click", resetDraft);

function startDraft(team) {
    firstTeam = team;
    pickPhase = 1;
    pickCount = 0;
    startScreen.style.display = "none";
    draftScreen.style.display = "block";
    updateInterface();
    renderHeroes();
}

function resetDraft() {
    myPicks = [];
    enemyPicks = [];
    pickPhase = 0;
    pickCount = 0;
    firstTeam = null;
    startScreen.style.display = "block";
    draftScreen.style.display = "none";
    counterPicksDiv.style.display = "none";
    restartBtn.style.display = "none";
}

function updateInterface() {
    if (pickPhase === 0) return;
    const heroesToPick = pickPhase <= 4 ? 2 : 1;
    phaseTitle.textContent = `Фаза ${pickPhase} (Выбор ${pickCount}/${heroesToPick})`;
    
    myPicksList.innerHTML = myPicks.length ? myPicks.map(h => `<li>${h}</li>`).join("") : "<li>Пусто</li>";
    enemyPicksList.innerHTML = enemyPicks.length ? enemyPicks.map(h => `<li>${h}</li>`).join("") : "<li>Пусто</li>";
    
    if (pickCount === heroesToPick && isEnemyTurn()) {
        showCounterPicks();
    } else {
        counterPicksDiv.style.display = "none";
    }
    
    if (pickPhase === 6 && pickCount === 1) {
        restartBtn.style.display = "block";
        phaseTitle.textContent += " - Драфт завершён!";
    }
}

function isEnemyTurn() {
    return (pickPhase % 2 === 1 && firstTeam === "enemy") || (pickPhase % 2 === 0 && firstTeam === "my");
}

function showCounterPicks() {
    counterPicksDiv.style.display = "block";
    let suggestions = [];
    for (let enemy of enemyPicks) {
        for (let counter of heroes[enemy]) {
            if (!suggestions.includes(counter) && !myPicks.includes(counter) && !enemyPicks.includes(counter)) {
                suggestions.push(counter);
            }
        }
    }
    counterPicksList.innerHTML = suggestions.slice(0, 3).map(h => `<li>${h}</li>`).join("");
}

function renderHeroes() {
    heroList.innerHTML = "";
    const heroesToPick = pickPhase <= 4 ? 2 : 1;
    for (let hero in heroes) {
        if (!myPicks.includes(hero) && !enemyPicks.includes(hero)) {
            const btn = document.createElement("button");
            btn.textContent = hero;
            btn.addEventListener("click", () => pickHero(hero));
            heroList.appendChild(btn);
        }
    }
}

function pickHero(hero) {
    const heroesToPick = pickPhase <= 4 ? 2 : 1;
    if (pickCount >= heroesToPick) return;

    if (isEnemyTurn()) {
        enemyPicks.push(hero);
    } else {
        myPicks.push(hero);
    }
    pickCount++;

    if (pickCount === heroesToPick && pickPhase < 6) {
        pickPhase++;
        pickCount = 0;
    }
    
    updateInterface();
    renderHeroes();
}

// Инициализация Telegram Web App
window.Telegram.WebApp.ready();