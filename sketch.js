const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,40,500,20)
	bobobject1 = new Bob(200,470,100)
	bobobject2 = new Bob(300,470,100)
	bobobject3 = new Bob(400,470,100)
	bobobject4 = new Bob(500,470,100)
	bobobject5 = new Bob(600,470,100)
  rope1= new Rope(roof.body,bobobject1.body,-100*2,0);
  rope2= new Rope(roof.body,bobobject2.body,-50*2,0);
  rope3= new Rope(roof.body,bobobject3.body,-0*2,0);
  rope4= new Rope(roof.body,bobobject4.body,50*2,0);
  rope5= new Rope(roof.body,bobobject5.body,100*2,0);

	
}


function draw() {
  rectMode(CENTER)
  background("yellow")
     
  roof.display();
  bobobject1.display();
  bobobject2.display()
  bobobject3.display()
  bobobject4.display()
  bobobject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobobject1.body,{x:-50,y:-50});
   } 
} 
