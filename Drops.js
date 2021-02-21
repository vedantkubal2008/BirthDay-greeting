class Drops{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0,
            density: 1,
            friction: 1.2,
        
        }
        //this.drops = [];
        this.body = Bodies.circle(x,y,0.04,options);
        this.image=loadImage("he.png");
        World.add(world,this.body);
        }
display(){
   
   
    //fill("Darkblue");
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x,this.body.position.y,5,5);
    image(this.image,this.body.position.x,this.body.position.y,50,50)
        }
    
update_y(){
    if (this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1500),y:random(0,80)})
    }
}}