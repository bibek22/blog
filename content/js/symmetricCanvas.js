var canvasPackaging = function(p){
    p.fps = 20;
    p.cansize = 350;
    p.symmetryAxis;

    p.centerFill = 150;
    p.symmetryFill = 180;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("canvas");

        document.getElementById("reset").onclick = p.clearCanvas;
        p.slider = document.getElementById("slider");
        p.slider.addEventListener("input", p.clearCanvas);
        p.symmetryAxis = p.slider.value;


        p.stroke(p.centerFill);
        p.ellipse(p.cansize/2, p.cansize/2, 3);

        p.noFill();

        p.clearCanvas();
    }

    p.clearCanvas = function(){
        p.background(240);
        p.stroke(p.symmetryFill);
        p.axis = p.createVector(0, p.cansize);
        p.symmetryAxis = p.slider.value;
        p.angle = p.TAU / p.symmetryAxis;
        p.axis.rotate(p.angle/2);
        p.stroke(220);
        p.strokeWeight(3);
        for (let i = 0; i < p.symmetryAxis; i++){
            p.line(p.cansize/2, p.cansize/2, p.cansize/2 + p.axis.x, p.cansize/2 + p.axis.y);
            p.axis.rotate(p.angle);
        }
        p.stroke(80);
    }


    p.mouseDragged = function(){
        if (p.mouseX > 0 && p.mouseX < p.cansize && p.mouseY > 0 && p.mouseY < p.cansize){
            p.symmetryDraw();
        }
    }

    p.symmetryDraw = function(){
        // vector of point with Center as origin
        p.px = p.createVector(p.mouseX - p.cansize/2, p.mouseY - p.cansize/2);
        p.ppx = p.createVector(p.pmouseX - p.cansize/2, p.pmouseY - p.cansize/2);
        for (let i = 0; i < p.symmetryAxis; i++){
            p.line(p.cansize/2 + p.px.x, p.cansize/2 + p.px.y,
                p.cansize/2 + p.ppx.x, p.cansize/2 + p.ppx.y,);
            p.px.rotate(p.angle);
            p.ppx.rotate(p.angle);
        }
    }
}

var canvas = new p5(canvasPackaging);

function noscroll(event){
    event.preventDefault();
}
