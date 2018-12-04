function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('FFFAED')
    x = mouseX;
    y = mouseY;
    //earRight
    fill('rgb(255, 100, 225)');
    rect(x+40,y-90, 50, 50);
    //earLeft
    fill('rgb(255, 100, 225)');
    rect(x-90,y-90, 50, 50);
    //rightInside
    fill('#000000');
    rect(x+50,y-80, 30, 30);
    //earLeftInside
    fill('#000000');
    rect(x-80,y-80, 30, 30);
    noStroke();
    fill('rgb(255, 100, 225)');
    ellipse(x, y, 200, 200);
    //tongue
    fill('#e61919');
    arc(x, y+55, 40, 30, 0, 360);
    //nose
    fill('#FFE4C4');
    ellipse(x, y+30, 74, 57);
    //snout
    fill('#FF1493');
    ellipse(x,y + 30, 50, 40);
    //snoutholes
    fill('#000000');
    ellipse(x-10, y + 25, 20, 20);
    fill('#000000');
    ellipse(x+10, y + 25, 20, 20);
    //eyeLeft
    fill('#000000');
    ellipse(x+42, y-26, 40,64);
    //pupilLeft
    fill('#7FC35E');
    ellipse(x+42, y-26, 20, 40);
    //pupilLeft2
    fill('#F0FFFF');
    ellipse(x+42, y-26, 10, 20);
    //eyeRight
    fill('#000000');
    ellipse(x-42, y-26, 40, 64);
    //pupilRight
    fill('#7FC35E');
    ellipse(x-42, y-26, 20, 40);
    //pupilRight2
    fill('#F0FFFF');
    ellipse(x-42, y-26, 10, 20);
}
