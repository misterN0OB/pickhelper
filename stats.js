function showWinProbability(myPicks, enemyPicks, suggestedCounters) {
    // Базовый шанс победы (50%)
    let winChance = 50;

    // Анализ пиков врага и наших контр-пиков
    let counterEffectiveness = 0;
    let countersUsed = 0;

    enemyPicks.forEach(enemy => {
        const counters = heroes[enemy] || [];
        myPicks.forEach(myHero => {
            const counterData = counters.find(c => c[0] === myHero);
            if (counterData) {
                counterEffectiveness += counterData[1]; // Суммируем вес контр-пиков
                if (suggestedCounters.includes(myHero)) {
                    countersUsed += 1; // Учитываем, если выбрали предложенного героя
                }
            }
        });
    });

    // Учитываем эффективность контр-пиков
    if (counterEffectiveness > 0) {
        winChance += Math.min(counterEffectiveness / 2, 20); // Максимум +20% за контр-пики
    }

    // Бонус за использование предложенных контр-пиков
    const recommendationBonus = countersUsed * 5; // +5% за каждого использованного контр-пик героя
    winChance += recommendationBonus;

    // Учитываем синергию в нашей команде
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
    winChance += Math.min(synergyBonus, 15); // Максимум +15% за синергию

    // Ограничиваем шанс победы от 10% до 90% (чтобы не было 0% или 100%)
    winChance = Math.max(10, Math.min(90, winChance));

    // Создаём HTML для прогресс-бара и текста
    const popupMessage = `
        <div style="text-align: center;">
            <h3>Вероятность победы</h3>
            <div style="width: 80%; margin: 10px auto; background-color: #333; border-radius: 5px; height: 20px; overflow: hidden;">
                <div style="width: ${winChance}%; height: 100%; background-color: #ff5555; transition: width 1s ease;"></div>
            </div>
            <p style="font-size: 18px; margin: 10px 0;">${winChance.toFixed(1)}%</p>
            <p style="font-size: 12px; color: #aaa; margin-top: 10px;">
                Результат статистики носит информационно-рекомендательный характер и не гарантирует победу. 
                Итог матча зависит от множества факторов, включая мастерство игроков, координацию команды и случайные события в игре, а не только от выбора героев.
            </p>
        </div>
    `;

    Telegram.WebApp.showPopup({
        title: "Вероятность победы",
        message: popupMessage,
        buttons: [{ type: "default", text: "Закрыть" }]
    });
}

// Делаем функцию глобальной, чтобы её можно было вызвать из script.js
window.showWinProbability = showWinProbability;