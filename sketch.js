
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgImg,mario,runningMario,collidedMario,enemy,pipeImg,pipe;
var back,cImg,castle,brickImg,brick,flagImg,flag
function preload()
{
bgImg= loadImage("bg.jpg");
runningMario=loadAnimation("m1.png","m2.png","m3.png");
collidedMario=loadAnimation("Mcollide.png");
pipeImg= loadImage("pipe.png");
enemyImg1=loadImage("Mario_Enemy1.png");
enemyImg2=loadImage("Mario_Enemy2.png")
flagImg=loadImage("Mario_Flag.png")

enemyImg3=loadImage("Mario_Enemy3.png")
cImg=loadImage("castle.png")
brickImg=loadImage("brick1.png")

}
var rand,wall,rand1,enemyGroup
function setup() {


	createCanvas(displayWidth, displayHeight);
	
	rand=Math.round(random(500,4000))
	rand1=Math.round(random(400,4000))
	// back= createSprite(displayWidth/2,displayHeight/2,width*6,height)
	// back.addImage(bgImg)
	invisibleG= createSprite(50,displayHeight-100,width*20,10);
	invisibleG.visible= false
	mario= createSprite(100,100,20,20);
	mario.addAnimation("running",runningMario);
	mario.addAnimation("collide",collidedMario);

	brick= createSprite(rand1, random(displayHeight/2-200,displayHeight/2+100),100,10)
	brick.addImage(brickImg)
	brick.debug= true
	brick.setCollider("rectangle",0,0,700,180)
	brick.scale=0.5
	enemyGroup= new Group();
	
// if(frameCount % 200 === 0){
// 	enemy= createSprite(i,displayHeight-180)
// 	enemy.addImage(enemyImg1);
// 	enemy.scale=0.4
// }
pipe= createSprite(rand,displayHeight-200)
pipe.addImage(pipeImg)
pipe.debug=true
pipe.scale=0.4
pipe.setCollider("rectangle",0,20,220,350)

	wall = createSprite(3000,displayHeight/2,20,height)
	wall.visible= false
	castle= createSprite(10000,displayHeight-300,10,10)
	castle.addImage(cImg);

	flag= createSprite(10000,displayHeight-350,10,10)
	flag.addImage(flagImg)
	flag.debug=true
	flag.setCollider("rectangle",50,0,10,700)

    

	//pipe.debug=true
	mario.debug=true
	//enemy.debug=true
	//pipe.setCollider("rectangle",0,0,100,100)
	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
  
}


function draw() {
	imageMode(CENTER)
	image(bgImg,displayWidth/2,displayHeight/2,width*15,displayHeight)

  textSize(30)
  text(mouseX+","+mouseY,mouseX,mouseY)
 
if(mario.isTouching(flag)){
	showWin()
}

if(keyDown("right")){
	mario.x= mario.x+ 55;
}
mario.velocityY= mario.velocityY +0.8

mario.collide(invisibleG);
camera.position.y= displayHeight/2;
camera.position.x= mario.x

createEnemy();

if(mario.x === 4000){
	mario.setVelocity(0,0)
}

if(keyDown("left")){

mario.x -= 55
}
if(mario.isTouching(pipe)){
	mario.changeAnimation("collide",collidedMario);
	
}
if(keyDown("up")){
	mario.velocityY=-15
}
mario.velocityY= mario.velocityY +0.8
mario.collide(pipe);
mario.collide(wall);
mario.collide(brick);
mario.collide(flag)
console.log(mario.x)
  drawSprites();
 

}

function showWin(){
	mario.velocityX=0;
	mario.velocityY=0;
	textSize(100);
	text("Winner ",camera.position.x,100)
}

function createEnemy(){
	if(frameCount % 150 === 0){
		var enemy = createSprite(camera.position.x+500,displayHeight-150);
		var rand=Math.round(random(1,2))
		switch(rand){
			case 1: enemy.addImage(enemyImg1)
					break;
			case 2: enemy.addImage(enemyImg2)
					break;
			default: break;
		}

		enemy.velocityX=-2;
		enemy.scale=0.4;
		enemy.lifetime=displayWidth/2
		enemyGroup.add(enemy)
	

	}
}
