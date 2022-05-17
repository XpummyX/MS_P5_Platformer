class PlayerSprite {
    constructor(argX, argY) {
        this.x = argX;
        this.y = argY;
        this.left = false;
        this.right = false;
        this.space = false;
        this.verticalSpeed = 0.0;
        this.horizontalSpeed = 0.0;
        this.horizontalSpeedCap = 5;
        this.gravity = 2.0;
        this.maxNegativeSpeedCap = 10.0;
        this.gravityAcceleration = 0.5;
    }
    drawPlayer() {
        fill(255);
        rect(this.x, this.y, 15, 15);
    }
    updatePhysics() {
        if (this.verticalSpeed < this.maxNegativeSpeedCap) {
            this.verticalSpeed += this.gravityAcceleration;
        }
        if (this.GroundCollision()) {
            if (this.verticalSpeed > 0) this.verticalSpeed = 0;
        }
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        //console.log("x: " + this.horizontalSpeed + " left: " + this.left + " right: " + this.right);
        if (this.left) {
            if (this.horizontalSpeed > -this.horizontalSpeedCap)
                this.horizontalSpeed -= 0.5;

        }
        if (this.right) {
            if (this.horizontalSpeed < this.horizontalSpeedCap)
                this.horizontalSpeed += 0.5;
        }
    }
    GroundCollision() {
        let vx = this.cappedPosCalc(this.x, tileSize);
        let vy = this.cappedPosCalc(this.y - 30, tileSize);
        //console.log("type: " + tiles_[vx][vy + 1].type);
        return tiles_[vx][vy + 1].type == 0;
    }
    cappedPosCalc(a, cap) {
        let q = a % cap;
        let v = a - q;
        return v / cap;
    }
    keyPressed(argKey) {
        if (argKey == 'd') this.right = true;
        if (argKey == 'a') this.left = true;
        if (argKey == ' ') this.verticalSpeed = -5;
    }
    keyReleased(argKey) {
        if (argKey == 'd') this.right = false;
        if (argKey == 'a') this.left = false;
        //if (argKey == ' ') this.space = false;
        this.horizontalSpeed = 0;
    }
}