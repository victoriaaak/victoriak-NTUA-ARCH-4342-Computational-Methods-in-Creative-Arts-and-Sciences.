// Viktoria Kalabali

const sketch1 = (p) => {

p.setup= () =>{
  let canvas = p.createCanvas(400, 400);
  p.background(255);
  canvas.parent('ass2p')
}

//I set the random x1,x2 for the lines

p.draw = () => {
  p.frameRate(10);
  let x1 = p.random(0, 400);
  let x2 = p.random(0, 400);

  //I set the color of the lines to random
  p.stroke(p.random(0, 255), p.random(0, 255), p.random(0, 255));
  // I drew the lines with the random x1,x2
  p.line(p.x1, 0, p.x2, 400);
}
new p5(sketch1);
