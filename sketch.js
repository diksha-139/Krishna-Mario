
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgImg,mario,runningMario,collidedMario,enemy,pipeImg,pipe;
function preload()
{
bgImg= loadImage("bg.jpg");
runningMario=loadAnimation("m1.png","m2.png","m3.png");
collidedMario=loadAnimation("Mcollide.png");
pipeImg= loadImage("pipe.png");
enemyImg1=loadImage("Mario_Enemy1.png");
enemyImg2=loadImage("Mario_Enemy2.png")

enemyImg3=loadImage("Mario_Enemy3.png")

}

function setup() {
	createCanvas(800, 700);
	
	

	


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
 
  drawSprites();
 
}

