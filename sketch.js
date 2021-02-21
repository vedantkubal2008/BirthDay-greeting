
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops =30;
var umbrella;

function preload(){
    //thunder1 = loadImage("images/thunderbolt/1.png");
    //thunder2 = loadImage("images/thunderbolt/2.png");
   bgimg = loadImage("Bg.png");
   teadyimg=loadImage("teadyBear.png")
   song=loadSound("birthsong.mp3");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);   
    engine = Engine.create();
    world = engine.world;
    song.play();
    teady=createSprite(windowWidth/1.3,windowHeight/2.5);
    imageMode("CENTER");
    teady.addImage(teadyimg);
    teady.scale=0.5;
  if (frameCount%100===0){
    for(var i =0;i<maxDrops;i++){
        drops.push(new Drops(random(0,1500),random(0,80)));
        drops.scale=0.15;
       
    }
    
}
//umbrella = new Umbrella(200,580,100);

}
function draw(){
    background(bgimg);
    Engine.update(engine);
    
    textSize(windowWidth/25);
    fill("  Yellow");
    textFont("Georgia");
    text("Surbhi",windowWidth/1.2,windowHeight/1.1);
    textSize(windowWidth/40);
    fill("Yellow");
    textFont("arial");
    text("From,",windowWidth/80,windowHeight/16);
    text("Dada,Aate & Kaka",windowWidth/20,windowHeight/7)
    for(var i =0;i<maxDrops;i++){
       
        drops[i].display();
        drops[i].update_y();
        
    }
   //Thunder();
    //umbrella.display();
  
    drawSprites();
    
}   
