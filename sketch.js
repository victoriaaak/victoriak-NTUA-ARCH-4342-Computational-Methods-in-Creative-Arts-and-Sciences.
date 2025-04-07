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

var mysketch = new p5(sketch);
var mysketch1 = new p5(sketch1);