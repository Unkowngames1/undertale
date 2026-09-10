let turnTimer = 0;
let currentPattern = 0;

function updateBattle(dt) {
    turnTimer += dt;

    // Every 3 seconds, new attack
    if (turnTimer > 3) {
        patterns[currentPattern]();
        currentPattern = (currentPattern + 1) % patterns.length;
        turnTimer = 0;
    }

    // Update bullets
    bullets.forEach(b => b.update(dt));
}
