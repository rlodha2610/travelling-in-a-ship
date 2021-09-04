  var ship,ship_moving;
  var sea;
  var seaImg;

function preload(){
  ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  background('lightblue');
  sea=createSprite(400,200)
  sea.addImage("sea",seaImg)
  sea.scale= 0.3;

  ship=createSprite(250,250,20,50);
  ship.addAnimation("moving",ship_moving)
  ship.scale= 0.2;    

  edges=createEdgeSprites();
}

function draw() {
  sea.velocityX=-3;
  if (sea.x<0){
  sea.x=sea.width/8
  }
  
  drawSprites();
}