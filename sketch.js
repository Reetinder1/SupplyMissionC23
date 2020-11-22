var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var log1,log2,log3;
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
	createCanvas(800, 600);

	engine = Engine.create();
    world = engine.world;
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	log1= new Box(400,550,200,20);
	log2= new Box(510,510,20,100);
	log3= new Box(298,510,20,100);
	



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-70, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
  
}


function draw() {
	background(0);
	Engine.update(engine);
    rectMode(CENTER);
  
 
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 

    log1.display();
    log2.display();
	log3.display();
	
    keyPressed();
    drawSprites();
 
}


function keyPressed() {
if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);

}
}


