class rubber{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':5.0,
            'density':1
        }
        this.r=r
        this.body = Bodies.circle(x, y,r, options);
        World.add(world, this.body);
      }
      display(){

        var rubberpos=this.body.position;
        push();
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER);
        fill("green");
        ellipse( 0, 0, this.r);
        pop();
      }
}