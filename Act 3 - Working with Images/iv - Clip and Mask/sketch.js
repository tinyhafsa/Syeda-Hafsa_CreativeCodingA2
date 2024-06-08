//Act 3 - Working with Images iv - Clip and Mask
//Clip and Mask functions

var img; //variable to hold image

//function to load image into variable
function preload () {
  img = loadImage ('blossom.jpg');
}

//setup function
function setup() {
  createCanvas(600, 400); //canvas size
  background("#fff6db"); //background color
  
  //image inside shape, using clip function - works with one image
  img.resize(350,250); //image resized
  let canvas1 = createGraphics(250,300); //new graphics canvas created, named canvas1
  canvas1.square(0,0,170);//x, y, size - square created inside new canvas
  canvas1.canvas.getContext("2d").clip(); //clip function - clip area outside square
  canvas1.image(img,-100,-60); //image drawn to canvas1 and repositioned according to mentioned x,y co-ordinates
  image(canvas1,60,110); //canvas1 is displayed on main canvas using image function at mentioned x,y co-ordinates
  

    //image inside shape, using mask function - works with multiple shapes
  img.resize(300,300); //resizing the image
  let canvas2 = createGraphics(300, 300); //new graphics canvas created, named canvas2
  canvas2.circle(145, 80,120); //x, y, size - circle created inside new canvas
  canvas2.circle(75, 165,120); //x, y, size - circle created inside new canvas
  canvas2.circle(145, 235, 120); //x, y, size - circle created inside new canvas
  canvas2.circle(220, 165, 120); //x, y, size - circle created inside new canvas
  canvas2.square(60, 80, 170); //x, y, size - square created inside new canvas
  img.mask(canvas2); //mask function called - applies drawn shapes as masks to the image
  image(img, 270, 30); //canvas2 is displayed on main canvas using image function at mentioned x,y co-ordinates
}