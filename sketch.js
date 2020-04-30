
var mr,r


function setup() {
  createCanvas(800,400);
  r=createSprite(300, 200, 30, 80);
  r.shapeColor="red";
  mr=createSprite(500,200,80,30)
  mr.shapeColor="red";
}

function draw() {
  background("blue"); 
  
  mr.x=mouseX;
  mr.y=mouseY;

  

  drawSprites();
}