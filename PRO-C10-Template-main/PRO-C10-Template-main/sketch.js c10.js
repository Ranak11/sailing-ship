var sea,boat;
var seaImg,shipImg;

function preload(){
  

  shipImg1 = loadAnimation("ship-1.png");
 
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("aqua");

 
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;
  sea.x=sea.width/2

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;


  if(sea.x < 100){
   sea.x=sea.width/2
  }

 
  drawSprites();
}