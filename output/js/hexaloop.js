var hexaPackaging = function(p){
    p.fps = 30;
    p.cansize = 250;
    p.iteration = 0;
    p.side = p.cansize*(9/10);

    p.TYPE_A = 1;
    p.TYPE_B = 0;

    p.setup = function(){
        p.frameRate(p.fps);
        p.cnv = p.createCanvas(p.cansize, p.cansize);
        p.cnv.parent("hexaloop");

        p.next = document.getElementById("next");
        p.next.onclick = p.nextIteration;
        p.reset = document.getElementById("resetHexaLoop").onclick = p.reset;

        // These wont change
        p.stroke(80);
        p.strokeWeight(2);
        p.noFill();
        p.noLoop();
    }

    p.draw = function(){
        p.background(255);
        // workaround to make +ve y-direction sane!
        let st = p.createVector(0, p.cansize - p.side);
        let end = p.createVector(p.side, p.cansize - p.side);
        p.curve(st, end, p.TYPE_A, p.iteration);
    }

    p.curve = function(st, end, type, iteration){
        if (iteration){
            let direction = end.sub(st).mult(1/2);
            if (type == p.TYPE_A){
                direction.rotate(p.PI/3);
                end = st.copy();
                end.add(direction);
                p.curve(st.copy(), end.copy(), p.TYPE_B, iteration-1);

                direction.rotate(-p.PI/3);
                st = end.copy();
                end = st.copy();
                end.add(direction);
                p.curve(st.copy(), end.copy(), p.TYPE_A, iteration-1);

                direction.rotate(-p.PI/3);
                st = end.copy();
                end = st.copy();
                end.add(direction);
                p.curve(st.copy(), end.copy(), p.TYPE_B, iteration-1);
            }else{
                direction.rotate(- p.PI/3);
                end = st.copy().add(direction);
                p.curve(st.copy(), end.copy(), p.TYPE_A, iteration-1);

                direction.rotate(p.PI/3);
                st = end.copy();
                end = st.copy().add(direction);
                p.curve(st.copy(), end.copy(), p.TYPE_B, iteration-1);

                direction.rotate(p.PI/3);
                st = end.copy();
                end = st.copy().add(direction);
                p.curve(st.copy(), end.copy(), p.TYPE_A, iteration-1);
            }
        }
        else{
            p.line(st.x, p.cansize-st.y, end.x, p.cansize-end.y);
        }
    }

    p.nextIteration = function(){
        p.iteration++;
        p.draw();
    }

    p.reset = function(){
        p.iteration = 0;
        p.draw();
    }
}

var hexaLoop = new p5(hexaPackaging);
