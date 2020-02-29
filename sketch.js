const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var Pig2
var ground1;
var Pig1;
var Log1;
var Log2;
var Log3;
var Log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Log1=new Log (800,260,300,PI/2)
    Log2=new Log (800,200,300,PI/2)
    Log3=new Log (760,120,150,PI/7)
    Log4=new Log (870,120,150,-PI/7)
   
    Pig1=new Pig(800,300,50,50)
    Pig2=new Pig(800,240,50,50)
    box1 = new Box(900,300,70,70);
    box2 = new Box(700,300,70,70)
    box5 = new Box(800,180,70,70)
    box3 = new Box(900,240,70,70);
    box4 = new Box(700,240,70,70)
    ground1=new ground(600,380,1200,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    Pig1.display();
    Log1.display();
    Log2.display();
    Log3.display();
    Log4.display();
    
    Pig2.display();
    ground1.display();
}