var a,b,c;
var pc;

var casita;
var mc;
var villianImg, villian;
var bullet=2;

var floorGroup,wallGroup, bulletGroup;

var gameState= 0;
var villian_power=50;
var villianState=0;
var bulletSize=5;
var lifes = 5;
function preload(){
  casita = loadImage ("casita.png");
  mc = loadImage ("mc.png");
  villianImg = loadImage ("villianImg.png");

}

function setup(){
createCanvas (600,600);
floorGroup = new Group ();
wallGroup = new Group();
bulletGroup = new Group();


pc = createSprite(1000,255,10,10);
pc.addImage(mc);
pc.scale = 0.3;

villian = createSprite(1250,255,10,10);
villian.addImage(villianImg);
villian.scale = 0.3;



floors(1000,325);
floors(1000,630);
floors(1000,935)

a= walls(940,160);
b= walls(520,470);
c= walls(940,470);
walls(1445,470);
walls(745,775);
walls(1445,775);
walls(13,470);
walls(13,775);
walls(1987,775);


}

function draw(){
background("lightblue");
textSize(20);
text("LIFES:"+lifes,camera.position.x+200,camera.position.y-200)
image(casita,0,0,2000,1000);
if(frameCount%80===0){
bullet = createSprite (villian.x-60, villian.y-10,bulletSize,bulletSize);
bullet.shapeColor="red";
bullet.velocityX=-2;
bullet.lifetime=200;
bulletGroup.add(bullet);
}
if(keyDown(RIGHT_ARROW)){
  pc.x+=5;
}
if(keyDown(LEFT_ARROW)){
  pc.x-=5;
}
if(keyIsDown(UP_ARROW)){
  pc.y-=15;
  pc.velocityY = pc.velocityY+0.5;
}
if(keyDown(DOWN_ARROW)){
  pc.y+=5;
}
pc.collide(floorGroup);
pc.collide(wallGroup);

if(bulletGroup.isTouching(pc)){
  lifes--;
}

if(pc.isTouching(villian)&&villianState===0){
  pc.bounceOff(villian);
  villianState=1;
  villian_power--;
}

console.log(villian_power);
if(villian_power <= 40 && villian_power>=31){
villian.y=225;
villian.x=500;

}
camera.position.x = pc.x;
camera.position.y = pc.y-100;
drawSprites();

}

function floors(x,y){
  var floor =createSprite(x,y,2000,25);
  floorGroup.add(floor);
}

function walls(x,y){
  var wall = createSprite(x,y,25,315);
  wallGroup.add
}