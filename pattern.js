function boneWall() {
    for (let i = 0; i < 10; i++) {
        bullets.push(new Bullet(0, i * 40, 200, 0, 20, 20));
    }
}

function blasterShot() {
    bullets.push(new Bullet(300, 0, 0, 300, 40, 200, "blaster"));
}

const patterns = [
    boneWall,
    blasterShot
];
