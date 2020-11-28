var bullet, wall;
var speed, weight, thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,100,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed; 
  fill(80,80,80);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "gray";
 
}

function draw() {
  background("gray"); 
  collide( bullet, wall);
  drawSprites();
}

function collide(object1 , object2) {
  if(object2.x-object1.x < object2.width/2+object1.width/2 ) {
      object1.velocityX = 0;
      var damage = 0.5*weight*speed*speed/thickness*thickness*thickness ;
      if(damage > 10){
        object1.shapeColor = color(255,0,0);
      }
      if(damage < 10){
        object1.shapeColor = color(0,100,0);
      }
  }
}