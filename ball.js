class ball {
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:10,
            density:14.6,
        }
       // this.image=loadImage("sprites/paper.png");
       this.image=loadImage("paper(1).png");
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        
        World.add(world,this.body);
        

    }

    display(){
         var pos=this.body.position;
        
         push();
         translate(pos.x,pos.y);
       
       // rectMode(CENTER);
       // fill("pink");
       // rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
         pop();
    }

}