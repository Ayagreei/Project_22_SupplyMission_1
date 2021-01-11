var chopper, img1, ball, img2, ground, img3, bac, boat, img4, wall, collecter;
const a = Matter.Engine;
const b = Matter.World;
const c = Matter.Bodies;
const d = Matter.Body;

function preload() {
  img1=loadImage("hp.gif");
  img2=loadImage("package.png");
  img3=loadImage("sea.jpg");
  img4=loadImage("boat1.png");
}

function setup() {
  createCanvas(1300,600);
  rectMode(CENTER);

  wall=createSprite(1260,500,20,60);
  wall.visable="false";
  engine = a.create();
  world = engine.world;
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
 // ground=c.rectangle(width/2, 500, width,5,{isStatic:true} );
  //ground.shapeColor=color(255);
  //ground.visable="false";
  //b.add(world, ground);
  ground = c.rectangle(width/2, 550, 10, 10 , {isStatic:true} );
 	b.add(world, ground);

  bac=createSprite(width/2,350,800,700);
  bac.addImage(img3);
  bac.scale=4;

  collecter=createSprite(192.5,550,270,10);
  collecter.velocityX = "2";

  boat=createSprite(200,500,10,10);
  boat.addImage(img4);
  boat.scale=0.4;
  boat.velocityX = "2";

 // engine = a.create();
 // world = engine.world;


  ball=createSprite(width/2,100,30,30);
  ball.addImage(img2);
  ball.scale=0.2;

  chopper=createSprite(width/2,55,10,10);
  chopper.addImage(img1);
  chopper.scale=1.7; 

  a.run(engine);

  packageBody = c.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	b.add(world, packageBody);
}

function draw() {
  background(0);
  rectMode(CENTER);
  if(boat.isTouching(wall)){
    boat.x=200;
  }
  if(collecter.isTouching(wall)){
    collecter.x=192.5;
  }
  keyPressed();
  drawSprites();
  if(ball.isTouching(collecter)){
    fill(0)
    textSize(20);
    text ("GAME OVER PACKAGE COLLECTED",510,250)
    Matter.Body.setStatic( packageBody, true);
    boat.velocityX = "0";
    collecter.velocityX = "0";
  }

  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
      Matter.Body.setStatic( packageBody, false);
      ball.x= packageBody.position.x 
      ball.y= packageBody.position.y 
   }
 }