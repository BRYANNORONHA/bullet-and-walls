var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas( 1600,400);
  createSprite(400, 200, 50, 50);
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "green"
  speed=random(223,321)
  weight=random(30,62)

}

function notClollided(bullet,wall){
    bulletRightEdge=bullet1.x + bullet.width;
    wallLeftEdge = wall.x;
if (bulletRightEdge>wallLeftEdge){
    return true
} 
    return false
}

function hasCollided(bullet,wall){
    bullet.velocitX = 0
    var damage = 0.5 * weight * speed * speed(thickness * thickness * thickness);
if (damage>10){
   wall.shapeColor = color(255,0,0)
}
if (damage<10){
   wall.shapeColor = color(0,255,0)
}
}

notCollided();
hasCollided();
  
function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.diplay();
  wall.display();
}