var x, y, speedX, speedY, diam, rectSize;

var myFont;

function setup() { 
  createCanvas(600, 600);
  x = width/4;
  y = height/4;
} 

function draw() { 
  background(0);

  diam = 30;
  rectSize = 100;
  background(0);
  noStroke();
  rect(0, 0, width, 20);
  rect(width-20, 0, 20, height);
  rect(0, height-20, width, 20);
  rect(width-100, mouseY-rectSize/2, 30, rectSize);
  textSize(10);
  fill(255);
  text('(CLICK TO RESTART)', width*2/5, height*5/6);
  drawRect();


  if ( x > width-115 && (x < width -70) && (y > mouseY-rectSize/2) && (y < mouseY+rectSize/2) ) {
    speedX = random(-3, -5);
    speedY = random(-3, 5);
    drawRect(); 

  } 


  if ( (y > height-35) || y < 20 ) {
    speedY = random(-3, -5);
	speedX = random(3, 5);
    drawRect();

  }

  if ( x < 0 || x > width ) {
    gameOver();
  }

  if (mouseIsPressed) {
  	reset();
  }

}

function reset() {
  x = width/4;
  y = height/4;
  speedX = random(3, 5);
  speedY = random(3, 5);
}


function gameOver() {
  background(0);
  textSize(30);
  fill(255);
  text("' If you love something,", width/6, height/5);
  text("set it free ' ", width/6, height*2/7);
  textSize(25); 
  text("-Richard Bach", width/2, height*3/7);
  textSize(10);
  text("(CLICK TO RESTART)", width*2/5, height*5/6);
}

function drawRect() {
	x = x + speedX;
  	y = y + speedY;
 	rect(x, y, 30, 30);
}
