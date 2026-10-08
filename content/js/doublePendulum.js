var packagingS_2 = function(p){
    p.fps = 30;
    p.dt = 1/p.fps;  // p.dtime incremenp.dt for each frame
    p.g = 980;
    p.cansize = 300;

    // fixed point coordinates
    p.fixX = p.cansize/2;
    p.fixY = p.cansize/2;

    // angles and their first two time derivatvies
    p.a1 = Math.PI/2;
    p.a2 = Math.PI/2 + 0.01;
    p.v1 = 0;
    p.v2 = 0;

    // radius and mass of penduli
    p.r1 = 70;
    p.r2 = 70;
    p.m1 = 10;
    p.m2 = 5;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("slight_1");
        p.background(255);
        p.frameRate(p.fps);
        p.noLoop();
    }

    p.draw = function(){
        p.clear();
        step(p);


        // horizontal bar at the top
        p.strokeWeight(6);
        p.stroke(100); // shade of grey
        p.line(p.cansize/3, p.cansize/2, (2/3)*p.cansize, p.cansize/2);
        p.x1 = p.fixX + getx(p.r1, p.a1);
        p.y1 = p.fixY + gety(p.r1, p.a1);
        p.x2 = p.x1 + getx(p.r2, p.a2);
        p.y2 = p.y1 + gety(p.r2, p.a2);

        // penduli
        p.strokeWeight(2);
        p.stroke(200);
        p.line(p.fixX, p.fixY, p.x1, p.y1);
        p.stroke(200);
        p.line(p.x1, p.y1, p.x2, p.y2);
        p.stroke(150);
        p.fill(150);
        p.ellipse(p.x1, p.y1, 8);
        p.ellipse(p.x2, p.y2, 8);
    }
}


var packagingS_1 = function(p){
    p.fps = 30;
    p.dt = 1/p.fps;  // p.dtime incremenp.dt for each frame
    p.g = 980;
    p.cansize = 300;

    // fixed point coordinates
    p.fixX = p.cansize/2;
    p.fixY = p.cansize/2;

    // angles and their first two time derivatvies
    p.a1 = Math.PI/2;
    p.a2 = Math.PI/2;
    p.v1 = 0;
    p.v2 = 0;

    // radius and mass of penduli
    p.r1 = 70;
    p.r2 = 70;
    p.m1 = 10;
    p.m2 = 5;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("slight_2");
        p.background(255);
        p.frameRate(p.fps);
        p.noLoop();
    }

    p.draw = function(){
        p.clear();
        step(p);


        // horizontal bar at the top
        p.strokeWeight(6);
        p.stroke(100); // shade of grey
        p.line(p.cansize/3, p.cansize/2, (2/3)*p.cansize, p.cansize/2);
        p.x1 = p.fixX + getx(p.r1, p.a1);
        p.y1 = p.fixY + gety(p.r1, p.a1);
        p.x2 = p.x1 + getx(p.r2, p.a2);
        p.y2 = p.y1 + gety(p.r2, p.a2);

        // penduli
        p.strokeWeight(2);
        p.stroke(200);
        p.line(p.fixX, p.fixY, p.x1, p.y1);
        p.stroke(200);
        p.line(p.x1, p.y1, p.x2, p.y2);
        p.stroke(150);
        p.fill(150);
        p.ellipse(p.x1, p.y1, 8);
        p.ellipse(p.x2, p.y2, 8);
    }
}


