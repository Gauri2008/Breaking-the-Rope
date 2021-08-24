class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 
    detach(){
      //We are removing fruit constraint from World simulation.
      World.remove(engine.world, this.link);
    }

}
//Notes:
//We are going to access the position.x and y of bodyB only until the constraint is attached with the bodyA
