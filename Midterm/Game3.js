var img;
var imgWidth;
var imgHeight; 
// PFont myfont;

function setup() {
  createCanvas(500, 400);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  // myfont = createFont("SF Pixelate", 50);
  // textFont(myfont);

  fill(255, 0, 0);
}

function draw() {
  imgWidth = 280;
  imgHeight = 280; 
  background(0);
  image(img, width/2, height/2, imgWidth, imgHeight);
  textSize(13);
  fill(255);
  text("(CLICK ME)", width/2, height/2);
  if (mouseIsPressed && 
    mouseX< ( width/2+ imgWidth/2) &&  mouseX> ( width/2 - imgWidth/2 ) &&
    mouseY< ( height/2+ imgHeight/2) &&  mouseY> ( height/2 - imgHeight/2 ) ) {
    filter(GRAY);
    fill(255, 0, 0);
    textSize(50);
    text("SO MANY LIKES", width/2, height/4);
    text("SO LITTLE LOVE", width/2, height*3/4);
  }
}