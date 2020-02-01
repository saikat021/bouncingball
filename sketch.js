var x=0;
var speed=3;
function setup() {
  createCanvas(1800, 1800);
}

function draw() {
 
  background(255,120,0);
  stroke(255);
  strokeWeight(4);
  noFill();
  circle (x,200,100,100);

 
    x=x+speed;
  if ((x>=width-50)&&(speed==3))
  {
    speed=-3;
  }
  else if((x<=50)&&(speed==-3))
  {
                       speed=3;
                       }

 
    
}