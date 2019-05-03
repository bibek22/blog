let clack;
let block1;
let block2;
let blockImg;
let dt = 0.1;
let collision = 0;
let digits = 2;
let countDiv;
let play;
let pause;
let slider;
let canvasSize;
const initialVelocity = -10;
//let node = document.getElementByid('counter');

function preload(){
    clack = loadSound('/static/clack.wav');
    blockImg = loadImage("/images/block.png");
}

function setup(){
    canvasSize = getCanvasSize();
    var cnv = createCanvas(canvasSize,canvasSize);
    cnv.position((windowWidth - canvasSize)/2, (windowHeight - canvasSize)/2);

    frameRate(3/dt);

    block1 = new Block(canvasSize/5, canvasSize/1.31, 0, 0, 1, canvasSize/7);
    block2 = new Block(canvasSize/1.3, canvasSize/1.53, initialVelocity, 0, Math.pow(100, digits-1), canvasSize/4);

    countDiv = createDiv(collision);
    countDiv.style('font-size', '24pt', 'color', 'brown');
    countDiv.position(windowWidth/3, windowHeight/1.2);

    slider = createSlider(1, 5, 2, 1);
    slider.position(windowWidth/1.5, windowHeight/3);

    play = createButton("Play");
    play.mousePressed(loop);
    play.position(windowWidth/2.1, windowHeight/1.1);

    pause = createButton("Pause");
    pause.mousePressed(noLoop);
    pause.position(windowWidth/2.1 + 80, windowHeight/1.1);

    restart = createButton("restart");
    restart.mousePressed(restartAnim);
    restart.position(windowWidth/2.1 - 100, windowHeight/1.1);


    resetSketch(slider);
}

function draw(){
    resetSketch(slider);
    block1.update(dt);
    block2.update(dt);

    interact(block1, block2);

    strokeWeight(6);
    line(6, canvasSize/1.1, canvasSize, canvasSize/1.1); //6 for stroke width of wall
    var wall = line(6, canvasSize/8, 6, canvasSize/1.1);

    block1.draw();
    block2.draw();
    scale(0.5)

    countDiv.html("Collisions: "+ collision);
}
//
// function mousePressed(){
//      noLoop();
//  }
//
function collide(one, other){
    // one and other both blocks object
    //
    let vx;   // tmp storage to avoid updating till next calculation
    let vy;
    vx = (one.m - other.m)/(one.m + other.m) * one.vx + 2 * other.m / (one.m + other.m) * other.vx;
    vy = (one.m - other.m)/(one.m + other.m) * one.vy + 2 * other.m / (one.m + other.m) * other.vy;

    // symmetric formula for the other one
    other.vx = (other.m - one.m)/(other.m + one.m) * other.vx + 2 * one.m / (other.m + one.m) * one.vx;
    other.vy = (other.m - one.m)/(other.m + one.m) * other.vy + 2 * one.m / (other.m + one.m) * one.vy;

    one.vx = vx;
    one.vy = vy;
    clack.play();
}


function interact(one, other){
        // Along X first
        if (one.vx - other.vx > 0){
        // If other is on the right
            if (Math.abs(one.x - other.x) < one.s){
                collide(one, other);
                collision += 1;
            }
        }
}

function resetSketch(){
    digits   = slider.value();
    dt = 10/Math.pow(10, digits);
    frameRate(3/dt);
    block2.m = Math.pow(10, digits);
    clear();
}

function restartAnim(){
    collision = 0;
    block1.x = 100;
    block1.vx = 0;
    block2.vx = initialVelocity/30 * 3/dt;
    block2.x = block1.x + 140;
    loop();
}

function getCanvasSize(){
    if (windowWidth > windowHeight){
        return(6*windowHeight/8);
    }else{
        return(6*windowWidth/8);
    }
}
