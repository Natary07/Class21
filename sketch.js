var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1=createSprite(600,400,40,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(750,300,40,50);
  gameObject2.shapeColor="green";
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect)

  
  drawSprites();
}

