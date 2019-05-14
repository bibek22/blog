var canvasPackaging = function(p){
    p.fps = 20;
    p.cansize = 350; // (p.windowWidth > 550)? p.windowWidth/3: 350;
    p.symmetryAxis;

    p.centerFill = 150;
    p.symmetryFill = 180;
    p.pencil = 80;

    p.setup = function(){
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("canvas");

        document.getElementById("reset").onclick = p.clearCanvas;
        document.getElementById("save").onclick = p.saveCnv;

        document.getElementById("shadeVal").innerHTML = p.pencil;
        document.getElementById("shade").addEventListener("input", function(){
            p.pencil = this.value*10;
            p.stroke(p.pencil);
            document.getElementById("shadeVal").innerHTML = p.pencil;
        })


        document.getElementById("shade").addEventListener("input", function(){
            p.pencil = this.value*10;
            document.getElementById("shadeVal").innerHTML = p.pencil;
        })

        p.slider = document.getElementById("symmetry");
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
        document.getElementById("symmetryVal").innerHTML = p.symmetryAxis;
        p.angle = p.TAU / p.symmetryAxis;
        p.axis.rotate(p.angle/2);
        p.stroke(220);
        p.strokeWeight(3);
        for (let i = 0; i < p.symmetryAxis; i++){
            p.line(p.cansize/2, p.cansize/2, p.cansize/2 + p.axis.x, p.cansize/2 + p.axis.y);
            p.axis.rotate(p.angle);
        }
        p.stroke(p.pencil);
    }


    p.mousePressed = function(){
        if (p.mouseX > 0 && p.mouseX < p.cansize && p.mouseY > 0 && p.mouseY < p.cansize){
            p.symmetryDraw();
        }
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
    p.saveCnv = function(){
        p.save();
    }
}

var canvas = new p5(canvasPackaging);

function noscroll(event){
    event.preventDefault();
}
