// Пример ролей героев (упрощённо)
const heroRoles = {
    "Ancient Apparition": "support",
    "Shadow Demon": "support",
    "Earthshaker": "support",
    "Magnus": "offlane",
    "Huskar": "carry",
    "Alchemist": "carry",
    "Viper": "mid",
    "Silencer": "support",
    "Pugna": "mid",
    // Добавь остальные роли по необходимости
};

// Функция для проверки состава команды
function getTeamNeeds(myPicks) {
    const roles = myPicks.map(h => heroRoles[h] || "unknown");
    if (!roles.includes("carry")) return "carry";
    if (!roles.includes("support")) return "support";
    if (!roles.includes("mid")) return "mid";
    if (!roles.includes("offlane")) return "offlane";
    return null;
}

// Обновлённая функция showCounterPicks
function showCounterPicks() {
    counterPicksDiv.style.display = "block";
    let counterScores = {};
    const neededRole = getTeamNeeds(myPicks);

    // Собираем контр-пики
    for (let enemy of enemyPicks) {
        const counters = heroes[enemy];
        for (let [counter, weight] of counters) {
            if (!myPicks.includes(counter) && !enemyPicks.includes(counter)) {
                if (!counterScores[counter]) {
                    counterScores[counter] = { totalWeight: 0, count: 0, synergyBonus: 0, roleBonus: 0 };
                }
                counterScores[counter].totalWeight += weight;
                counterScores[counter].count += 1;
            }
        }
    }

    // Синергия
    for (let counter in counterScores) {
        for (let ally of myPicks) {
            const synergy = synergies.find(s => 
                (s[0] === counter && s[1] === ally) || (s[1] === counter && s[0] === ally)
            );
            if (synergy) {
                counterScores[counter].synergyBonus += synergy[2];
            }
        }
        // Бонус за нужную роль
        if (neededRole && heroRoles[counter] === neededRole) {
            counterScores[counter].roleBonus = 5; // Бонус за роль
        }
    }

    // Сортировка
    let suggestions = Object.entries(counterScores)
        .map(([hero, { totalWeight, count, synergyBonus, roleBonus }]) => ({
            hero,
            totalScore: totalWeight + synergyBonus + roleBonus,
            count
        }))
        .sort((a, b) => {
            if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
            return b.count - a.count;
        })
        .slice(0, 3);

    counterPicksList.innerHTML = "";
    suggestions.forEach(({ hero }, index) => {
        const card = document.createElement("li");
        card.className = "hero-card counter-pick";
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
