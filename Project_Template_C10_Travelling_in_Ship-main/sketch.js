
var sea;
var seaImage;
var ship,shipImage1;
var x 

function preload(){
seaImage = loadImage("sea.png");
shipImage1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}
function setup(){
  createCanvas(400,400);

  //creating sea
  sea = createSprite(200,180,600,20)
  sea.addImage("sea",seaImage)
  sea.width = sea.width/2

  //creating ship
  ship = createSprite(50,300,50,50)
  ship.addAnimation("sailing",shipImage1)

  //position and scale for ship
  ship.x = 120
  ship.scale = 0.2
}



function draw() {
  //setting background color
  background("white")
  drawSprites()

  //velocity for sea
  sea.velocityX = -3
  
  if(sea.x < 0){
    sea.x = sea.width/2
  }
}