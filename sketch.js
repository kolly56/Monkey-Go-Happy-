
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fG, oG
var score, g
var time=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
g=createSprite(200,360,800,20);
  g.velocityX=-6;
  monkey=createSprite(30,325,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  fG=createGroup();
  oG=createGroup();
}


function draw() {
background("skyblue");
  stroke("white");
  fill("white");
  textSize(20);
  time=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+time,200,50);
  if(g.x<0){
    g.x=g.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-6;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(g);
  drawSprites();
  spawnF();
  spawnO();
}

function spawnO(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,10,40);
   obstacle.velocityX = -6
   obstacle.addImage(obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    oG.add(obstacle);
 }
}

function spawnF() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(180,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    fG.add(banana);
    
  }
}



