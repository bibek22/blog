let clack;
let block1;
let block2;
let blockImg;

let wallPos = 6;

let framerate = 30;
let timeGone = 0.0;
let dt = 0.01;
let collision = 0;
let digits = 1; // after decimal
let countDiv;
let play;
let pause;
let slider;
let canvasSize;
const initialVelocity = -30;
//let node = document.getElementByid('counter');

function preload(){
    clack = loadSound('/static/clack.wav');
    blockImg = loadImage("/images/block.png");
}

function setup(){
    canvasSize = getCanvasSize();
    var cnv = createCanvas(canvasSize,canvasSize);
    cnv.position((windowWidth - canvasSize)/2, (windowHeight - canvasSize)/2);

    frameRate(framerate);

    block1 = new Block(
        canvasSize/5,
        canvasSize/1.31,
        0,
        1,
        canvasSize/7,
        wallPos);

    block2 = new Block(
        canvasSize/1.3,
        canvasSize/1.53,
        initialVelocity,
        Math.pow(100, digits),
        canvasSize/4,
        wallPos + block1.s);

    countDiv = createDiv(collision);
    countDiv.style('font-size', '24pt', 'color', 'brown');
    countDiv.position(windowWidth/3, windowHeight/1.2);

    slider = createSlider(0, 5, 1, 1); // start, end, default, step
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
    timeGone += 1/framerate;
    resetSketch(slider);
    while (timeGone > dt){
        timeGone -= dt;
        block1.update(dt);
        block2.update(dt);
        interact(block1, block2);
    }

    strokeWeight(6);
    line(6, canvasSize/1.1, canvasSize, canvasSize/1.1); //6 for stroke width of wall
    var wall = line(6, canvasSize/8, 6, canvasSize/1.1);

    block1.draw();
    block2.draw();

    countDiv.html("Collisions: "+ collision);
}

function interact(one, other){
        // Along X first
    if (other.x < wallPos + one.s){
        let i = 0;
        while(other.vx < Math.abs(initialVelocity) - Math.pow(10, -digits)){
            i++;
            one.collide(other);
            one.hitWall();
            collision += 2; // for collision with the wall
        }
        other.x = wallPos + one.s;
        one.x = wallPos
    }
    if (other.x < one.x + one.s){
        one.collide(other);
        one.x = other.x - one.s;

        clack.play();
        collision += 1;
    }
}


function resetSketch(){
    digits   = slider.value();
    //dt = 10/Math.pow(10, digits);
    block2.m = Math.pow(100, digits);
    clear();
}

function restartAnim(){
    // handler for restart button
    collision = 0;
    block1.x = canvasSize/4;
    block1.vx = 0;
    block2.vx = initialVelocity;
    block2.x = canvasSize/1.5;
    loop();
}

function getCanvasSize(){
    // for different size devices
    if (windowWidth > windowHeight){
        return(6*windowHeight/8);
    }else{
        return(6*windowWidth/8);
    }
}
