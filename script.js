const heroes = {
    "Abaddon": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Outworld Destroyer", 3]],
    "Alchemist": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Ancient Apparition": [["Huskar", 10], ["Alchemist", 5], ["Morphling", 3]],
    "Anti-Mage": [["Axe", 8], ["Lion", 6], ["Invoker", 4]],
    "Arc Warden": [["Phantom Lancer", 8], ["Chaos Knight", 6], ["Meepo", 5]],
    "Axe": [["Sniper", 7], ["Dazzle", 5], ["Juggernaut", 4]],
    "Bane": [["Silencer", 7], ["Pugna", 5], ["Oracle", 3]],
    "Batrider": [["Rubick", 8], ["Silencer", 5], ["Skywrath Mage", 4]],
    "Beastmaster": [["Shadow Demon", 6], ["Winter Wyvern", 5], ["Tinker", 3]],
    "Bloodseeker": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Dazzle", 4]],
    "Bounty Hunter": [["Slardar", 8], ["Zeus", 6], ["Spirit Breaker", 4]],
    "Brewmaster": [["Silencer", 7], ["Shadow Demon", 5], ["Doom", 4]],
    "Bristleback": [["Ancient Apparition", 10], ["Viper", 6], ["Slardar", 5]],
    "Broodmother": [["Earthshaker", 8], ["Axe", 6], ["Legion Commander", 4]],
    "Centaur Warrunner": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Necrophos", 4]],
    "Chaos Knight": [["Sven", 7], ["Phantom Lancer", 6], ["Earthshaker", 5]],
    "Chen": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Lion", 4]],
    "Clinkz": [["Bloodseeker", 8], ["Slardar", 6], ["Bounty Hunter", 5]],
    "Clockwerk": [["Sniper", 7], ["Silencer", 5], ["Nature's Prophet", 4]],
    "Crystal Maiden": [["Pugna", 7], ["Lion", 6], ["Invoker", 4]],
    "Dark Seer": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Oracle", 3]],
    "Dark Willow": [["Pugna", 7], ["Silencer", 6], ["Skywrath Mage", 4]],
    "Dawnbreaker": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Necrophos", 4]],
    "Dazzle": [["Axe", 8], ["Pudge", 6], ["Juggernaut", 4]],
    "Death Prophet": [["Ancient Apparition", 10], ["Pugna", 6], ["Invoker", 4]],
    "Disruptor": [["Silencer", 7], ["Pugna", 5], ["Night Stalker", 4]],
    "Doom": [["Shadow Demon", 8], ["Ancient Apparition", 6], ["Oracle", 4]],
    "Dragon Knight": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Viper", 4]],
    "Drow Ranger": [["Phantom Assassin", 7], ["Storm Spirit", 6], ["Pudge", 5]],
    "Earth Spirit": [["Silencer", 7], ["Pugna", 5], ["Rubick", 4]],
    "Earthshaker": [["Phantom Lancer", 8], ["Chaos Knight", 6], ["Naga Siren", 5]],
    "Elder Titan": [["Shadow Demon", 7], ["Ancient Apparition", 6], ["Invoker", 4]],
    "Ember Spirit": [["Silencer", 8], ["Lion", 6], ["Doom", 4]],
    "Enchantress": [["Ancient Apparition", 10], ["Lion", 6], ["Shadow Demon", 5]],
    "Enigma": [["Rubick", 8], ["Silencer", 6], ["Ancient Apparition", 4]],
    "Faceless Void": [["Ancient Apparition", 10], ["Disruptor", 6], ["Shadow Demon", 5]],
    "Grimstroke": [["Silencer", 7], ["Pugna", 6], ["Skywrath Mage", 4]],
    "Gyrocopter": [["Phantom Assassin", 7], ["Storm Spirit", 6], ["Sniper", 5]],
    "Hoodwink": [["Slardar", 8], ["Bounty Hunter", 6], ["Spirit Breaker", 5]],
    "Huskar": [["Ancient Apparition", 10], ["Viper", 6], ["Shadow Demon", 5]],
    "Invoker": [["Silencer", 8], ["Shadow Fiend", 6], ["Lion", 4]],
    "Io": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Silencer", 4]],
    "Jakiro": [["Silencer", 7], ["Pugna", 6], ["Invoker", 4]],
    "Juggernaut": [["Shadow Fiend", 7], ["Pudge", 6], ["Axe", 5]],
    "Keeper of the Light": [["Silencer", 7], ["Pugna", 6], ["Night Stalker", 4]],
    "Kunkka": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Legion Commander": [["Winter Wyvern", 8], ["Dazzle", 6], ["Oracle", 4]],
    "Leshrac": [["Pugna", 7], ["Silencer", 6], ["Anti-Mage", 5]],
    "Lich": [["Pugna", 7], ["Silencer", 6], ["Ancient Apparition", 4]],
    "Lifestealer": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Dazzle", 4]],
    "Lina": [["Pugna", 7], ["Silencer", 6], ["Anti-Mage", 5]],
    "Lion": [["Pugna", 7], ["Invoker", 6], ["Shadow Fiend", 4]],
    "Lone Druid": [["Shadow Demon", 8], ["Ancient Apparition", 6], ["Bane", 4]],
    "Luna": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Phantom Assassin", 4]],
    "Lycan": [["Shadow Demon", 8], ["Ancient Apparition", 6], ["Bristleback", 4]],
    "Magnus": [["Shadow Demon", 8], ["Rubick", 6], ["Winter Wyvern", 5]],
    "Marci": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Oracle", 4]],
    "Mars": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Outworld Destroyer", 4]],
    "Medusa": [["Ancient Apparition", 10], ["Invoker", 6], ["Shadow Demon", 5]],
    "Meepo": [["Earthshaker", 8], ["Sven", 6], ["Winter Wyvern", 5]],
    "Mirana": [["Slardar", 8], ["Bounty Hunter", 6], ["Spirit Breaker", 5]],
    "Monkey King": [["Shadow Demon", 8], ["Ancient Apparition", 6], ["Lion", 4]],
    "Morphling": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Lion", 4]],
    "Muerta": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Naga Siren": [["Earthshaker", 8], ["Lion", 6], ["Shadow Demon", 5]],
    "Nature's Prophet": [["Spirit Breaker", 8], ["Storm Spirit", 6], ["Bounty Hunter", 5]],
    "Necrophos": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Dazzle", 4]],
    "Night Stalker": [["Lion", 7], ["Shadow Demon", 5], ["Disruptor", 4]],
    "Nyx Assassin": [["Silencer", 8], ["Zeus", 6], ["Bounty Hunter", 5]],
    "Ogre Magi": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Pugna", 4]],
    "Omniknight": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Outworld Destroyer", 4]],
    "Oracle": [["Silencer", 7], ["Pugna", 6], ["Night Stalker", 4]],
    "Outworld Destroyer": [["Pugna", 7], ["Silencer", 6], ["Shadow Fiend", 4]],
    "Pangolier": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Silencer", 4]],
    "Phantom Assassin": [["Lion", 7], ["Tinker", 6], ["Sniper", 5]],
    "Phantom Lancer": [["Earthshaker", 8], ["Axe", 6], ["Shadow Fiend", 5]],
    "Phoenix": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Silencer", 4]],
    "Primal Beast": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Puck": [["Silencer", 8], ["Pugna", 6], ["Lion", 4]],
    "Pudge": [["Lifestealer", 8], ["Shadow Demon", 5], ["Dazzle", 4]],
    "Pugna": [["Lion", 7], ["Crystal Maiden", 6], ["Dazzle", 4]],
    "Queen of Pain": [["Silencer", 8], ["Pugna", 6], ["Lion", 4]],
    "Razor": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Viper", 4]],
    "Riki": [["Slardar", 8], ["Bounty Hunter", 6], ["Zeus", 5]],
    "Rubick": [["Silencer", 8], ["Pugna", 6], ["Ancient Apparition", 4]],
    "Sand King": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Shadow Demon": [["Pudge", 7], ["Juggernaut", 6], ["Phantom Assassin", 5]],
    "Shadow Fiend": [["Invoker", 8], ["Storm Spirit", 6], ["Lion", 4]],
    "Shadow Shaman": [["Silencer", 7], ["Pugna", 6], ["Lion", 4]],
    "Silencer": [["Storm Spirit", 8], ["Invoker", 6], ["Pudge", 5]],
    "Skywrath Mage": [["Pugna", 7], ["Silencer", 6], ["Anti-Mage", 5]],
    "Slardar": [["Riki", 8], ["Bounty Hunter", 6], ["Weaver", 5]],
    "Slark": [["Disruptor", 8], ["Shadow Demon", 5], ["Lion", 4]],
    "Snapfire": [["Silencer", 7], ["Pugna", 6], ["Invoker", 4]],
    "Sniper": [["Storm Spirit", 8], ["Phantom Lancer", 6], ["Pudge", 5]],
    "Spectre": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Necrophos", 4]],
    "Spirit Breaker": [["Disruptor", 8], ["Shadow Demon", 5], ["Rubick", 4]],
    "Storm Spirit": [["Silencer", 8], ["Pugna", 6], ["Invoker", 4]],
    "Sven": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Phantom Lancer", 4]],
    "Techies": [["Zeus", 8], ["Sniper", 6], ["Nature's Prophet", 5]],
    "Templar Assassin": [["Viper", 8], ["Ancient Apparition", 6], ["Shadow Demon", 5]],
    "Terrorblade": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Axe", 4]],
    "Tidehunter": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Timbersaw": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Silencer", 4]],
    "Tinker": [["Storm Spirit", 8], ["Sniper", 6], ["Invoker", 4]],
    "Tiny": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Lina", 4]],
    "Treant Protector": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Timbersaw", 4]],
    "Troll Warlord": [["Axe", 8], ["Shadow Demon", 6], ["Winter Wyvern", 5]],
    "Tusk": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Underlord": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Slardar", 4]],
    "Undying": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Silencer", 4]],
    "Ursa": [["Shadow Demon", 8], ["Ancient Apparition", 6], ["Viper", 4]],
    "Vengeful Spirit": [["Silencer", 7], ["Pugna", 6], ["Ancient Apparition", 4]],
    "Venomancer": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Viper": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Outworld Destroyer", 4]],
    "Visage": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Invoker", 4]],
    "Void Spirit": [["Silencer", 8], ["Pugna", 6], ["Lion", 4]],
    "Warlock": [["Ancient Apparition", 10], ["Silencer", 6], ["Invoker", 4]],
    "Weaver": [["Slardar", 8], ["Bounty Hunter", 6], ["Lion", 4]],
    "Windranger": [["Silencer", 7], ["Pugna", 6], ["Lion", 4]],
    "Winter Wyvern": [["Ancient Apparition", 10], ["Silencer", 6], ["Invoker", 4]],
    "Witch Doctor": [["Silencer", 7], ["Pugna", 6], ["Ancient Apparition", 4]],
    "Wraith King": [["Ancient Apparition", 10], ["Shadow Demon", 5], ["Necrophos", 4]],
    "Zeus": [["Anti-Mage", 8], ["Pugna", 6], ["Silencer", 5]]
};

