//Create variables here
var dog,dogHappy,database,foodS,foodStock;

function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
  
	//load images here
}

function setup() {
  database = firebase.database();

  createCanvas(500,500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogHappy);
  dog.scale = 0.2;
  foodStock = database.ref('food');
  foodStock.on('value', readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    }


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
  x = 0;
  }
  else{
    x = x -1;
  }
  database.ref('/').update({
  Food : x

  })
}

