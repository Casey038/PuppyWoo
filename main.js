var pig;
var feed = [];
var numFood = 10;
var headSize = 200;
var earXR = 40;
var earYR = 90;
var earXL = 90;
var earYL = 90;
var ear2XR = 50;
var ear2YR = 80;
var ear2XL = 80;
var ear2YL = 80;


//commit test

function setup() {
    createCanvas(640, 480);
    pig = new Piggy();
    

    for(var i = 0; i < numFood; i++){
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background('FFFAED')
    pig.display();
    
    for(var i = 0; i < feed.length; i++){
        feed[i].display();
    }
}
    

function mousePressed() {
    pig.eat();
    headSize += 10;
    earXR += 3.5;
    earYR += 3.5;
    earXL += 3.5;
    earYL += 3.5;
    ear2XR += 3.5;
    ear2YR += 3.5;
    ear2XL += 3.5;
    ear2YL += 3.5;
}
/*
function mouseIsPressed() {
    println("Oink!");
}
*/
function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Piggy() {
    var x = mouseX;
    var y = mouseY;
    //var diameter = 200;

    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x,2) + Math.pow(y - other.y, 2)); 
        return dist;
    }
    
    this.eyes = function() {
        eyesBig = !eyesBig;
    }
    
    this.eat = function() {
        console.log('try to eat');
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize/2;
            var r2 = headSize/2; // check this
            if(r1 + r2 > d) {
                feed.splice(i,1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    }
    
    this.display = function() {
        x = mouseX;
        y = mouseY;
        /*
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
        */
        //earRight
        fill('rgb(255, 100, 225)');
        rect(x+earXR,y-earYR, 50, 50);
    
        //earLeft
        fill('rgb(255, 100, 225)');
        rect(x-earXL,y-earYL, 50, 50);
    
        //rightInside
        fill('#000000');
        rect(x+ear2XR,y-ear2YR, 30, 30);
    
        //earLeftInside
        fill('#000000');
        rect(x-ear2XL,y-ear2YL, 30, 30);
        noStroke();
        
        //pigHead
        fill('rgb(255, 100, 225)');
        ellipse(x, y, headSize, headSize);
    
       
    
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
    if(mouseIsPressed) {
        //eyeLeft
        fill('#000000');
        ellipse(x+42, y-26, 50,40);
        //pupilLeft
        fill('#7FFF00');
        ellipse(x+42, y-26, 30, 25);
    
        //pupilLeft2
        fill('#F0FFFF');
        ellipse(x+42, y-26, 20, 10);
    
        //eyeRight
        fill('#000000');
        ellipse(x-42, y-26, 50, 40);
    
        //pupilRight
        fill('#7FFF00');
        ellipse(x-42, y-26, 30, 25);
    
        //pupilRight2
        fill('#F0FFFF');
        ellipse(x-42, y-26, 20, 10);
         //tongue
        fill('#e61919');
        arc(x, y+60, 40, 10, 0, 180);
        //tongue2
        fill('#F8F8FF');
        arc(x, y+60, 30, 7, 0, 180);
        
    } else {
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
        
         //tongue
        fill('#e61919');
        arc(x, y+55, 40, 30, 0, 360);
        //tongue
        fill('#F8F8FF');
        arc(x, y+55, 30, 20, 0, 360);
    }
    }
    
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}