//Act 3 - Working with Images ii - Pointellism Effect
//Increase the transparency and change the shape. Use your own image.

var img, x, y; //declaring variables

//function to prelaod image
function preload() {
  img = loadImage("japan.jpg");
}

//canvas setup function
function setup() {
  createCanvas (500, 420); //canvas size
  background(0); //background color
  noStroke(); //no stroke
}

//draw function
function draw() {
  x = random(width); //random x co-ordinate from canvas width
  y = random(height); //random y co-ordiante from canvas height

  var c = img.get(x, y); //color of pixel at x and y positions
  
  //fill (v1, v2, v3, alpha/transparency)
  fill(c[0], c[1], c[2], 45); //fill - pixel color stored in rgb values, transparency 

  rect (x, y, 20, 20); //draws shape at x and y position
}