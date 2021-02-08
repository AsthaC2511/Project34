//Create variables here
var dog,happyDog;
var database;
var foodS,foodSock

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500,500);

  dog=createSprite(250,280);
  dog.addImage(dogImg);
  dog.scale=0.3;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
   
  drawSprites();
  //add styles here

  textSize(15);
  fill(255);
  stroke(2);
  text("Note: UP_ARROW Key To Feed The Dog Milk",80,50);
  text("Food Remaining:"+foodS,190,150);

  



}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  });
}



