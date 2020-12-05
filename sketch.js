//Create variables here
var pet,petImage
var foods=25
var database,pet
function preload()
{
  //load images here
  petImage=loadImage("images/dog.png")
  pethappy=loadImage("images/doghappy.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
 
  pet=createSprite(250,250)
  pet.addImage(petImage)
  pet .scale=0.1
 
  var childloc =database.ref("food");
  childloc.on("value",readop,showerr)
}


function draw() {  
  background(46,139,87)
  if (keyDown("DOWN_ARROW")){
    writestock(foods);
    pet.addImage(pethappy)
    pethappy.scale=0.1

  }

  drawSprites();
  //add styles here
  stroke ("black")
  fill ("black")
text("press DOWN ARROW to feed the dog", 200,100)
text("FOOD REMAINING: "+foods,200,150)
}
function writestock(x){

  if(x<0){
    x=0
    }
    else{
    x=x-1
    }
    database.ref("/").update({
      food:x
    })
 
}



function readop(data){

  foods=data.val()

}
function showerr(){
console.log("error")


}
