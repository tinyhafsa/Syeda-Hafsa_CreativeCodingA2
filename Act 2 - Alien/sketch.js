//ACT 2 - Alien
//Create your own Alien. Make sure to use the beginShape(), endShape(), translate(), bezierVertex(), and the different shape modes and styles. Add functions (push, pop, scale, and rotate) in the activity. You can also put color of your own choice.

//FUNCTION - setup
function setup() {
  createCanvas(600, 450); //canvas size
}

//FUNCTION - draw
function draw() {
  background("#F3F7EC"); //background fill
  stroke(20, 108, 148); //stroke color

  //BODY
  fill(175, 211, 226);
  rect(175, 125, 258, 240, 20); //x, y, w, h, corner radius

  //ANTENNAS
  rect(241, 70, 15, 60);
  rect(347, 70, 15, 60);

  //EYES
  //Eye bases
  ellipse(247, 50, 60, 60);
  ellipse(354, 50, 60, 60);

  //Eye whites
  fill(255);
  ellipse(247, 50, 45, 45);
  ellipse(354, 50, 45, 45);

  //Eye blacks
  fill(0);
  ellipse(247, 50, 35, 35);
  ellipse(354, 50, 35, 35);

  //Eye highlights
  fill(255);
  ellipse(250, 45, 10, 10);
  ellipse(357, 45, 10, 10);

  //MOUTH
  push(); //stores styles for specific group of shapes
  line(225, 175, 380, 175); //top line
  fill(0);
  //drawing the mouth curve with bezier curve
  beginShape();
  curveVertex(225, 175); //start point x, y
  curveVertex(225, 175); //x, y
  curveVertex(260, 205); //x, y
  curveVertex(302, 215); //mid point - lowest x, y
  curveVertex(344, 205); //x, y
  curveVertex(380, 175); //x, y
  curveVertex(380, 175); //end point - x, y
  endShape();
  pop(); //restores previous styles

  //TEETH
  fill(255);
  triangle(250, 175, 265, 190, 280, 175);
  triangle(320, 175, 335, 190, 350, 175);

  //ARMS, HANDS
  push(); //stores styles for specific group of shapes
  fill(25, 167, 206);
  //arm
  beginShape();
  vertex(175, 225);
  vertex(175, 250);
  vertex(125, 275);
  vertex(125, 250);
  endShape(CLOSE);
  ellipse(125, 263, 35, 35); //hand

  //arm
  beginShape();
  vertex(433, 225);
  vertex(433, 250);
  vertex(483, 275);
  vertex(483, 250);
  endShape(CLOSE);
  ellipse(483, 263, 35, 35); //hand
  pop(); //restores previous styles

  //BELT
  fill(25, 167, 206);
  rect(175, 290, 258, 25);

  fill(0);
  ellipse(300, 302, 50, 50);

  fill(25, 167, 206);
  ellipse(300, 302, 30, 30);

  //LEGS
  fill(25, 167, 206);
  rect(256, 365, 25, 50);
  rect(322, 365, 25, 50);

  //FEET
  ellipse(256, 415, 50, 35);
  ellipse(347, 415, 50, 35);
}
