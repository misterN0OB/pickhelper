function getHeroImageName(hero) {
    const mappedName = heroImageMap[hero] || hero.toLowerCase().replace(/ /g, "_");
    return mappedName;
}

function renderHeroes() {
    heroList.innerHTML = "";
    for (let hero in heroes) {
        if (!myPicks.includes(hero) && !enemyPicks.includes(hero)) {
            const card = document.createElement("div");
            card.className = "hero-card";
            const img = document.createElement("img");
            const heroImageName = getHeroImageName(hero);
            img.src = `https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${heroImageName}_icon.png`;
            img.alt = hero;
            img.onerror = () => {
                console.log(`Ошибка загрузки иконки для ${hero}: ${img.src}`);
                img.src = "https://via.placeholder.com/32"; // Заглушка при ошибке
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

// Обновляем иконки в списках пиков и контр-пиков аналогично
function updateInterface() {
    if (pickPhase === 0) return;
    const heroesToPick = pickPhase <= 4 ? 2 : 1;
    phaseTitle.textContent = `Фаза ${pickPhase} (Выбор ${pickCount}/${heroesToPick})`;
    
    myPicksList.innerHTML = myPicks.length ? myPicks.map(h => {
        const imgSrc = `https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${getHeroImageName(h)}_icon.png`;
        return `<li><img src="${imgSrc}" alt="${h}" onerror="this.src='https://via.placeholder.com/32'">${h}</li>`;
    }).join("") : "<li>Пусто</li>";
    
    enemyPicksList.innerHTML = enemyPicks.length ? enemyPicks.map(h => {
        const imgSrc = `https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${getHeroImageName(h)}_icon.png`;
        return `<li><img src="${imgSrc}" alt="${h}" onerror="this.src='https://via.placeholder.com/32'">${h}</li>`;
    }).join("") : "<li>Пусто</li>";
    
    // ... остальной код ...
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
        card.className = "hero-card counter-pick";
        const imgSrc = `https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${getHeroImageName(counter)}_icon.png`;
        card.innerHTML = `
            <img src="${imgSrc}" alt="${counter}" onerror="this.src='https://via.placeholder.com/32'">
            <span>${counter}</span>
        `;
        card.addEventListener("click", () => pickHero(counter));
        counterPicksList.appendChild(card);
    });
}
