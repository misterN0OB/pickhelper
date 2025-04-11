function showWinProbability(myPicks, enemyPicks, suggestedCounters) {
    let winChance = 50; // Базовый шанс
    let counterEffectiveness = 0;
    let countersUsed = 0;

    // Проверка контр-пиков
    enemyPicks.forEach(enemy => {
        const counters = heroes[enemy] || [];
        myPicks.forEach(myHero => {
            const counterData = counters.find(c => c[0] === myHero);
            if (counterData) {
                counterEffectiveness += counterData[1];
                if (suggestedCounters.includes(myHero)) countersUsed += 1;
            }
        });
    });
    if (counterEffectiveness > 0) winChance += Math.min(counterEffectiveness / 2, 20);
    const recommendationBonus = countersUsed * 5;
    winChance += recommendationBonus;

    // Проверка синергии
    let synergyBonus = 0;
    for (let i = 0; i < myPicks.length; i++) {
        for (let j = i + 1; j < myPicks.length; j++) {
            const synergy = synergies.find(s => 
                (s[0] === myPicks[i] && s[1] === myPicks[j]) || 
                (s[1] === myPicks[i] && s[0] === myPicks[j])
            );
            if (synergy) synergyBonus += synergy[2];
        }
    }
    winChance += Math.min(synergyBonus, 15);

    // Штраф за несбалансированный состав
    const roles = myPicks.map(h => heroRoles[h] || "unknown");
    const hasCarry = roles.includes("carry");
    const hasMid = roles.includes("mid");
    const hasOfflane = roles.includes("offlane");
    const hasSupport = roles.includes("support");
    let rolePenalty = 0;

    if (!hasCarry) rolePenalty -= 20; // Нет керри — большой штраф
    if (!hasMid) rolePenalty -= 15;   // Нет мидера — средний штраф
    if (!hasOfflane) rolePenalty -= 10; // Нет оффлейнера — меньший штраф
    if (!hasSupport) rolePenalty -= 5;  // Нет саппорта — минимальный штраф

    winChance += rolePenalty;

    // Ограничение результата
    winChance = Math.max(10, Math.min(90, winChance));

    // Отображение
    const statsOverlay = document.getElementById("stats-overlay");
    statsOverlay.innerHTML = `
        <div class="stats-content">
            <h3>Вероятность победы</h3>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%;"></div>
            </div>
            <p class="percentage">${winChance.toFixed(1)}%</p>
            <p class="disclaimer">
                Результат статистики носит информационно-рекомендательный характер и не гарантирует победу. 
                Итог матча зависит от множества факторов, включая мастерство игроков, координацию команды и случайные события в игре, а не только от выбора героев.
            </p>
            <button onclick="document.getElementById('stats-overlay').style.display='none'">Закрыть</button>
        </div>
    `;
    statsOverlay.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".progress-fill").style.width = `${winChance}%`;
    }, 100);
}

window.showWinProbability = showWinProbability;