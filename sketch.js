//declaring physics engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//local objects
var engine,world,ground; 
var ball;
var box1;
var helicopter;

function setup() {
  createCanvas(400,400);

 //adding their objects so we could use them in our program.
 engine = Engine.create();
 world = engine.world;
 
 //giving properties to ground object
 var ground_options={
   isStatic : true
 }
 var helicopter_options={
     isStatic : true
 }
 var box1_options={
    isStatic : true
 }
 //creating the ground object with Bodies. 
 ground = Bodies.rectangle(200,390,200,20,ground_options);
 box1 = Bodies.rectangle(150,300,100,50,box1_options);
 helicopter = Bodies.rectangle(100,250,70,helicopter_options);

 //adding ground to World.
 World.add(world,ground);
 World.add(world, box1);
 World.add(world,helicopter);

 //creating the ball object
   var ball_options={
       restitution: 1.0
   }  

   ball = Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);


}

function draw() {
  background(0);  

  //updating the Engien with local object engine.
  Engine.update(engine);
 
  //display the ground
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  rect(box1.position.x,box1.position.y,400,10);

  rectMode(CENTER);
  rect(helicopter.position.x,helicopter.position.y,400,10);
  //display ball 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

  drawSprites();
}