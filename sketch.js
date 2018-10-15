function preload() {
  // put preload code here
}
var balls = [];
var pacmanX;
var pacmanY;

var counter = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  var ballNumber = 5;


  for (var i = 0; i < ballNumber; i++) {
    var myBall = new Ball(random(11, width-11), random(11, height-11), 20);

    balls.push(myBall);

  }

}

function draw() {

  background(0);
  noCursor();
  rectMode(CENTER);

  var pacmanX = mouseX;
  var pacmanY = mouseY;
  var myBar = new Bar(pacmanX, pacmanY, 20, 80);

  myBar.displaypacman();


  textFont('Helvetica');
  textAlign(LEFT);
  fill('white');
  textSize(30);
  text('Score: ' + counter, 50, 50);

  textAlign(CENTER);
  textSize(80);
  textStyle(BOLD);
  fill(255, 255, 0, 30);
  text('CATCH THE BALLS', windowWidth/2, windowHeight/2 - 100);
  textSize(60);
  text("if they don't get too fast :)", windowWidth/2, windowHeight/2 - 40);





  for (var j = 0; j < balls.length; j++) {
    balls[j].move(pacmanX, pacmanY);
    balls[j].display();
  }


}

function Bar(pacmanX, pacmanY, pacmanHeight, pacmanWidth) {

  this.pacmanX = pacmanX;
  this.pacmanY = pacmanY;
  this.pacmanHeight = pacmanHeight;
  this.pacmanWidth = pacmanWidth;

  this.displaypacman = function() {
    fill(255);
    noStroke();
    angleMode(DEGREES);
    fill('yellow');
    arc(this.pacmanX, this.pacmanY, 50, 50, 45, 315, PIE);
  }
}

function Ball(_x, _y, _dimension) {
  this.x = _x;
  this.y = _y;
  this.dimension = _dimension;
  this.color = 'white';
  this.speedx = random(1, 10);
  this.speedy = random(1, 5);
  this.counter = counter;

  var yDir = 1;
  var xDir = 1;


  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x , this.y, this.dimension);


  }

  this.move = function(pacmanX, pacmanY) {
    this.x += this.speedx * xDir;
    this.y += this.speedy * yDir;


    if (this.y >= height - 10 || this.y <= 10) {
      yDir = -yDir;
    }

    if (this.x >= width - 10 || this.x <= 10) {
      xDir = -xDir;
    }

    if (this.x <= pacmanX + 25 && this.y <= pacmanY + 25 && this.x >= pacmanX - 25 && this.y >= pacmanY - 25) {
      this.x = random(0, width);
      this.y = random(0, height);
      this.speedx *= 1.2;
      this.speedy *= 1.2;
      counter += 1;
    }









  }


}
