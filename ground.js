class Ground{
    constuctor(x,y,width,height){

var options={
    isStatic:true
    }

this.body=bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

this.width=width
this.height=height





    }


display()
{
  push ()
    fill("brown")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop ()
}





}