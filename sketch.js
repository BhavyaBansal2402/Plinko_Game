const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var B1,B2,B3,B4;

var particles = [];
var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var plinko4 = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,height,480,10);

  B1 = createSprite(0, 400, 10, 800);
  B2 = createSprite(480, 400, 10, 800);
  B3 = createSprite(240, 0, 480, 10);
  B4 = createSprite(240, 800, 480, 10);

  B1.shapeColor = "DarkRed";
  B2.shapeColor = "DarkRed";
  B3.shapeColor = "DarkRed";
  B4.shapeColor = "DarkRed";

  
}

function draw() {
  background(0);  
  drawSprites();
}