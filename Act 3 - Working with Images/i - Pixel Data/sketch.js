//ACT 3 - Working with Images i - Image pixel data
//Instead of an ellipse, use another shape. Use your own image.

//declaring image, position x and position y variables
var img, posX, posY;

//function to call image variable to preload image
function preload() {
  img = loadImage("japan.jpg");
}

//setup function
function setup() {
  createCanvas (500, 420);
  background(0);
  noStroke();
}

//draw function
function draw() {
  background(0); //background fill
  cursor(CROSS); //cursor shape
  
  posX = mouseX; //assigning mouseX position to varaible
  posY = mouseY; //assigning mouseY position to variable
  image(img, 0, 0); //loading image
  
  var c = get (posX, posY); //declaring variable to get pixel data of mouse position
  
  fill (c); //filling shape with pixel data color
  stroke (0); //applying stroke
  rect (posX, posY, 50, 50); //shape
}