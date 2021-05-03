var bgImg,bg2Img,form,system,code,security;
var score=0;

function preload() {
 
  
  bgImg= loadImage("images/aladdin_cave.jpg")
  //load image for the treasure background
  bg2Img = loadImage("images/treasure.jpg");
  
}

function setup() {
  createCanvas(1500,800);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bgImg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 600, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2Img)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}