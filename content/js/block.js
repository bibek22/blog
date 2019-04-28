
class Block{
    constructor(x, y, vx, vy, m, s){
        this.x  = x;
        this.y  = y;
        this.vx = vx;
        this.vy = vy;
        this.m  = m;    // mass
        this.s  = s;    // size
    }

    update(t){
        var x = this.x + this.vx*t;
        var y = this.y + this.vy*t;

        if (x < 10){ // collision with the wall on the left
            collision += 1;
            this.x = 10 + (10 - x)/2;
            this.vx = - this.vx;
            clack.play();
        } else{
            this.x = x;
        }
        this.y = y;  // no boundary collision on y direction
    }

    draw(){
        image(blockImg, this.x, this.y, this.s, this.s);
    }
}
