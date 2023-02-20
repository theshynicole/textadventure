
function setup(){
    createCanvas(windowWidth,windowHeight);
    checkbox=createCheckbox('Are you happy?',false);
}

function myCheckedEvent(){
    if(checkbox.checked()){
        console.log('checking!');
        // checking means yes
    }else{
        console.log('unchecking!');
        // unchecking means no
        // link to p5 reference:https://p5js.org/reference/#/p5/createCheckbox
    }
}
let xoff=0.0;
let noiseScale=0.02;
function draw(){
    background('#8FBC8F');
    // Decided to choose green since green in psycology means peacefulness.
    if(keyIsPressed===true){
        fill(0);
    }else{
        fill(255);
    }
    rect(100,25,500,50);
    describe('50-by-50 white rect that turns back on keypress');
    //  link to reference:https://p5js.org/reference/#/p5/keyIsPressed
    // With Keypress, I wanted for the user to continously button smash when they get mad
    xoff = xoff + 0.01;
    let n = noise(xoff) * width;
    line(n, 0, n, height);
    describe(`vertical line moves left to right with updating
      noise values.`);
    //   link to refernce:https://p5js.org/reference/#/p5/noise
    // I thought that the noise function might make someone feel calm while looking at it.
    for (let x=0; x < width; x++) {
        let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
        stroke(noiseVal*255);
        line(x, mouseY+noiseVal*80, x, height);
      }
      describe(`horizontal wave pattern effected by mouse x-position
        & updating noise values.`);
        // link to reference:https://p5js.org/reference/#/p5/noise
        // I don't know if this can be considered relaxing, but I thought this can be nice to mess around with.
}

function mousePressed(){
    saveCanvas("textadventure","png");
}