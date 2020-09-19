var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var downBody,sideBody1,sideBody2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/3, 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/4, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	downBody = new Box(400, 635, 200, 20, {isStatic:true} );
	
	sideBody2 = new Box(500, 610, 20, 100, {isStatic:true} );
	
	sideBody1 = new Box(300,640, 20, 100, {isStatic:true} );
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  if(keyCode === LEFT_ARROW){
    helicopterSprite.x = helicopterSprite.x-10; 
  }	
  if(keyCode === RIGHT_ARROW){
   helicopterSprite.x = helicopterSprite.x+10;   
  }	
	
  
	
  downBody.display();
  sideBody1.display();
  sideBody2.display();
  drawSprites();

}

function keyPressed() {
	
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  
   
     
  }
}