// Объект синергий: [герой1, герой2, бонусный вес]
const synergies = [
    ["Earthshaker", "Magnus", 5],       // Комбо ультимейтов
    ["Crystal Maiden", "Juggernaut", 4], // Мана + Blade Fury
    ["Ancient Apparition", "Invoker", 3], // Cold Snap + Ice Wall
    ["Shadow Demon", "Mirana", 4],      // Disruption + Arrow
    ["Lion", "Lina", 5],                // Станы + урон
    ["Pudge", "Techies", 3],            // Hook + мины
    ["Rubick", "Enigma", 4]             // Spell Steal + Black Hole
];

const heroImageMap = {
    "Anti-Mage": "antimage",
    "Centaur Warrunner": "centaur",
    "Clockwerk": "rattletrap",
    "Dawnbreaker": "dawnbreaker",
    "Doom": "doom_bringer",
    "Io": "wisp",
    "Lifestealer": "life_stealer",
    "Magnus": "magnus",
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
    const shareBtn = document.getElementById("share");

    const clickSound = new Audio('tonk.mp3');
    clickSound.volume = 0.3;

    console.log("Start Screen:", startScreen);
    console.log("Draft Screen:", draftScreen);
    console.log("Buttons:", document.getElementById("enemy-first"), document.getElementById("my-first"), restartBtn, shareBtn);

    document.getElementById("enemy-first").addEventListener("click", () => {
        console.log("Enemy First clicked");
        startDraft("enemy");
    });
    document.getElementById("my-first").addEventListener("click", () => {
        console.log("My First clicked");
        startDraft("my");
    });
    restartBtn.addEventListener("click", () => {
        console.log("Restart clicked");
        resetDraft();
    });
    shareBtn.addEventListener("click", () => {
        console.log("Share clicked");
        shareApp();
    });

    function getHeroImageName(hero) {
        return heroImageMap[hero] || hero.toLowerCase().replace(/ /g, "_");
    }

    function getHeroImageSrc(hero) {
        const heroImageName = getHeroImageName(hero);
        if (hero === "Magnus" || hero === "Outworld Destroyer") {
            return `icons/${heroImageName}.png`;
        }
        return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageName}.png`;
    }

    function startDraft(team) {
        firstTeam = team;
        pickPhase = 1;
        pickCount = 0;
        startScreen.style.display = "none";
        draftScreen.style.display = "block";
        heroList.style.display = "flex";
        heroList.style.flexWrap = "wrap";
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
        heroList.style.display = "flex";
        heroList.style.flexWrap = "wrap";
        heroList.innerHTML = "";
    }

    function shareApp() {
        const appUrl = Telegram.WebApp.initDataUnsafe.start_param ? `https://t.me/${Telegram.WebApp.initDataUnsafe.bot_username}?start=${Telegram.WebApp.initDataUnsafe.start_param}` : `https://t.me/${Telegram.WebApp.initDataUnsafe.bot_username}`;
        const shareText = `Попробуй это крутое мини-приложение для драфта в Dota 2!\n${appUrl}`;
        Telegram.WebApp.showPopup({
            title: "Поделиться приложением",
            message: "Скопируйте ссылку и отправьте её другу!",
            buttons: [
                { id: "copy", type: "default", text: "Скопировать ссылку" },
                { type: "cancel", text: "Закрыть" }
            ]
        }, (buttonId) => {
            if (buttonId === "copy") {
                navigator.clipboard.writeText(shareText).then(() => {
                    Telegram.WebApp.showAlert("Ссылка скопирована! Отправь её другу через Telegram.");
                });
            }
        });
    }

    function updateInterface() {
        if (pickPhase === 0) return;
        const heroesToPick = pickPhase <= 4 ? 2 : 1;
        phaseTitle.textContent = `Фаза ${pickPhase} (Выбор ${pickCount}/${heroesToPick})`;
        
        myPicksList.innerHTML = myPicks.length ? myPicks.map(h => {
            const imgSrc = getHeroImageSrc(h);
            console.log(`Loading image for ${h}: ${imgSrc}`);
            return `<li><img src="${imgSrc}" alt="${h}" onerror="this.src='https://placehold.co/32x32'">${h}</li>`;
        }).join("") : "<li>Пусто</li>";
        
        enemyPicksList.innerHTML = enemyPicks.length ? enemyPicks.map(h => {
            const imgSrc = getHeroImageSrc(h);
            console.log(`Loading image for ${h}: ${imgSrc}`);
            return `<li><img src="${imgSrc}" alt="${h}" onerror="this.src='https://placehold.co/32x32'">${h}</li>`;
        }).join("") : "<li>Пусто</li>";
        
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
        let counterScores = {};

        // Собираем контр-пики с весами против врагов
        for (let enemy of enemyPicks) {
            const counters = heroes[enemy];
            for (let [counter, weight] of counters) {
                if (!myPicks.includes(counter) && !enemyPicks.includes(counter)) {
                    if (!counterScores[counter]) {
                        counterScores[counter] = { totalWeight: 0, count: 0, synergyBonus: 0 };
                    }
                    counterScores[counter].totalWeight += weight;
                    counterScores[counter].count += 1;
                }
            }
        }

        // Добавляем бонус за синергию с союзниками
        for (let counter in counterScores) {
            for (let ally of myPicks) {
                const synergy = synergies.find(s => 
                    (s[0] === counter && s[1] === ally) || (s[1] === counter && s[0] === ally)
                );
                if (synergy) {
                    counterScores[counter].synergyBonus += synergy[2];
                }
            }
        }

        // Преобразуем в массив и сортируем
        let suggestions = Object.entries(counterScores)
            .map(([hero, { totalWeight, count, synergyBonus }]) => ({
                hero,
                totalScore: totalWeight + synergyBonus, // Сумма веса контр-пика и синергии
                count
            }))
            .sort((a, b) => {
                // Сначала по общему счёту (вес + синергия)
                if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
                // Затем по количеству врагов
                return b.count - a.count;
            })
            .slice(0, 3);

        counterPicksList.innerHTML = "";
        suggestions.forEach(({ hero }, index) => {
            const card = document.createElement("li");
            card.className = "hero-card counter-pick";
            // Добавляем класс priority-counter для первых двух героев
            if (index < 2) {
                card.classList.add("priority-counter");
            }
            const imgSrc = getHeroImageSrc(hero);
            console.log(`Loading counter-pick image for ${hero}: ${imgSrc}`);
            card.innerHTML = `
                <img src="${imgSrc}" alt="${hero}" onerror="this.src='https://placehold.co/32x32'">
                <span>${hero}</span>
            `;
            card.addEventListener("click", () => pickHero(hero));
            counterPicksList.appendChild(card);
        });
    }

    function renderHeroes() {
        heroList.innerHTML = "";
        for (let hero in heroes) {
            if (!myPicks.includes(hero) && !enemyPicks.includes(hero)) {
                const card = document.createElement("div");
                card.className = "hero-card";
                const img = document.createElement("img");
                const imgSrc = getHeroImageSrc(hero);
                img.src = imgSrc;
                img.alt = hero;
                img.onerror = () => {
                    console.log(`Ошибка загрузки иконки для ${hero}: ${img.src}`);
                    img.src = "https://placehold.co/32x32";
                };
                const span = document.createElement("span");
                span.textContent = hero;
                card.appendChild(img);
                card.appendChild(span);
                card.addEventListener("click", () => pickHero(hero));
                heroList.appendChild(card);
            }
        }
    }

    function pickHero(hero) {
        const heroesToPick = pickPhase <= 4 ? 2 : 1;
        if (pickCount >= heroesToPick) return;

        clickSound.play();
        if ("vibrate" in navigator) {
            navigator.vibrate(50);
        }

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
