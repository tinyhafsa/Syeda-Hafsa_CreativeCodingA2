//Act 3 - Working with Images v - Clip with Text
//Clip with Text

let img, font; //declaring variables to hold image, font

function preload () {
  img = loadImage ("lotus.jpg") //preloading image to variable
  font = loadFont ("SeymourOne-Regular.ttf") //preloading font to variable
}

//setup function
function setup() {
  createCanvas(600, 450); //canvas size
  background (img); //background image

  canvas1 = createGraphics(width, height); //new graphics canvas
  canvas1.textFont(font); //font preload applied to canvas1 text
  canvas1.fill(255);  //canvas1 color
  canvas1.rect(50, 120, 500, 200);  //x , y, width and height 
  canvas1.erase(); //erase funtion called
  canvas1.textSize(120); //text size
  canvas1.text('lotus', 80, 270); // string, x, y - text to be erased
  image(canvas1, 0, 0); //canvas1 is drawn using image funtion at co-ordinates
}