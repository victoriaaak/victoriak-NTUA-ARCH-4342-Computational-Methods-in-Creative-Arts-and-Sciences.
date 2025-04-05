//Viktoria Kalabali
//I slowed the pace of the creation of the circles with frameRate

const sketch = (p) => {

p.setup = () => {
 let canvas = p.createCanvas(400, 400);
  p.background(100);
  p.frameRate(5);
  canvas.parent('ass1p')

}
//I set random x,y for the circles
p.draw = () =>{
let x=p.random(0,400);
let y=p.random(0,400);
//i removed the filling of the circles
p.noFill();
// i set random grey colors for the circles including white and black
p.stroke(random(0,255))
 p.circle(x,y,100);
}
new p5(sketch);