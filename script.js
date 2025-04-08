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

    // Заменяем звук на tonk.mp3
    const clickSound = new Audio('tonk.mp3'); // Предполагается, что файл в корне репозитория
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

    // ... остальной код остается без изменений ...

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
