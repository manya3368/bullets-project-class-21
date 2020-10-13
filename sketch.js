var bullet;
var wall;
var speed;
var weight;
 var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
 weight=random(30,52);
  bullet =createSprite(50, 200, 70, 20);
  bullet.velocityX=speed; 
  bullet.shapeColor="white";
  
  
 this.wall = createSprite(1200,200,thickness,height/2);
 this.wall.shapeColor=("white");

 thickness=random(22,83);
 }

function draw() {
  background(0); 

  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if (damage<10){
    bullet.shapeColor=color(0,255,0);
  }
  
  if(damage>10){
    bullet.shapeColor=color(255,0,0);
  }
}

drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}

else {
 return false;
}
}
