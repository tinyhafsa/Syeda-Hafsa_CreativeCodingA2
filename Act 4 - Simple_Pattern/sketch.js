//ACT 4 - Simple Pattern
//Create your own  pattern with the use of for loop and if statements  that shows repetition, decision and  randomization 

let spaceX = 25; //horizontal spacing b/w columns
let spaceY = 25; //vertical spacing b/w rows
let d = 25; //size

//setup function
function setup () {
  createCanvas (windowWidth, windowHeight); //canvas size
  noStroke (); //no stroke
  
  palette1 = [color ("#0C2D57"), color ("#FC6736"), ] //palette created with array
  palette2 = [color("#FFB0B0"), color ("#EFECEC")] //palette created with array
  
  noLoop (); //to prevent the loop continuing forever
  pattern(); //calling the pattern function once when the code is run
}

function draw () {
  //left empty because another function is used to create pattern
}

//function to create pattern
function pattern() {  
  
  //REPETITION
  //outer for loop - y is initialized to zero and increases in increments of 25 (spaceX) - loop will run as long as x is less than width 
  for (let x = 0; x <= width ; x += spaceX) {
    
    //inner for loop - y is initialized to zero and increases in increments of 25 (spaceY) in every initialization - loop will run as long y is less than or equal to height
    for (let y = 0; y <= height; y+= spaceY) {
      
      //get column number
      let col = x/spaceX;
      
      //get row number
      let row = y/spaceY;
      
      //DECISION
      //if column and row numbers are divisible by 3, fill a random color from the first palette
      if (col % 3 == 0 && row % 3 == 0) {
        fill (random(palette1)); //RANDOMIZATION
        
        //if the column and row numbers are divisible by 2, fill a random color from the second palette
      } else if (col % 2 ==1 && row % 2 == 1) {
        fill (random(palette2)) //RANDOMIZATION
        
        //else fill with white
      } else {
        fill (255);
      }
      
      //boxes made at positions x and y set by the loop, sized 25
      rect (x, y, d)
    }
  }
}

//mousepressed function
function mousePressed() {
  //if mouse is pressed, pattern function is run again and new pattern is produced
  pattern();
}

//keypressed function
function keyPressed() {
  //if the s key is pressed
  if (key === 's' || key === 'S') { 
    //canvas is saved as a png with the title 'Simple Pattern'
    saveCanvas('Simple Pattern', 'png');   // Save the canvas with the name 'myCanvas' as a PNG file
  }
}