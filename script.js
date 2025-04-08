const heroes = {
    "Abaddon": ["Ancient Apparition", "Shadow Demon", "Outworld Destroyer"],
    "Alchemist": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Ancient Apparition": ["Huskar", "Alchemist", "Morphling"],
    "Anti-Mage": ["Axe", "Lion", "Invoker"],
    "Arc Warden": ["Phantom Lancer", "Chaos Knight", "Meepo"],
    "Axe": ["Sniper", "Dazzle", "Juggernaut"],
    "Bane": ["Silencer", "Pugna", "Oracle"],
    "Batrider": ["Rubick", "Silencer", "Skywrath Mage"],
    "Beastmaster": ["Shadow Demon", "Winter Wyvern", "Tinker"],
    "Bloodseeker": ["Ancient Apparition", "Shadow Demon", "Dazzle"],
    "Bounty Hunter": ["Slardar", "Zeus", "Spirit Breaker"],
    "Brewmaster": ["Silencer", "Shadow Demon", "Doom"],
    "Bristleback": ["Ancient Apparition", "Viper", "Slardar"],
    "Broodmother": ["Earthshaker", "Axe", "Legion Commander"],
    "Centaur Warrunner": ["Ancient Apparition", "Shadow Demon", "Necrophos"],
    "Chaos Knight": ["Sven", "Phantom Lancer", "Earthshaker"],
    "Chen": ["Ancient Apparition", "Shadow Demon", "Lion"],
    "Clinkz": ["Bloodseeker", "Slardar", "Bounty Hunter"],
    "Clockwerk": ["Sniper", "Silencer", "Nature's Prophet"],
    "Crystal Maiden": ["Pugna", "Lion", "Invoker"],
    "Dark Seer": ["Ancient Apparition", "Shadow Demon", "Oracle"],
    "Dark Willow": ["Pugna", "Silencer", "Skywrath Mage"],
    "Dawnbreaker": ["Ancient Apparition", "Shadow Demon", "Necrophos"],
    "Dazzle": ["Axe", "Pudge", "Juggernaut"],
    "Death Prophet": ["Ancient Apparition", "Pugna", "Invoker"],
    "Disruptor": ["Silencer", "Pugna", "Night Stalker"],
    "Doom": ["Shadow Demon", "Ancient Apparition", "Oracle"],
    "Dragon Knight": ["Ancient Apparition", "Shadow Demon", "Viper"],
    "Drow Ranger": ["Phantom Assassin", "Storm Spirit", "Pudge"],
    "Earth Spirit": ["Silencer", "Pugna", "Rubick"],
    "Earthshaker": ["Phantom Lancer", "Chaos Knight", "Naga Siren"],
    "Elder Titan": ["Shadow Demon", "Ancient Apparition", "Invoker"],
    "Ember Spirit": ["Silencer", "Lion", "Doom"],
    "Enchantress": ["Ancient Apparition", "Lion", "Shadow Demon"],
    "Enigma": ["Rubick", "Silencer", "Ancient Apparition"],
    "Faceless Void": ["Ancient Apparition", "Disruptor", "Shadow Demon"],
    "Grimstroke": ["Silencer", "Pugna", "Skywrath Mage"],
    "Gyrocopter": ["Phantom Assassin", "Storm Spirit", "Sniper"],
    "Hoodwink": ["Slardar", "Bounty Hunter", "Spirit Breaker"],
    "Huskar": ["Ancient Apparition", "Viper", "Shadow Demon"],
    "Invoker": ["Silencer", "Shadow Fiend", "Lion"],
    "Io": ["Ancient Apparition", "Shadow Demon", "Silencer"],
    "Jakiro": ["Silencer", "Pugna", "Invoker"],
    "Juggernaut": ["Shadow Fiend", "Pudge", "Axe"],
    "Keeper of the Light": ["Silencer", "Pugna", "Night Stalker"],
    "Kunkka": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Legion Commander": ["Winter Wyvern", "Dazzle", "Oracle"],
    "Leshrac": ["Pugna", "Silencer", "Anti-Mage"],
    "Lich": ["Pugna", "Silencer", "Ancient Apparition"],
    "Lifestealer": ["Ancient Apparition", "Shadow Demon", "Dazzle"],
    "Lina": ["Pugna", "Silencer", "Anti-Mage"],
    "Lion": ["Pugna", "Invoker", "Shadow Fiend"],
    "Lone Druid": ["Shadow Demon", "Ancient Apparition", "Bane"],
    "Luna": ["Ancient Apparition", "Shadow Demon", "Phantom Assassin"],
    "Lycan": ["Shadow Demon", "Ancient Apparition", "Bristleback"],
    "Magnus": ["Shadow Demon", "Rubick", "Winter Wyvern"],
    "Marci": ["Ancient Apparition", "Shadow Demon", "Oracle"],
    "Mars": ["Ancient Apparition", "Shadow Demon", "Outworld Destroyer"],
    "Medusa": ["Ancient Apparition", "Invoker", "Shadow Demon"],
    "Meepo": ["Earthshaker", "Sven", "Winter Wyvern"],
    "Mirana": ["Slardar", "Bounty Hunter", "Spirit Breaker"],
    "Monkey King": ["Shadow Demon", "Ancient Apparition", "Lion"],
    "Morphling": ["Ancient Apparition", "Shadow Demon", "Lion"],
    "Muerta": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Naga Siren": ["Earthshaker", "Lion", "Shadow Demon"],
    "Nature's Prophet": ["Spirit Breaker", "Storm Spirit", "Bounty Hunter"],
    "Necrophos": ["Ancient Apparition", "Shadow Demon", "Dazzle"],
    "Night Stalker": ["Lion", "Shadow Demon", "Disruptor"],
    "Nyx Assassin": ["Silencer", "Zeus", "Bounty Hunter"],
    "Ogre Magi": ["Ancient Apparition", "Shadow Demon", "Pugna"],
    "Omniknight": ["Ancient Apparition", "Shadow Demon", "Outworld Destroyer"],
    "Oracle": ["Silencer", "Pugna", "Night Stalker"],
    "Outworld Destroyer": ["Pugna", "Silencer", "Shadow Fiend"],
    "Pangolier": ["Ancient Apparition", "Shadow Demon", "Silencer"],
    "Phantom Assassin": ["Lion", "Tinker", "Sniper"],
    "Phantom Lancer": ["Earthshaker", "Axe", "Shadow Fiend"],
    "Phoenix": ["Ancient Apparition", "Shadow Demon", "Silencer"],
    "Primal Beast": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Puck": ["Silencer", "Pugna", "Lion"],
    "Pudge": ["Lifestealer", "Shadow Demon", "Dazzle"],
    "Pugna": ["Lion", "Crystal Maiden", "Dazzle"],
    "Queen of Pain": ["Silencer", "Pugna", "Lion"],
    "Razor": ["Ancient Apparition", "Shadow Demon", "Viper"],
    "Riki": ["Slardar", "Bounty Hunter", "Zeus"],
    "Rubick": ["Silencer", "Pugna", "Ancient Apparition"],
    "Sand King": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Shadow Demon": ["Pudge", "Juggernaut", "Phantom Assassin"],
    "Shadow Fiend": ["Invoker", "Storm Spirit", "Lion"],
    "Shadow Shaman": ["Silencer", "Pugna", "Lion"],
    "Silencer": ["Storm Spirit", "Invoker", "Pudge"],
    "Skywrath Mage": ["Pugna", "Silencer", "Anti-Mage"],
    "Slardar": ["Riki", "Bounty Hunter", "Weaver"],
    "Slark": ["Disruptor", "Shadow Demon", "Lion"],
    "Snapfire": ["Silencer", "Pugna", "Invoker"],
    "Sniper": ["Storm Spirit", "Phantom Lancer", "Pudge"],
    "Spectre": ["Ancient Apparition", "Shadow Demon", "Necrophos"],
    "Spirit Breaker": ["Disruptor", "Shadow Demon", "Rubick"],
    "Storm Spirit": ["Silencer", "Pugna", "Invoker"],
    "Sven": ["Ancient Apparition", "Shadow Demon", "Phantom Lancer"],
    "Techies": ["Zeus", "Sniper", "Nature's Prophet"],
    "Templar Assassin": ["Viper", "Ancient Apparition", "Shadow Demon"],
    "Terrorblade": ["Ancient Apparition", "Shadow Demon", "Axe"],
    "Tidehunter": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Timbersaw": ["Ancient Apparition", "Shadow Demon", "Silencer"],
    "Tinker": ["Storm Spirit", "Sniper", "Invoker"],
    "Tiny": ["Ancient Apparition", "Shadow Demon", "Lina"],
    "Treant Protector": ["Ancient Apparition", "Shadow Demon", "Timbersaw"],
    "Troll Warlord": ["Axe", "Shadow Demon", "Winter Wyvern"],
    "Tusk": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Underlord": ["Ancient Apparition", "Shadow Demon", "Slardar"],
    "Undying": ["Ancient Apparition", "Shadow Demon", "Silencer"],
    "Ursa": ["Shadow Demon", "Ancient Apparition", "Viper"],
    "Vengeful Spirit": ["Silencer", "Pugna", "Ancient Apparition"],
    "Venomancer": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Viper": ["Ancient Apparition", "Shadow Demon", "Outworld Destroyer"],
    "Visage": ["Ancient Apparition", "Shadow Demon", "Invoker"],
    "Void Spirit": ["Silencer", "Pugna", "Lion"],
    "Warlock": ["Ancient Apparition", "Silencer", "Invoker"],
    "Weaver": ["Slardar", "Bounty Hunter", "Lion"],
    "Windranger": ["Silencer", "Pugna", "Lion"],
    "Winter Wyvern": ["Ancient Apparition", "Silencer", "Invoker"],
    "Witch Doctor": ["Silencer", "Pugna", "Ancient Apparition"],
    "Wraith King": ["Ancient Apparition", "Shadow Demon", "Necrophos"],
    "Zeus": ["Anti-Mage", "Pugna", "Silencer"]
};

