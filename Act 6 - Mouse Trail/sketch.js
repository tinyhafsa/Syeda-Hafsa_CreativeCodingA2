//ACT 6 - Mouse Trail
//Create your own mouse interaction trails with different colors that depends on your preference and has the save option.
//add option to switch colors - DONE

//VARIABLES
var d = 50; //variable for curser to start offscreen
let trails = []; //mouse trail array

//FUNCTION - setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  //COLOR - color picker with default color
  myPicker = createColorPicker("#4955A2");
  //color picker position
  myPicker.position(10, 10);

  mouseX = -d; //mouse starts offscreen
  mouseY = -d; //mouse starts offscreen
}

//FUNCTION - draw
function draw() {
  background(240); //background fill
  noCursor(); //no cursor

  let c = myPicker.color(); //assigning picker color to variable

  trails.push(createVector(mouseX, mouseY)); //adding vector to empty array

  //disappearing effect - if array gets 100 points long,
  if (trails.length > 100) {
    trails.shift(); //removes first elements from array
  }

  //FOR LOOP -
  for (let i = 0; i < trails.length; i++) {
    //if mouse is pressed
    if (mouseIsPressed) {
      //trail with squares
      fill(c);
      //x and y according to array
      rect(trails[i].x, trails[i].y, random(5, 20));
    } else {
      //if mouse is not pressed
      //trail with ellipses
      noStroke();
      fill(c);
      //x and y according to array
      ellipse(trails[i].x, trails[i].y, random(5, 20));
    }
  }
}

//FUNCTION - save with keyPressed
function keyPressed() {
  //if s key is pressed
  if (key == "s") {
    saveCanvas("mouseTrail", "png"); //canvas is saved with name in png format
  }
}
