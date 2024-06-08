//ACT 1 - Car
//Create your own car using different shape modes and styles. You can color according to your preference.

//size of canvas
function setup() {
  createCanvas(400, 400); //should be capitalized, else there'll be an error
  noStroke(); //removes strokes
}

//area of drawing
function draw() {
  background(220); //if there's one value, then the color is white
  //three colors show RGB values
  
  //MAKING A CAR
  
  //body of the car
  //color
  fill (255, 205, 210);
  //rectangle function - rect (x, y, width, height)
  rect (50, 200, 300, 70); //values of sizes are placed inside
  rect (100, 130, 200, 70);
  
  //windows
//rectangle inside rectangle
  fill ("#FFF7FC");
  rect (120, 140, 70, 50);
  rect (210, 140, 70, 50);
  
  //headlights
  fill (229, 115, 115);
  rect (50, 200, 20, 20);
  rect (330, 200, 20, 20);
  
  //wheels
  fill (0, 0, 0); 
  //ellipse (x, y, width, height) - width and height should be same to make a circle
  ellipse (100, 270, 50,50); 
  ellipse (300, 270, 50, 50);
  
  //circle inside circle - x, y values should be same - values must be smaller
  fill (220);
  ellipse (300, 270, 20, 20);
  ellipse (100, 270, 20, 20);
}