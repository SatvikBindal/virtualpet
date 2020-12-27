var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
}

function setup() {
  dogImg = loadImage("Dog.png");
  dogImg1 = loadImage("happydog.png");

	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.35

 // foodStock=database.ref('food');
  //foodStock.on('value', readStock);
}


function draw() {  

  drawSprites();
  background(46, 139, 87);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    // writeStocks(foodS);
     dog.addImage(dogImg1);
  }

drawSprites();
fill(255,255,254);
text ("Food remaining : "+ foodS,200,150);
stroke("red");
textSize(17);
text("Press up arrow key To Feed Max!",130,10,300,20);

/*strokeWeight()
stroke("red");

text("Food Remaining:" + foodS, 250,480);*/
}

function readStock(data){
foodS=data.val();
}

function writeStock (x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
})


}



