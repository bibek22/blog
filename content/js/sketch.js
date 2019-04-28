let clack;
let block1;
let block2;
let blockImg;
let timestep = 0.1;
let collision = 0;
let digits = 2;
let countDiv;
let play;
let pause;
let slider;
//let node = document.getElementByid('counter');

function preload(){
    clack = loadSound('/static/clack.wav');
    blockImg = loadImage("/images/block.png");
}

function setup(){
    var cnv = createCanvas(520, 500);
    cnv.position(500, 200);

    frameRate(30);

    block1 = new Block(100, 258, 0, 0, 1, 100);
    block2 = new Block(250, 158, -1/timestep, 0, Math.pow(10, digits), 200);

    countDiv = createDiv(collision);
    countDiv.style('font-size', '32pt', 'color', 'gray');
    countDiv.position(windowWidth/2, windowHeight/1.2);

    slider = createSlider(1, 5, 2, 1);
    slider.position(windowWidth/1.5, windowHeight/3);

    play = createButton("Play");
    play.mousePressed(loop);
    play.position(windowWidth/2.1, windowHeight/1.2 +  40);

    pause = createButton("Pause");
    pause.mousePressed(noLoop);
    pause.position(windowWidth/2.1 + 80, windowHeight/1.2 + 40);

    restart = createButton("restart");
    restart.mousePressed(restartAnim);
    restart.position(windowWidth/2.1 + 180, windowHeight/1.2 +  40);


    resetSketch(slider);
}

function draw(){
    resetSketch(slider);
    block1.update(timestep);
    block2.update(timestep);

    interact(block1, block2);

    strokeWeight(4);
    line(0, 360, 920, 360);
    strokeWeight(6);
    var wall = line(10, 0, 10, 360);

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
    block2.m = Math.pow(10, digits);
    clear();
}

function restartAnim(){
    collision = 0;
    block1.x = 100;
    block1.y = 258;
    block1.vx = 0;
    block2.vx = -1/timestep;
}
