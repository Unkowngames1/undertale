class Player {
    constructor() {
        this.x = 320;
        this.y = 240;
        this.speed = 200;
        this.hp = 92;
        this.karma = 0;
    }

    update(dt) {
        if (keys["ArrowUp"]) this.y -= this.speed * dt;
        if (keys["ArrowDown"]) this.y += this.speed * dt;
        if (keys["ArrowLeft"]) this.x -= this.speed * dt;
        if (keys["ArrowRight"]) this.x += this.speed * dt;

        // Karma damage
        if (this.karma > 0) {
            this.hp -= 0.5;
            this.karma -= 0.5;
        }
    }

    render() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - 5, this.y - 5, 10, 10);
    }
}

const player = new Player();
