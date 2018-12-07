var pig;
var feed = [];
var numFood = 10;

function setup() {
    createCanvas(640, 480);
    pig = new Piggy();
    
<<<<<<< HEAD
    for(var i = numFood; i > 0; i--){
=======
    for(var i = 0; i < numFood; i++){
>>>>>>> 76b69419851351c7a0e79777e78455d5b0dd238b
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background('FFFAED')
    pig.display();
    
<<<<<<< HEAD
    for(var i = 0; i < feed.length; i++){
=======
    for(var i = 0; i < numFood; i++){
>>>>>>> 76b69419851351c7a0e79777e78455d5b0dd238b
        feed[i].display();
    }
}
    

function mousePressed() {
    pig.eat();
<<<<<<< HEAD
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

function Piggy() {
    var x = mouseX;
    var y = mouseY;

    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x,2) + Math.pow(y - other.y, 2)); 
        return dist;
    }
    
    this.eat = function() {
        console.log('try to eat');
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize/2;
            var r2 = 100; // check this
            if(r1 + r2 > d) {
                feed.splice(i,1);
            }
        }
    }
    
    this.display = function() {
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
    
=======
>>>>>>> 76b69419851351c7a0e79777e78455d5b0dd238b
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

function Piggy() {
    var x = mouseX;
    var y = mouseY;

    this.getDistance = function(other){
        var dist = Math.sqrt(Math.pow(x - other.x,2) + Math.pow(y - other.y, 2)); 
        return dist;
    }
    
    this.eat = function() {
        console.log('try to eat');
        for(var i = 0; i < numFood; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize/2;
            var r2 = 100; // check this
            if(r1 + r2 > d) {
                console.log('hit');
                feed.splice(i,1);
            }
        }
    }
    asdf
    
    this.display = function() {
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
    
}