class Block3{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.3,
          'friction':0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      //this.x = x;
      //this.y = y;
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }

    display(){

      if (this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        fill("#793fcf");
        rect(0, 0, this.width, this.height);
        pop();

      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        pop();
      }
    }

    score(){
      if(this.visibility < 0 && this.visibility > -1005){
        score++;
      }
    }
}