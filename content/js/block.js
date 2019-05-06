class Block{
    constructor(x, y, vx, m, s, xc){
        this.x  = x;
        this.y  = y;
        this.vx = vx;
        this.m  = m;    // mass
        this.s  = s;    // size
        this.xc = xc;   // x-constraint
        this.vy = 0;
    }

    update(dt){
        let x = this.x + this.vx*dt;
        let y = this.y + this.vy*dt;

        if (x <= simulation.wallPos){ // collision with the wall on the left
            this.x = simulation.wallPos;  // right at the wall
            this.vx = Math.abs(this.vx);
            return 1;
            // simulation.collision += 1;
            // simulation.clack.play();
        }else{
            this.x = x;
        }
        this.y = y;
    }

    hitWall(){
        this.vx = Math.abs(this.vx);
    }

    draw(){
        simulation.image(simulation.blockImg, this.x, this.y, this.s, this.s);
    }

    collide(other){
        // this and other both blocks object
        //
        let vx;   // tmp storage to avoid updating till next calculation
        let vy;
        vx = (this.m - other.m)/(this.m + other.m) * this.vx + 2 * other.m / (this.m + other.m) * other.vx;
        vy = (this.m - other.m)/(this.m + other.m) * this.vy + 2 * other.m / (this.m + other.m) * other.vy;

        // symmetric formula for the other this
        other.vx = (other.m - this.m)/(other.m + this.m) * other.vx + 2 * this.m / (other.m + this.m) * this.vx;
        other.vy = (other.m - this.m)/(other.m + this.m) * other.vy + 2 * this.m / (other.m + this.m) * this.vy;

        this.vx = vx;
        this.vy = vy;
    }
}
