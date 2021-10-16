
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall;
var ball1;
var fan;
var angle = 30
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var fan_options = {
    isStatic: true
  }
  var ball1_options = {
    restitution: 0.25,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var rocks_options = {
    restitution: 0.75,
  }
  var wall_options = {
    isStatic: true
  }
rock = Bodies.circle(300, 20, 10, rocks_options);
World.add(world, rock)
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  wall = Bodies.rectangle(300,200,400,20,wall_options);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(250,70,20,ball1_options);
  World.add(world,ball1);
  fan = Bodies.rectangle(100, 200, 100, 20, fan_options);
World.add(world, fan) 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,20)
  rect(wall.position.x,wall.position.y,400,20);
  ellipse(ball1.position.x,ball1.position.y,20)
  Matter.Body.rotate(fan, angle);
  push();
  translate(fan.position.x, fan.position.y)
  rotate(angle);
  rect(0,0,400,20);
  pop();
  angle+=0.1;
}

