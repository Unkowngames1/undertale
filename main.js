function update(dt) {
    player.update(dt);
    updateBattle(dt);
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.render();
    bullets.forEach(b => b.render());
}
