const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let lastTime = 0;

function loop(timestamp) {
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    update(dt);
    render();

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