var packaging = function(p){
    p.fps = 30;
    p.dt = 1/p.fps;  // p.dtime incremenp.dt for each frame
    p.g = 980;
    p.cansize = 300;

    // fixed point coordinates
    p.fixX = p.cansize/2;
    p.fixY = p.cansize/2;

    // angles and their first two time derivatvies
    p.a1 = 10;
    p.a2 = 20;
    p.v1 = 0;
    p.v2 = 0;

    // radius and mass of penduli
    p.r1 = 70;
    p.r2 = 70;
    p.m1 = 10;
    p.m2 = 5;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("trailer");
        p.background(255);
        p.frameRate(p.fps);
    }

    p.draw = function(){
        p.clear();
        step(p);


        // horizontal bar at the top
        p.strokeWeight(6);
        p.stroke(100); // shade of grey
        p.line(p.cansize/3, p.cansize/2, (2/3)*p.cansize, p.cansize/2);
        p.x1 = p.fixX + getx(p.r1, p.a1);
        p.y1 = p.fixY + gety(p.r1, p.a1);
        p.x2 = p.x1 + getx(p.r2, p.a2);
        p.y2 = p.y1 + gety(p.r2, p.a2);

        // penduli
        p.strokeWeight(2);
        p.stroke(200);
        p.line(p.fixX, p.fixY, p.x1, p.y1);
        p.stroke(200);
        p.line(p.x1, p.y1, p.x2, p.y2);
        p.stroke(150);
        p.fill(150);
        p.ellipse(p.x1, p.y1, 8);
        p.ellipse(p.x2, p.y2, 8);
    }
}

function gety(r, theta){
    return(r*Math.cos(theta));
}

function getx(r, theta){
    return(r*Math.sin(theta));
}

function deriv(p, s){
    // time derivatives of [a1, a2, v1, v2]
    var a1 = s[0], a2 = s[1], v1 = s[2], v2 = s[3];
    var denum = (2*p.m1 + p.m2 - p.m2*Math.cos(2*a1 - 2*a2));
    var a1_num = -p.g*(2*p.m1 + p.m2)*Math.sin(a1) - p.m2*p.g*Math.sin(a1 - 2*a2) - 2*Math.sin(a1 - a2)*p.m2*(v2*v2*p.r2 + v1*v1*p.r1*Math.cos(a1 - a2));
    var a2_num = 2*Math.sin(a1 - a2)*(v1*v1*p.r1*(p.m1 + p.m2) + p.g*(p.m1 + p.m2)*Math.cos(a1) + v2*v2*p.r2*p.m2*Math.cos(a1 - a2));
    return([v1, v2, a1_num/(p.r1*denum), a2_num/(p.r2*denum)]);
}

function shift(s, k, h){
    return([s[0] + h*k[0], s[1] + h*k[1], s[2] + h*k[2], s[3] + h*k[3]]);
}

function step(p){
    // 4th order runge-kutta, 4 sub-steps per frame
    var h = p.dt/4;
    for (var i = 0; i < 4; i++){
        var s = [p.a1, p.a2, p.v1, p.v2];
        var k1 = deriv(p, s);
        var k2 = deriv(p, shift(s, k1, h/2));
        var k3 = deriv(p, shift(s, k2, h/2));
        var k4 = deriv(p, shift(s, k3, h));
        p.a1 = p.a1 + h/6*(k1[0] + 2*k2[0] + 2*k3[0] + k4[0]);
        p.a2 = p.a2 + h/6*(k1[1] + 2*k2[1] + 2*k3[1] + k4[1]);
        p.v1 = p.v1 + h/6*(k1[2] + 2*k2[2] + 2*k3[2] + k4[2]);
        p.v2 = p.v2 + h/6*(k1[3] + 2*k2[3] + 2*k3[3] + k4[3]);
    }
}

// single pendulum demo
var experiment = new p5(packaging);

// for slight change
// side by side penduli instances
var experimentS_1 = new p5(packagingS_1);
var experimentS_2 = new p5(packagingS_2);

var simLoopOn = 0;
function simPlay(){
    // function for play/pause button
    if (simLoopOn){
        experimentS_1.noLoop();
        experimentS_2.noLoop();
        simLoopOn = 0;
    }else{
        experimentS_1.loop();
        experimentS_2.loop();
        simLoopOn = 1;
    }
}


// timeout for the first pendulum demo after some period.
setTimeout(function() {
    experiment.noLoop();
}, 90000);
