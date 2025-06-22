//Viktoria Kalabali
//I slowed the pace of the creation of the circles with frameRate

var sketch = function (p) {

  p.setup = function () {
    const my1stcanvas = p.createCanvas(400, 400);
    p.background(100);
    p.frameRate(5);
    my1stcanvas.parent('ass1p'); //changed "canvas" to my1stcanvas

  }
  //I set random x,y for the circles
  p.draw = function () {
    let x = p.random(0, 400);
    let y = p.random(0, 400);
    //i removed the filling of the circles
    p.noFill();
    // i set random grey colors for the circles including white and black
    p.stroke(p.random(0, 255)); //you were missing the p. before random and it couldn't find the random variable, in instance mode you need to add p. before commands
    p.circle(x, y, 100);
  };
  p.mousePressed = function (){
    p.noLoop();
  }

  p.doubleClicked = function (){
    p.loop();
  } 
//added curly bracket to close
};





var sketch1 = function (p) {
  p.setup = function () {
    const my2ndcanvas = p.createCanvas(400, 400);
    p.background(255);
    my2ndcanvas.parent('ass2p'); //changed "canvas" to my2ndcanvas
  }

  //I set the random x1,x2 for the lines

  p.draw = function () {
    p.frameRate(10);
    let x1 = p.random(0, 400);
    let x2 = p.random(0, 400);

    //I set the color of the lines to random
    p.stroke(p.random(0, 255), p.random(0, 255), p.random(0, 255));
    // I drew the lines with the random x1,x2
    p.line(x1, 0, x2, 400);
  }; //you were missing a semicolon
  
  p.mousePressed = function (){
    p.noLoop();
  }

  p.doubleClicked = function (){
    p.loop();
  } 
  //added curly bracket to close

};

var sketch2 = function (p) {

p.setup = function(){
  const my3rdcanvas = p.createCanvas(500, 500);
  p.background(200);
  p.stroke(255);
  my3rdcanvas.parent('ass3p');
}

p.draw = function(){
// first i drew the lines
  p.line(0,0,500,500);
  p.line(500,0,0,500);
// then the center circle
  p.ellipse(250,250,100);
// i centered the rectangle
  p.rectMode(p.CENTER);
//then i drew the rectangle
  p.rect(250,250,70);
// in the end i drew the last circles
  p.ellipse(250,150,100);
  p.ellipse(150,250,100);
  p.ellipse(350,250,100);
  p.ellipse(250,350,100);
}

p.mouseClicked = function(){
  p.fill(p.random(0,255), p.random(0,255), p.random(0,255));
  p.background(p.random(0,255), p.random(0,255), p.random(0,255));
}
}

var sketch3 = function(p){

p.setup = function() {
  const my4rthcanvas = p.createCanvas(400, 400);
   my4rthcanvas.parent('ass4p');
}

// when the mouse is is first pressed the program stops.Then when the user presses their mouse the program works and when they release it it stops where their where.
p.mouseReleased = function(){
  if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
  p.noLoop();
}}

p.mousePressed = function(){
  if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
    p.loop();
  }}

// I removed the filling of the curves
//I slowed the pace of the programm
//And i made thicker the curves

p.draw = function() {
  p.noFill();
  p.frameRate(10);
  p.background(200); 
  p.strokeWeight(8)

// I set up a loop that creates curves every 30 pixels
  for (i = -800; i <800 ; i += 30) {
// i set up the color of every curve to random  
    p.stroke(p.random(0,255),p.random(0,255),p.random(0,255),p.random(0,255))
// i created the curves with one anchor point to be the location of my mouse
      p.bezier(i, 0, p.mouseX, p.mouseY, 100, 300, i, 400);
  }
}
}

var mysketch = new p5(sketch);
var mysketch1 = new p5(sketch1);
var mysketch2 = new p5(sketch2);
var mysketch3 = new p5(sketch3);