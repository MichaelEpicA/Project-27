class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution:1.2,
            friction:0.4,
            density:3
        }
 
        this.x = x;  
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,radius/2,options)
        World.add(world,this.body);
    }
    display() {
     push();    
     translate(this.body.position.x, this.body.position.y);
     fill("purple");
     rotate(this.body.angle);
     ellipseMode(CENTER);
     ellipse(0,0,this.radius,this.radius);
     pop();
    }
 }
 