// Обновлённый маппинг для корректных имен файлов иконок
const heroImageMap = {
    "Anti-Mage": "antimage",
    "Centaur Warrunner": "centaur",
    "Clockwerk": "rattletrap",
    "Dawnbreaker": "dawnbreaker",
    "Doom": "doom_bringer",
    "Io": "wisp",
    "Lifestealer": "life_stealer",
    "Magnus": "magnataur",
    "Marci": "marci",
    "Muerta": "muerta",
    "Nature's Prophet": "furion",
    "Necrophos": "necrolyte",
    "Outworld Destroyer": "outworld_destroyer",
    "Primal Beast": "primal_beast",
    "Queen of Pain": "queenofpain",
    "Shadow Fiend": "nevermore",
    "Timbersaw": "shredder",
    "Treant Protector": "treant",
    "Underlord": "abyssal_underlord",
    "Vengeful Spirit": "vengefulspirit",
    "Windranger": "windrunner",
    "Wraith King": "skeleton_king",
    "Zeus": "zuus"
};

let myPicks = [];
let enemyPicks = [];
let pickPhase = 0;
let pickCount = 0;
let firstTeam = null;

document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const draftScreen = document.getElementById("draft-screen");
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

    function getHeroImageName(hero) {
        return heroImageMap[hero] || hero.toLowerCase().replace(/ /g, "_");
    }

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
        heroList.style.display = "block";
    }

    function updateInterface() {
        if (pickPhase === 0) return;
        const heroesToPick = pickPhase <= 4 ? 2 : 1;
        phaseTitle.textContent = `Фаза ${pickPhase} (Выбор ${pickCount}/${heroesToPick})`;
        
        myPicksList.innerHTML = myPicks.length ? myPicks.map(h => `<li><img src="https://cdn.dota2.com/apps/dota2/images/heroes/${getHeroImageName(h)}_icon.png" alt="${h}">${h}</li>`).join("") : "<li>Пусто</li>";
        enemyPicksList.innerHTML = enemyPicks.length ? enemyPicks.map(h => `<li><img src="https://cdn.dota2.com/apps/dota2/images/heroes/${getHeroImageName(h)}_icon.png" alt="${h}">${h}</li>`).join("") : "<li>Пусто</li>";
        
        const wasEnemyTurn = (pickPhase % 2 === 0 && firstTeam === "enemy") || (pickPhase % 2 === 1 && firstTeam === "my");
        if (pickCount === 0 && pickPhase > 1 && wasEnemyTurn) {
            showCounterPicks();
        } else {
            counterPicksDiv.style.display = "none";
        }
        
        if (pickPhase === 6 && pickCount === 1) {
            heroList.style.display = "none";
            counterPicksDiv.style.display = "none";
            restartBtn.style.display = "block";
            phaseTitle.textContent = "Драфт завершён!";
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
        counterPicksList.innerHTML = "";
        suggestions.slice(0, 3).forEach(counter => {
            const card = document.createElement("li");
            card.className = "hero-card";
            card.innerHTML = `
                <img src="https://cdn.dota2.com/apps/dota2/images/heroes/${getHeroImageName(counter)}_icon.png" alt="${counter}">
                <span>${counter}</span>
            `;
            card.addEventListener("click", () => pickHero(counter));
            counterPicksList.appendChild(card);
        });
    }

    function renderHeroes() {
        heroList.innerHTML = "";
        for (let hero in heroes) {
            if (!myPicks.includes(hero) && !enemyPicks.includes(hero)) {
                const card = document.createElement("div");
                card.className = "hero-card";
                card.innerHTML = `
                    <img src="https://cdn.dota2.com/apps/dota2/images/heroes/${getHeroImageName(hero)}_icon.png" alt="${hero}">
                    <span>${hero}</span>
                `;
                card.addEventListener("click", () => pickHero(hero));
                heroList.appendChild(card);
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
});

window.Telegram.WebApp.ready();
