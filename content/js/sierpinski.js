var packaging = function(p){
    p.fps = 30;
    p.dt = 1/p.fps;  // p.dtime incremenp.dt for each frame
    p.cansize = 300;
    p.iterations = 0;
    p.vertexSize = 5;
    p.queenSize = 5;
    p.dotSize = 4;
    p.history = [];
    p.points = [];
    p.queen = [];
    p.reading = 1;  // 1 for vertices, 0 for queen
    p.animating = 0;

    let green = p.color(30, 200, 0);
    let blue = p.color(0, 0, 200);

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("simulation");

        document.getElementById('queenBtn').onclick = p.addQueen;
        document.getElementById('pointBtn').onclick = p.addPoints;
        document.getElementById('play').onclick = p.toggleAnim;
        document.getElementById('reset').onclick = p.resetSketch;

        p.background(200);
        p.frameRate(p.fps);
        // p.noLoop();
    }

    p.draw = function(){
        p.background(200);
        p.noStroke();

        // Vertices
        p.fill(blue);
        p.ellipse(p.mouseX, p.mouseY, 4);
        for(let i = 0; i < p.points.length; i++){
            p.ellipse(p.points[i][0], p.points[i][1], p.vertexSize);
        }
        // Queen
        p.fill(green);
        p.ellipse(p.queen[0], p.queen[1], p.queenSize);

        // history points
        p.fill(green);
        for (let i = 0; i < p.history.length; i++){
            p.ellipse(p.history[i].x, p.history[i].y, p.dotSize);
        }

        if (p.animating){
            // while (p.animating){
                p.updateQueen();
                p.ellipse(p.queen[0], p.queen[1], p.queenSize);
                p.iterations += 1;
                document.getElementById('iterations').innerHTML = p.iterations;
            // }
        }
    }

    p.mousePressed = function(){
    // hope this works. lexical scoping, right ?
        if (p.mouseX <= p.cansize && p.mouseY <= p.cansize && p.mouseX > 0 && p.mouseY > 0){
        if (p.reading){
            p.points.push([p.mouseX, p.mouseY]);
        }else{
            p.queen = [p.mouseX, p.mouseY];
        }
        }
    }

    p.addQueen = function(){
        p.reading = 0;
    }

    p.addPoints = function(){
        p.reading = 1;
    }

    p.toggleAnim = function(){
        p.animating = ! p.animating;
    }

    p.updateQueen = function(){
        if (p.points.length){
            let i = Math.floor(Math.random()*p.points.length);
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
    }
}

var sketch = new p5(packaging);
