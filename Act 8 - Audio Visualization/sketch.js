//ACT 8 - Audio Visualization
//Create 1 audio visualization depending on your choice whether the sound is from preloaded sound or using the mic. Put some designs of your work.

//VARIABLES
let song;
let amp;
let fft;

//FUNCTION - preload
function preload() {
  //loading song into variable
  song = loadSound("memory reboot.mp3");
}

//FUNCTION - setup
function setup() {
  createCanvas(windowWidth, windowHeight); //canvas size
  background(225); //background color
  rectMode(CENTER); //aligning object to center
  noStroke(); //no stroke

  //color palette
  palette = ["#003C43", "#135D66", "#77B0AA", "#E3FEF7"];

  //button - styled in css (hidden)
  play = createButton(""); //button created
  play.position(width / 2 - 32, height / 2 - 32); //positioned in center
  play.mousePressed(togglePlaying); //calls function when mouse is pressed

  //song plays
  song.play();
  song.setVolume(0.7); //song volume

  //AMPLITUDE measures volume between 0 and 1
  amp = new p5.Amplitude();
  //FFT isolates individual audio frequencies in waveform
  fft = new p5.FFT();
}

//FUNCTION - togglepPlaying
//caled when circle at center is clicked
function togglePlaying() {
  //if the song is playing
  if (song.isPlaying()) {
    song.pause(); //song will be paused when the button is clicked
  } else {
    //or else
    song.play(); //song will play when button is clicked
  }
}

//FUNCTION - draw
function draw() {
  background(240, 25); //background - fill, transperancy
  fill("#135D66"); //text color
  //text string (song artists, name) and position (centered at top)
  text("VØJ, Narvent - Memory Reboot", width / 2, 20, 200);

  //WAVE
  //returns array of amplitude value between -1 and +1 and assigns it to variable
  let waveform = fft.waveform();
  //for loop to draw wave design
  for (let i = 0; i < waveform.length; i++) {
    //remap i - between [0, length] and [0, width] - assigned to x
    let x = map(i, 0, waveform.length, 0, width);
    //remap waveform[i] - between [-1, 1] and [height, 0] - assigned to y
    let y = map(waveform[i], -1, 1, height, 0);
    fill(random(palette)); //random color from palette for circle
    circle(x, y, 2); //x, y, size
  }

  //CIRCLE - shown when audio is paused
  fill("#77B0AA"); //fill
  ellipse(width / 2, height / 2, 30); //centered, size

  //CIRCLE DESIGN
  //gets a single amplitude reading and assigns it to variable - run in loop
  let level = amp.getLevel();
  //remap level - between [0, 1] and [0, half of width] - assigned to size variable
  let size = map(level, 0, 1, 0, width / 2);

  fill(random(palette)); //random color fill from palette
  circle(width / 2, height / 2, size); //centered, size depending on amplitude level
}
