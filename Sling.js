class Sling{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
     this.sling = constraint.create(options);
     world.add(world, this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
