 const  Engine = Matter.Engine ;
 const  World = Matter.World ;
 //const  Events = Matter.Events ;
 const  Bodies = Matter.Bodies;
  
var snowImg , snow ;
var ice = [];
var ice , iceImg ;


function preload(){
  snowImg = loadAnimation("snow1.jpg");
  iceImg = loadAnimation("snow4.webp");
}
function setup() {
 createCanvas(800,400);
 engine = Engine.create();
 world = engine.World;

 snow = createSprite(400, 250, 100, 100);
 snow.addAnimation("snows",snowImg);
 snow.scale = 1.6
 ice = createSprite(400, 250, 10, 10);
 ice.addAnimation("s",iceImg);
 ice.scale = 0.07 ;
  
 for(var k = 70 ; k <=width; k=k+45){
   ice.push(new ices(k,70));

 }
}

function draw() {
  background("black");
  Engine.update(engine);

  for (var k = 0; k < ice.length; k++) {
   ice[k].display();   
   
  }
  drawSprites();
}

