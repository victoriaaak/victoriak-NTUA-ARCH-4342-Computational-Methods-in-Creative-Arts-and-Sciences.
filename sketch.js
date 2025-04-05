//Viktoria Kalabali
//I slowed the pace of the creation of the circles with frameRate
function setup() {
 let canvas = createCanvas(400, 400);
  background(100);
  frameRate(5);

}
//I set random x,y for the circles
function draw() {
let x=random(0,400);
let y=random(0,400);
//i removed the filling of the circles
noFill();
// i set random grey colors for the circles including white and black
stroke(random(0,255))
 circle(x,y,100);
}
//Function to stop the programm
function doubleClicked(){
  noLoop()
}
//Function to restart it 
function mousePressed(){
  loop()
}