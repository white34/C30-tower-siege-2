
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10,box11, box12;
var box13, box14, box15;
var box16;
var slingshot;
var shelf1, shelf2, ground;
function preload()
{
polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
  world = engine.world;
  
  ground = new Shelf(800, 700, 1600, 40);

  shelf1 = new Shelf (400, 300, 200, 20);
  shelf2 = new Shelf(600, 150, 200, 20);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(360, 155, 30, 40);
  box10 = new Box(395, 155, 30, 40);

  box11 = new Box(600, 120, 30, 40);
  box12 = new Box(595, 100, 30, 40);
  box13 = new Box(595, 120, 30, 40)

 ball = Bodies.circle(50, 200, 20);
 World.add(world, ball);
 


  slingshot = new SlingShot(this.ball,{x:100, y:200});

  Engine.run(engine);
}


function draw() {
 
  background(0);

//display boxes
box1.display();
box2.display();
box3.display();
box4.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
shelf1.display();
shelf2.display();

box11.display();
box12.display();
box13.display();

ground.display();
  imageMode(CENTER)
  image(polygonImg, ball.position.x, ball.position.y, 40, 40);

  drawSprites();
 
}

function mouseDragged()
{
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}) ;
}
function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(this.ball);
    }
}
