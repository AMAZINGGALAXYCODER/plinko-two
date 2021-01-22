class Particle {
    constructor(x,y,r){
     var options ={
        isStatic: true
         
     } 
      this.r=r
 
      this.body=Bodies.circle(x,y,this.r,options);
     
      world.add(world,this.body);
 
    }
 
    display(){


        for (var j = 40; j <=width; j=j+50) 
        {
           plinkos.push(new Plinko(j,75))
        }
        
        for (var j = 15; j <=width-10; j=j+50) 
        {
            plinkos.push(new Plinko(j,175))
        }
 
     var pos = this.body.position;
     var angle = this.body.angle;
 
     push();
     translate(pos.x,pos.y);
     rotate(angle);
 
     noStroke();
     fill(this.color)
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
     pop();
    }
 
 
 }
