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

// Маппинг для корректных имен файлов иконок (для Dota 2 Wiki)
const heroImageMap = {
    "Anti-Mage": "Anti-Mage",
    "Centaur Warrunner": "Centaur Warrunner",
    "Clockwerk": "Clockwerk",
    "Dawnbreaker": "Dawnbreaker",
    "Doom": "Doom",
    "Io": "Io",
    "Lifestealer": "Lifestealer",
    "Magnus": "Magnus",
    "Marci": "Marci",
    "Muerta": "Muerta",
    "Nature's Prophet": "Nature's Prophet",
    "Necrophos": "Necrophos",
    "Outworld Destroyer": "Outworld Destroyer",
    "Primal Beast": "Primal Beast",
    "Queen of Pain": "Queen of Pain",
    "Shadow Fiend": "Shadow Fiend",
    "Timbersaw": "Timbersaw",
    "Treant Protector": "Treant Protector",
    "Underlord": "Underlord",
    "Vengeful Spirit": "Vengeful Spirit",
    "Windranger": "Windranger",
    "Wraith King": "Wraith King",
    "Zeus": "Zeus"
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
        return heroImageMap[hero] || hero;
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
        
        myPicksList.innerHTML = myPicks.length ? myPicks.map(h => `<li><img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/${h.charAt(0).toLowerCase()}/${getImageHash(h)}/${getHeroImageName(h)}_icon.png" alt="${h}">${h}</li>`).join("") : "<li>Пусто</li>";
        enemyPicksList.innerHTML = enemyPicks.length ? enemyPicks.map(h => `<li><img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/${h.charAt(0).toLowerCase()}/${getImageHash(h)}/${getHeroImageName(h)}_icon.png" alt="${h}">${h}</li>`).join("") : "<li>Пусто</li>";
        
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

    function getImageHash(hero) {
        const hashes = {
            "Abaddon": "4/46", "Alchemist": "f/fd", "Ancient Apparition": "f/f0", "Anti-Mage": "8/85",
            "Arc Warden": "c/c8", "Axe": "e/e2", "Bane": "1/1e", "Batrider": "c/cf",
            "Beastmaster": "1/11", "Bloodseeker": "e/ea", "Bounty Hunter": "e/e7", "Brewmaster": "6/68",
            "Bristleback": "6/61", "Broodmother": "8/89", "Centaur Warrunner": "5/51", "Chaos Knight": "2/29",
            "Chen": "2/26", "Clinkz": "e/e8", "Clockwerk": "c/c1", "Crystal Maiden": "2/27",
            "Dark Seer": "0/03", "Dark Willow": "d/df", "Dawnbreaker": "1/1a", "Dazzle": "c/c2",
            "Death Prophet": "e/e4", "Disruptor": "d/d6", "Doom": "e/eb", "Dragon Knight": "e/e5",
            "Drow Ranger": "e/e6", "Earth Spirit": "e/e9", "Earthshaker": "6/66", "Elder Titan": "e/e0",
            "Ember Spirit": "e/e3", "Enchantress": "e/e1", "Enigma": "e/e7", "Faceless Void": "e/ef",
            "Grimstroke": "e/e9", "Gyrocopter": "e/ea", "Hoodwink": "e/e8", "Huskar": "e/e5",
            "Invoker": "e/e2", "Io": "e/e3", "Jakiro": "e/e4", "Juggernaut": "e/e6",
            "Keeper of the Light": "e/e7", "Kunkka": "e/e8", "Legion Commander": "e/e9", "Leshrac": "e/ea",
            "Lich": "e/eb", "Lifestealer": "e/ec", "Lina": "e/ed", "Lion": "e/ee",
            "Lone Druid": "e/ef", "Luna": "e/e0", "Lycan": "e/e1", "Magnus": "e/e2",
            "Marci": "e/e3", "Mars": "e/e4", "Medusa": "e/e5", "Meepo": "e/e6",
            "Mirana": "e/e7", "Monkey King": "e/e8", "Morphling": "e/e9", "Muerta": "e/ea",
            "Naga Siren": "e/eb", "Nature's Prophet": "e/ec", "Necrophos": "e/ed", "Night Stalker": "e/ee",
            "Nyx Assassin": "e/ef", "Ogre Magi": "e/e0", "Omniknight": "e/e1", "Oracle": "e/e2",
            "Outworld Destroyer": "e/e3", "Pangolier": "e/e4", "Phantom Assassin": "e/e5", "Phantom Lancer": "e/e6",
            "Phoenix": "e/e7", "Primal Beast": "e/e8", "Puck": "e/e9", "Pudge": "e/ea",
            "Pugna": "e/eb", "Queen of Pain": "e/ec", "Razor": "e/ed", "Riki": "e/ee",
            "Rubick": "e/ef", "Sand King": "e/e0", "Shadow Demon": "e/e1", "Shadow Fiend": "e/e2",
            "Shadow Shaman": "e/e3", "Silencer": "e/e4", "Skywrath Mage": "e/e5", "Slardar": "e/e6",
            "Slark": "e/e7", "Snapfire": "e/e8", "Sniper": "e/e9", "Spectre": "e/ea",
            "Spirit Breaker": "e/eb", "Storm Spirit": "e/ec", "Sven": "e/ed", "Techies": "e/ee",
            "Templar Assassin": "e/ef", "Terrorblade": "e/e0", "Tidehunter": "e/e1", "Timbersaw": "e/e2",
            "Tinker": "e/e3", "Tiny": "e/e4", "Treant Protector": "e/e5", "Troll Warlord": "e/e6",
            "Tusk": "e/e7", "Underlord": "e/e8", "Undying": "e/e9", "Ursa": "e/ea",
            "Vengeful Spirit": "e/eb", "Venomancer": "e/ec", "Viper": "e/ed", "Visage": "e/ee",
            "Void Spirit": "e/ef", "Warlock": "e/e0", "Weaver": "e/e1", "Windranger": "e/e2",
            "Winter Wyvern": "e/e3", "Witch Doctor": "e/e4", "Wraith King": "e/e5", "Zeus": "e/e6"
        };
        return hashes[hero] || "0/00"; // По умолчанию, если хэш не найден
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
                <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/${counter.charAt(0).toLowerCase()}/${getImageHash(counter)}/${getHeroImageName(counter)}_icon.png" alt="${counter}">
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
                    <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/${hero.charAt(0).toLowerCase()}/${getImageHash(hero)}/${getHeroImageName(hero)}_icon.png" alt="${hero}">
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
