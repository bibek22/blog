class Pendulum{
    constructor(r, a, m){
        this.r = r;
        this.m = m;
        this.a = a; // angle
    }

    getx(){
        // with reference to it's fixed point as origin
        return(this.r * Math.sin(this.a1)); 
    }

    gety(){
        return(this.r * Math.cos(this.a1));
    }
}
