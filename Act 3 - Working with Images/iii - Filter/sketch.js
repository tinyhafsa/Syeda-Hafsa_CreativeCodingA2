//ACT 3 - Working with Images iii - Filter
//Do 1 filter with mouse interaction. Use your own image

var img; //variable to hold image

//image loaded into variable
function preload() {
  img = loadImage("japan.jpg");
}

//setup funtion 
function setup () {
  createCanvas (600, 350);
  background(0);
}

//draw function
function draw() {
  background(0); //background fill
  cursor (CROSS); //cursor shape
  
  image(img, 0, 0); //image
  
  //map (x position of mouse, range (0, width) to range (0, 10))
  var v = map(mouseX, 0, width, 0, 10); //maps horizontal position of mouse and stores it in variable v
  
  filter(BLUR, v); //applies blur filter, with intensity controlled by v
}