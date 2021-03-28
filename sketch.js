
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

    planeobject=new plane(600,height,1200,20);
	ironobject=new iron(300,350);
	hammerobject=new hammer(10,100);
	rubbrobject=new rubber(900,450,70);
	stoneobject=new stone(700,320,100,100);

	
	//Create the Bodies Here.



  
}


function draw() {
  background("lightblue");
  Engine.update(engine)
 stoneobject.display();
 rubbrobject.display();
 ironobject.display();
 hammerobject.display();
 planeobject.display();
 
}



