let clack;
let block1;
let block2;
let blockImg;

let wallPos = 6;

var impList = [0, 0, 1, 0.01, 0.0001, 0.0000001, Math.pow(10, -8)]; // oh you'll need this !

let framerate = 30;
let timeGone = 0.0;
let dt = 0.01;
let collision = 0;
let digits = 1; // after decimal
let countDiv;
let play;
let pause;
let slider;
let canvasSize = 300;
const initialVelocity = -30;

var isLoop = 1;

function preload(){
    clack = loadSound('/static/clack.wav');
    blockImg = loadImage("/images/block.png");
}

function setup(){
    var cnv = createCanvas(canvasSize,canvasSize);
    cnv.parent("simulation"); // by id

    // cnv.position((windowWidth - canvasSize)/2, (windowHeight - canvasSize)/2);

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

    countDiv = document.getElementById("counter");

    slider = document.getElementById("digits");
    slider.addEventListener("input", updateBigMass);

    play = document.getElementById("play");
    play.onclick = toggle;

    restart = document.getElementById("restart");
    restart.onclick = restartAnim;

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

    countDiv.innerHTML =  collision;
}

function updateBigMass(){
    digits = slider.value;
    block2.m = Math.pow(100, digits);
    document.getElementById("big").innerHTML = block2.m;
}

function interact(one, other){
        // Along X first
    if (other.x < wallPos + one.s){
        while(other.vx < Math.abs(initialVelocity) - impList[digits]){
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

function toggle(){
    if (isLoop){
        noLoop();
        isLoop = 0;
    }else{
        loop();
        isLoop = 1;
    }
}

function resetSketch(){
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
