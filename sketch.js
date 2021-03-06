const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygon_img;

function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,390,1200,20);
  stand1 = new Ground(390,315,270,10);
  stand2 = new Ground(810,185,200,10);

  //level 1: stand 1
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);

  //level 2: stand 1
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12= new Box(450,235,30,40);

  //level 3: stand 1
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //level 4: stand 1
  block16 = new Box(390,155,30,40);

  //level 1: stand 2 
  block17 = new Box(750,145,30,40);
  block18 = new Box(780,145,30,40);
  block19 = new Box(810,145,30,40);
  block20 = new Box(840,145,30,40);
  block21 = new Box(870,145,30,40);

  //level 2: stand 2
  block22 = new Box(780,105,30,40);
  block23 = new Box(810,105,30,40);
  block24 = new Box(840,105,30,40);

  //level 3: stand 2
  block25 = new Box(810,65,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(56,44,44);  
  Engine.update(engine);


  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();


  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}



