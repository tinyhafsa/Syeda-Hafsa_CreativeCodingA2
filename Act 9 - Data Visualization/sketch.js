//ACT 9 - Data Visualization
//Create a data visualization using csv file. It must be factual/true data.

//Data taken from table in section - https://en.wikipedia.org/wiki/Demographic_history_of_Japan_before_the_Meiji_Restoration#Total_population

//VARIABLES
let table;
let font;

//FUNCTION - preload
function preload() {
  //load font into variable
  font = loadFont("Roboto-Regular.ttf");
  //load table into variable
  table = loadTable("population.csv", "csv", "header");
}

//FUNCTION - setup
function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  //assigning font
  textFont(font);
}

//FUNCTION - draw
function draw() {
  background("#EFECEC"); //background fill

  //TITLE
  fill("#0C2D57");
  textAlign(CENTER); //center aligned
  textSize(25); //text size
  text(
    "Estimated population of Japan - 400AD to 1700AD (by Biraben, 2005)",
    width / 2,
    20
  ); //text string, position

  //VARIABLES
  let numRows = table.getRowCount(); //getting number of rows in table
  let population = int(table.getColumn("Population")); //getting population values and converting to integers
  let people = table.getColumn("Population"); //getting population values as strings
  let years = table.getColumn("Year").map(Number); //getting year as number
  let margin = 50;

  let maxPopulation = max(population); //getting highest population value
  let scaleFactor = (windowWidth - margin * 10) / maxPopulation; //scale factor for horizontal lines
  let barHeight = 30; //bar height

  //draw the grid
  stroke("#FFB0B0");
  //FOR LOOP - horizontal grid lines
  for (let i = 0; i < numRows; i++) {
    let y = margin + i * (barHeight + 10) + barHeight / 2;
    line(margin * 4, y, windowWidth - (margin * 4), y);
  }

  //Y - AXIS
  fill("#0C2D57");
  textSize(18);
  textAlign(CENTER);
  //axis title, position
  text("Population per Year (AD)", margin - 20, height / 2, 120);
  stroke("#0C2D57");
  line(margin * 4, margin, margin * 4, 15 * (barHeight + 10) + 15);

  //X - AXIS
  line(
    margin * 4,
    15 * (barHeight + 10) + 15,
    windowWidth - (margin * 4),
    15 * (barHeight + 10) + 15
  );

  //draw the bars
  for (let i = 0; i < numRows; i++) {
    //variables storing size, position of bars
    let x = margin * 4;
    let y = margin + i * (barHeight + 10);
    let w = population[i] * scaleFactor; //width depending on population
    let h = barHeight;

    //BARS
    noStroke();
    fill("#FC6736");
    rect(x, y, w, h);

    //POPULATION values
    fill("#0C2D57");
    textSize(15);
    text(people[i], x + w + 70, y + h / 2, 20);

    //YEAR LABELS - y-axis
    textAlign(RIGHT, CENTER);
    text(years[i], x - 10, y + h / 2);
  }
}
