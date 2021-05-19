class Bob {
    constructor(x,y,r) {
var options ={
   isStatic:false,
   friction:0.2,
   density:0.6,
  restitution:0.7,
}
   this.x = x;
   this.y = y;
   this.r = r; 
   this.body = Bodies.circle(this.x,this.y,this.r/2 ,options)
   
   World.add(world,this.body)
    }
    display() {

    var pos = this.body.position;
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle);
    fill("lime");
    ellipseMode(CENTER)
    ellipse(0,0,this.r,this.r)
    pop()
   
    }
}