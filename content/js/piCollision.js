var phaseState = [];
var vect;

var packaging = function(p){
    p.wallPos = 6;

    p.impList = [0, 0, 1, 0.01, 0.0001, 0.0000001, Math.pow(10, -8)]; // oh you'll need this !

    p.framerate = 30;
    p.timeGone = 0.0;
    p.dt = 0.01;
    p.collision = 0;
    p.digits = 1; // after decimal
    p.canvasSize = 300;

    p.initialVelocity = -30;

    p.isLoop = 1;

    p.preload = function (){
        p.clack = p.loadSound('/static/clack.wav');
        p.blockImg = p.loadImage("/images/block.png");
    }

    p.setup = function (){
        p.cnv = p.createCanvas(p.canvasSize,p.canvasSize);
        p.cnv.parent("simulation"); // by id

        // cnv.position((windowWidth - canvasSize)/2, (windowHeight - canvasSize)/2);

        p.frameRate(p.framerate);

        p.block1 = new Block(
            p.canvasSize/5,
            p.canvasSize/1.31,
            0,
            1,
            p.canvasSize/7,
            p.wallPos);

        p.block2 = new Block(
            p.canvasSize/1.3,
            p.canvasSize/1.53,
            p.initialVelocity,
            Math.pow(100, digits),
            p.canvasSize/4,
            p.wallPos + p.block1.s);

        p.countDiv = document.getElementById("counter");

        p.slider = document.getElementById("digits");
        p.slider.addEventListener("input", p.updateBigMass);

        p.play = document.getElementById("play");
        p.play.onclick = p.toggle;

        p.restart = document.getElementById("restart");
        p.restart.onclick = p.restartAnim;

        p.resetSketch(p.slider);
    }

    p.draw = function (){
        p.timeGone += 1/p.framerate;
        p.resetSketch(p.slider);
        while (p.timeGone > p.dt){
            p.timeGone -= p.dt;
            p.tmp = p.block1.update(p.dt);
            if (p.tmp){
                vect = p.createVector(Math.sqrt(p.block1.m)*p.block1.vx,Math.sqrt(p.block2.m)*p.block2.vx);
                phaseState.push(vect.normalize());
                p.collision += 1;
                p.clack.play();
            }
            p.tmp = p.block2.update(p.dt);
            if (p.tmp){
                vect = p.createVector(Math.sqrt(p.block1.m)*p.block1.vx,Math.sqrt(p.block2.m)*p.block2.vx);
                phaseState.push(vect.normalize());
                p.collision += 1;
                p.clack.play();
            }
            p.interact(p.block1, p.block2);
        }

        p.strokeWeight(6);
        p.line(6, p.canvasSize/1.1, p.canvasSize, p.canvasSize/1.1); //6 for stroke width of wall
        p.wall = p.line(6, p.canvasSize/8, 6, p.canvasSize/1.1);

        p.block1.draw();
        p.block2.draw();

        p.countDiv.innerHTML =  p.collision;

        // don't loop indefinitely !
        if (p.block1.x > p.cansize && p.block2.x > p.cansize){
            p.noLoop();
        }
    }

    p.updateBigMass = function (){
        p.digits = p.slider.value;
        p.block2.m = Math.pow(100, p.digits);
        document.getElementById("big").innerHTML = p.block2.m;
    }

    p.interact = function (one, other){
            // Along X first
        if (other.x < p.wallPos + one.s){
            while(other.vx < Math.abs(p.initialVelocity) - p.impList[p.digits]){
                one.collide(other);
                let vect = p.createVector(Math.sqrt(p.block1.m)*p.block1.vx, Math.sqrt(p.block2.m)*p.block2.vx);
                phaseState.push(vect.normalize());
                one.hitWall();

                vect = p.createVector(Math.sqrt(p.block1.m)*p.block1.vx, Math.sqrt(p.block2.m)*p.block2.vx);
                phaseState.push(vect.normalize());
                p.collision += 2; // for collision with the wall
            }
            other.x = p.wallPos + one.s;
            one.x = p.wallPos;
        }
        if (other.x < one.x + one.s){
            one.collide(other);
            one.x = other.x - one.s;

            p.clack.play();
            p.collision += 1;
            vect = p.createVector(Math.sqrt(p.block1.m)*p.block1.vx,Math.sqrt(p.block2.m)*p.block2.vx);
            phaseState.push(vect.normalize());
        }
    }

    p.toggle = function (){
        if (p.isLoop){
            p.noLoop();
            p.isLoop = 0;
        }else{
            p.loop();
            p.isLoop = 1;
        }
    }

    p.resetSketch = function (){
        p.block2.m = Math.pow(100, p.digits);
        p.clear();
    }

    p.restartAnim = function (){
        // handler for restart button
        p.collision = 0;
        phaseState = [];  // for phase diagram to reset
        p.block1.x = p.canvasSize/4;
        p.block1.vx = 0;
        p.block2.vx = p.initialVelocity;
        p.block2.x = p.canvasSize/1.5;
        p.loop();
    }
}


var simulation = new p5(packaging);


var phaseSpacePackaging = function(p){
    p.cansize = 300;
    p.E = p.cansize*(17/40);
    p.fps = 30;
    p.fontsize = 20;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("phasespace");
    }

    p.draw = function(){
        p.background(255);
        //
        // for phase point dot
        p.stroke(100);
        p.strokeWeight(4);
        p.ellipse(p.cansize/2, p.cansize/2, 2*p.E);
        //
        // for Coordinate Axes
        p.blue = p.color(0, 40, 100);
        p.stroke(p.blue);
        p.strokeWeight(2);
        p.line(p.cansize/2, 0, p.cansize/2, p.cansize);
        p.line( 0, p.cansize/2, p.cansize, p.cansize/2);
        //
        //Coordinate labels
        p.fill(20);
        p.textSize(p.fontsize);
        p.textAlign(p.LEFT, p.TOP);
        p.text('y', p.cansize/2+5, 0);
        p.textAlign(p.RIGHT, p.BOTTOM);
        p.text('x', p.cansize-5, p.cansize/2);
        p.noFill();
        // for the dots lines
        p.stroke(50);
        p.strokeWeight(6);
        //
        if (simulation.digits < 2){
            for (let i=0; i < phaseState.length; i++){
                p.stroke(50);
                p.strokeWeight(6);
                p.ellipse(p.E*phaseState[i].y+ p.cansize/2, -p.E*phaseState[i].x + p.cansize/2, 2);
                //
                if (i){
                    p.strokeWeight(2);
                    p.stroke(150);
                    //
                    // this makes it plot like it should. but not sure how !
                    p.line(p.E*phaseState[i-1].y + p.cansize/2, - p.E*phaseState[i-1].x + p.cansize/2,
                        p.E*phaseState[i].y+ p.cansize/2, -p.E*phaseState[i].x + p.cansize/2);
                }
            }
        }
    }
}

var phaseDiagram = new p5(phaseSpacePackaging);
