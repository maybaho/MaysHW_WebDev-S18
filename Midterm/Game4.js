var snakesize;  //size of the snake 
var myFont;
//SPEED 
//int speed;         
var xspeed, yspeed; 
var headx =[]; 
var heady =[];  

function setup () {
  createCanvas(600, 600); 
  background(0);

  headx[0] = 250; 
  heady[0] = 250; 
  xspeed=0;     
  yspeed=0;

  drawSnake();
} 

function draw () { 
  background (0); 
  textSize(10);
  text("(USE ARROW KEYS)", width*2/5, height*7/8);
  fill(0, 255, 0);
  drawSnake(); 
}


function keyPressed() { 
  // ARROW KEYS PRESSED. 
  // RIGHT & LEFT HAND CONTROLS. 

  if (keyCode===UP_ARROW){ 
    xspeed=0; 
    yspeed=-2;
  } 
  else if (keyCode===DOWN_ARROW) { 
    xspeed=0; 
    yspeed=2;
  } 
  else if (keyCode===LEFT_ARROW) { 
    xspeed=-2; 
    yspeed=0;
  } 
  else if (keyCode===RIGHT_ARROW) { 
    xspeed=2; 
    yspeed=0;
  }
} 


function drawSnake() {
  snakesize = 40; 

  headx[0]=headx[0]+xspeed; 
  heady[0]=heady[0]+yspeed; 

  for (var i=0; i < snakesize; i++) { 
    //tail  
    noStroke();
    fill(0, 255, 0); 
    rectMode(CENTER); 
    rect(headx[i], heady[i], 15, 15);
	}
	
	for (var i = snakesize; i > 0; i--) { 
    headx[i] = headx[i-1]; 
    heady[i] = heady[i-1];
   }

   if (heady[i]>height || heady[i]<0 || headx[i]>width || headx[i]<0) // paremters of hitting borders
    {
      gameOver();
    }
}

function gameOver() {
  background(0); // turns background black
  textSize(30); //size of text
  textSize(20);
  text("' Winning and losing isn't everything. Sometimes", width/9, height*2/10);
  text("the journey is just as important", width/9, height*3/10);
  text("as the outcome. '", width/9, height*4/10);
  text("        -Alex Morgan", width/2, height*5/8);
  }