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
    if (counterEffectiveness > 0) winChance += Math.min(counterEffectiveness / 2, 15); // Уменьшаем максимум до 15
    const recommendationBonus = countersUsed * 3; // Уменьшаем бонус с 5 до 3
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
    winChance += Math.min(synergyBonus, 10); // Уменьшаем максимум до 10

    // Анализ ролей моей команды
    const roles = myPicks.map(h => heroRoles[h] || "unknown");
    const carryCount = roles.filter(r => r === "carry").length;
    const midCount = roles.filter(r => r === "mid").length;
    const offlaneCount = roles.filter(r => r === "offlane").length;
    const supportCount = roles.filter(r => r === "support").length;

    let rolePenalty = 0;

    // Штрафы за отсутствие ролей
    if (carryCount === 0) rolePenalty -= 30; // Нет керри
    if (midCount === 0) rolePenalty -= 25;   // Нет мидера
    if (offlaneCount === 0) rolePenalty -= 20; // Нет оффлейнера
    if (supportCount === 0) rolePenalty -= 15; // Нет саппорта

    // Штраф за перекос ролей
    if (supportCount >= 4) rolePenalty -= 20; // Слишком много саппортов
    if (carryCount >= 4) rolePenalty -= 20;   // Слишком много керри

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
