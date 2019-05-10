var canvasPackaging = function(p){
    p.fps = 20;
    p.cansize = 400;
    p.symmetryAxis = 5;

    p.centerFill = 150;
    p.symmetryFill = 180;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("canvas");

        document.getElementById("reset").onclick = p.clearCanvas;

        p.stroke(p.centerFill);
        p.ellipse(p.cansize/2, p.cansize/2, 3);

        p.noFill();

        p.clearCanvas();
    }

    p.draw = function (){
        p.symmetryDraw();
    }

    p.symmetryDraw = function(){
        // vector of point with Center as origin
        p.px = p.createVector(p.mouseX - p.cansize/2, p.mouseY - p.cansize/2);
        for (let i = 0; i < p.symmetryAxis; i++){
            p.point(p.cansize/2 + p.px.x, p.cansize/2 + p.px.y);
            p.px.rotate(p.angle);
        }
    }
    p.clearCanvas = function(){
        p.background(240);
        p.stroke(p.symmetryFill);
        p.axis = p.createVector(0, p.cansize);
        p.angle = p.TAU / p.symmetryAxis;
        p.axis.rotate(p.angle/2);
        p.stroke(220);
        p.strokeWeight(4);
        for (let i = 0; i < p.symmetryAxis; i++){
            p.line(p.cansize/2, p.cansize/2, p.cansize/2 + p.axis.x, p.cansize/2 + p.axis.y);
            p.axis.rotate(p.angle);
        }
        p.stroke(50);
    }
}

var canvas = new p5(canvasPackaging);
