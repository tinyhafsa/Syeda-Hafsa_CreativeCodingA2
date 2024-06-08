//ACT 5 - Typography
//Design the BATH SPA UNIVERSITY word using your own font , random, and with different colors (outline - based) - design the background also

//VARIABLES
let font, font2; //fonts
let points = []; //points array
let points2 = []; //second points array
let boundsBathSpa; //bounds for the first string

//FUNCTION - to load fonts to variables
function preload() {
  font = loadFont("Roboto-Regular.ttf");
  font2 = loadFont("BirthstoneBounce-Regular.ttf");
}

//FUNCTION - setup
function setup() {
  createCanvas(windowWidth, windowHeight); //canvas size
  noLoop(); //to prevent continuous looping
  //color palette - for randomization
  palette = [
    color("#176B87"),
    color("#86B6F6"),
    color("#B4D4FF"),
    color("#EEF5FF"),
  ];

  //TEXT BOUNDS - for horizontal center alignment
  //first string
  let bounds = font2.textBounds("Bath Spa", 0, 0, 230);
  let textWidthBATHSPA = bounds.w;
  let xBATHSPA = (width - textWidthBATHSPA) / 2;
  //second string
  bounds = font.textBounds("UNIVERSITY", 0, 0, 120);
  let textWidthUniversity = bounds.w;
  let xUniversity = (width - textWidthUniversity) / 2;

  //TEXT TO POINTS
  //Getting textToPoints array for first string
  points = font2.textToPoints("Bath Spa", xBATHSPA, 300, 230, {
    sampleFactor: random(0.5, 1), //RANDOMIZATION - amount of points
  });

  //Getting textToPoints array for second string
  points2 = font.textToPoints("UNIVERSITY", xUniversity, 500, 120, {
    sampleFactor: 0.5,
  });

  //calculating bounds for rectangle behind text
  boundsBathSpa = font2.textBounds("Bath Spa", xBATHSPA, 300, 230);

  //CALLING FUNCTIONS
  drawBackgroundPattern(); //initial background
  drawText(); //initial text
}

//FUNCTION - to draw the background pattern
function drawBackgroundPattern() {
  background(250); //background color
  let space = 50; //space between grid
  //outer for loop - columns
  for (let x = 0; x < width; x += space) {
    //inner for loop - rows
    for (let y = 0; y < height; y += space) {
      fill(random(palette)); //RANDOM - color
      noStroke(); //no stroke
      ellipse(x, y, random(5, 25)); //ellipse
    }
  }
}

//FUNCTION - to draw the text
function drawText() {
  //RECTANGLE BEHIND TEXT - make text more visible
  fill(0); //color
  //rectangle - placed according to text bounds
  rect(
    boundsBathSpa.x - 25,
    boundsBathSpa.y - 25,
    boundsBathSpa.w + 70,
    boundsBathSpa.h + 150
  );

  //FOR LOOPS FOR TEXT POINTS
  //for loop to create first string
  for (let i = 0; i < points.length; i++) {
    noStroke();
    fill(random(palette)); //RANDOM - color of points
    ellipse(points[i].x, points[i].y, 10, 10); //ellipse drawn at point location
  }

  //for loop to create second string
  for (let i = 0; i < points2.length; i++) {
    noStroke();
    fill(random(palette)); //RANDOM - color of points
    ellipse(points2[i].x, points2[i].y, 10, 10); //ellipse drawn at point location
  }
}

//FUNCTION - mouse pressed
function mousePressed() {
  drawBackgroundPattern(); //change background on mouse press
  drawText(); //redraw text to keep it on top of new background
}
