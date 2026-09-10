class Bullet {
    constructor(x, y, vx, vy, w, h, type="bone") {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.type = type;
    }

    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;

        // Collision
        if (this.collides(player)) {
            player.karma += 10;
        }
    }

    collides(p) {
        return (
            p.x < this.x + this.w &&
            p.x + 10 > this.x &&
            p.y < this.y + this.h &&
            p.y + 10 > this.y
        );
    }

    render() {
        ctx.fillStyle = this.type === "bone" ? "white" : "cyan";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

const bullets = [];
