var packaging = function(p){
    p.fps = 30;
    p.dt = 1/p.fps;  // p.dt time increment.dt for each frame
    p.cansize = 300;
    p.iterations = 0;

    p.vertexSize = 7;
    p.queenSize = 7;
    p.dotSize = 4;

    p.history = [];
    p.points = [];
    p.queen = [];
    p.reading = 1;  // 1 for vertices, 0 for queen
    p.animating = 0;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("simulation");

        document.getElementById("queenBtn").onclick = p.addQueen;
        document.getElementById("pointBtn").onclick = p.addPoints;
        document.getElementById("play").onclick = p.toggleAnim;
        document.getElementById("reset").onclick = p.resetSketch;

        p.background(250);
        p.frameRate(p.fps);
    }

    p.draw = function(){
        p.background(250);
        p.noStroke();

        // Vertices
        p.fill(20);
        p.ellipse(p.mouseX, p.mouseY, 6);
        for(let i = 0; i < p.points.length; i++){
            p.ellipse(p.points[i][0], p.points[i][1], p.vertexSize);
        }
        // Queen
        p.fill(80);
        p.ellipse(p.queen[0], p.queen[1], p.queenSize);

        // history points
        p.fill(150);
        for (let i = 0; i < p.history.length; i++){
            p.ellipse(p.history[i].x, p.history[i].y, p.dotSize);
        }

        if (p.animating){
            // while (p.animating){
            if (p.queen != 0){
                p.updateQueen();
                p.ellipse(p.queen[0], p.queen[1], p.queenSize);
                p.iterations += 1;
                document.getElementById("iterations").innerHTML = p.iterations;
            }
            else{
                p.animating = 0;
                document.getElementById("iterations").innerHTML = "Please add a starting point (Tracer)";
                // document.getElementById("iterations").style.color = "magenta";
            }
        }
    }

    p.mousePressed = function(){
        if (p.mouseX <= p.cansize && p.mouseY <= p.cansize && p.mouseX > 0 && p.mouseY > 0){
            if (p.reading){
                p.points.push([p.mouseX, p.mouseY]);
                if (p.points.length > 3){
                    p.points.shift();
                }
            }else{
                p.queen = [p.mouseX, p.mouseY];
            }
        }
    }

    p.addQueen = function(){
        p.reading = 0;
        document.getElementById("queenBtn").style.border = "2px solid #DDDDDD";
        document.getElementById("pointBtn").style.border = "none";
    }

    p.addPoints = function(){
        p.reading = 1;
        document.getElementById("queenBtn").style.border = "none";
        document.getElementById("pointBtn").style.border = "2px solid #DDDDDD";
    }

    p.toggleAnim = function(){
        p.animating = ! p.animating;
    }

    p.updateQueen = function(){
        if (p.points.length){
            let i = Math.floor(Math.random() * p.points.length);
            p.queen[0] = 1/2 * (p.queen[0] + p.points[i][0]);
            p.queen[1] = 1/2 * (p.queen[1] + p.points[i][1]);
            let v = p.createVector(p.queen[0], p.queen[1]);
            p.history.push(v);
        }
    }

    p.resetSketch = function(){
        p.history = [];
        p.points = [];
        p.queen = [];
        p.animating = 0;
        p.iterations = 0;
        document.getElementById("iterations").innerHTML = p.iterations;
    }
}

var sketch = new p5(packaging);
