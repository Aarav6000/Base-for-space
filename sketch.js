var texter, yy;

function preload(){
  yy = loadImage("Resource/Invade.gif");
}

function setup() {
  createCanvas(700,500);
  tester = createSprite(350, 250);
  tester.addImage(yy);
}

function draw() {
  background(0, 4, 90);
  showMouse(75, 25, "p", true);

  drawSprites();
}