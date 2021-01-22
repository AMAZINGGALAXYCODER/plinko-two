var Engine = Matter.Engine;
World= Matter.World;
Bodies = Matter.Bodies;

var engine
var world

var score

var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight=300;

function setup () {
  createCanvas(480,800) 
  engine = Engine.create();
  world = engine.world();
  ground = new Ground(600,height,1200,20);
}

function draw() {
  text("SCORE :"+score,750,40);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
 background(0);
 Engine.update(engine);
 ground.display();
}