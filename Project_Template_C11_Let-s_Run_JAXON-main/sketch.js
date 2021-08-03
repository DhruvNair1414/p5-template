  var pathImage,path
  var boy_running,runner
  var invisibleWall_right,invisibleWall_left



  function preload(){

    //pre-load images
    pathImage = loadImage("path.png")
    boy_running = loadAnimation("Runner-1.png","Runner-2.png")

  }

  function setup(){

    createCanvas(400,400);
    //create sprites here

    //creating the path
    path = createSprite(190,200,100,400)
    path.addImage("path",pathImage)
    path.scale = 1.2

    //adding motion to the background
    path.velocityY = 10

    //creating the runner
    runner = createSprite(195,250)
    runner.addAnimation("running",boy_running)
    runner.scale = 0.1

    //creating the right invisible wall
    invisibleWall1 = createSprite(375,200,20,400)
    invisibleWall1.visible = false

    //creating the left invisible wall
    invisibleWall2 = createSprite(25,200,20,400)
    invisibleWall2.visible = false


  }

function draw() {

  background(0);

  //adding motion to the runner
  runner.x = World.mouseX

  //reseting path 
  if(path.y > 350){
    path.y = height/2
  }

  //making runner collide with the invisible walls
  runner.collide(invisibleWall1)
  runner.collide(invisibleWall2)

  // code to make sure the runner does not glitch to the other side of the invisible wall
  if (World.mouseX > 375 ) {
    
    runner.x = 285
    
  }

  if (World.mouseX < 25) {

    runner.x = 120
    
  }
  

  drawSprites()
}


