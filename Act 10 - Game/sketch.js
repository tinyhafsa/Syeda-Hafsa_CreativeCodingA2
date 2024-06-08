//ACT 10 - Game

//REQUIREMENTS: title screen, gameplay with colliding shapes, theme, win and lose conditions, restart functionality
//CHALLENGES: Resource meter, explosion effect with particle system

//ARRAYS
let bullets = [], enemies = [], particles = [];
//GLOBAL VARIABLES
let font;
let score = 0, lives = 5, maxBullets = 30, bulletCount = 0;
//GAME STATE
let gameState = 'title'; // 'title', 'playing', 'win', 'lose'

function preload () {
  font = loadFont("Roboto-Regular.ttf");
}

//FUNCTION - SETUP
function setup() {
  createCanvas(600, windowHeight); //canvas size
  palette = [color("#E88D67"), color("#FF5F00"), color("#005C78")];
  
  textFont(font);
}

//FUNCTION - spawning enemy
function spawnEnemy() {
  //FOR LOOP - creates 5 enemies at a time
  for (let i = 0; i < 5; i++) {
    //enemy object
    let enemy = {
      x: random(100, width - 100), //random x spwn position
      y: random(-800, 0), //random y spawn position
    };
    //adding object to array
    enemies.push(enemy);
  }
}

//FUNCTION - draw - loops
function draw() {
  background("#F3F7EC"); //background color
  
  //IF CONDITION - sets game screen
  if (gameState === 'title') {
    showTitleScreen(); //calls title screen function 
  } else if (gameState === 'playing') {
    playGame(); //calls game screen function
  } else if (gameState === 'win') {
    showWinScreen(); //calls win screen fucntion
  } else if (gameState === 'lose') {
    showLoseScreen(); //calls lose screen function
  }
}

//FUNCTTION - mousepressed
function mousePressed() {
  //IF CONDITION - decides game screen
  if (gameState === 'title') {
    gameState = 'playing';
    resetGame(); //resets score, lives and bullets
    
  } else if (gameState === 'win' || gameState === 'lose') {
    gameState = 'title';
    
  } else if (gameState === 'playing') {
    if (bulletCount < maxBullets) { //allows shooting only if bullet count is below the limit
      //bullet object
      let bullet = {
        x: mouseX, //spawns from mouse
        y: height - 50,
      };
      //adding object to array
      bullets.push(bullet);
      //increase used bullet count by 1
      bulletCount++;
    }
  }
}

//FUNCTION - title screen
function showTitleScreen() {  
  fill(random(palette)); //text fill
  textSize(40); //title size
  textAlign(CENTER); //text align
  text("Shooter Game", width / 2, height / 2 - 80); //title
  
  fill("#005C78"); //text fill
  textSize(17); //description size
  text("Get a score of 15 to win.", width / 2, height / 2 - 20); //text
  text("If you run out of bullets or lives, you will lose.", width / 2, height / 2); //text
  
  noFill();
  rect (width / 2 - 88, height / 2 + 32, 180, 40);
  fill("#006989"); //text fill
  textSize(20); //description size
  text("CLICK TO START", width / 2, height / 2 + 60); //text
}

//FUNCTION - win screen
function showWinScreen() {
  fill("#005C78");
  textSize(60);
  textAlign(CENTER);
  text("You Win!", width / 2, height / 2 - 30);
    
  fill("#FC6736");
  rect(width / 2, height / 2 + 30, 260, 60);
  
  fill("#EFECEC"); //text fill
  textSize(25); //description size
  text("CLICK TO RETURN", width / 2, height / 2 + 40); //text
}

//FUNCTION - lose screen
function showLoseScreen() {
  fill("#005C78");
  textSize(60);
  textAlign(CENTER);
  text("You Lose!", width / 2, height / 2 - 30);
    
  fill("#FC6736");
  rect(width / 2, height / 2 + 30, 260, 60);
  
  fill("#EFECEC"); //text fill
  textSize(25); //description size
  text("CLICK TO RESTART", width / 2, height / 2 + 40); //text
}

//FUNCTION - restart game
function resetGame() {
  //resets everything
  bullets = [];
  enemies = [];
  particles = [];
  score = 0;
  lives = 5;
  bulletCount = 0;
  spawnEnemy();
}

//FUNCTION - play game
function playGame() {
  background ("#0C2D57");
  rectMode(CENTER);
  textAlign(CENTER);

  //PLAYER - bottom of the screen
  fill("#FC6736");
  circle(mouseX, height - 50, 40); //moves according to mouse postion on x axis

  //FOR LOOP - spawning bullets
  for (let bullet of bullets) {
    bullet.y -= 5; //bullets move up
    //draws bullet from player position
    fill("#FFB0B0");
    circle(bullet.x, bullet.y, 20);
  }

  //FOR LOOP - spawning enemies
  for (let enemy of enemies) {
    enemy.y += 2; //enemies move down
    //draw the enemy at random position
    fill("#EFECEC");
    rect(enemy.x, enemy.y, random(35, 40));

    //if enemy reaches the bottom of the screen
    if (enemy.y > height) {
      lives--; //life decreased by 1
      enemies.splice(enemies.indexOf(enemy), 1); //enemy object removed from array
      spawnEnemy(); //respawn a new enemy

      //if there are no lives left - A WAY TO LOSE
      if (lives <= 0) {
        gameState = 'lose'; //game ends
      }
    }

    //COLLISION DETECTION - if the enemy touches the player
    if (dist(enemy.x, enemy.y, mouseX, height - 50) < 20) {
      lives--; //life decreased by 1
      createExplosion(enemy.x, enemy.y); //explosion created 
      enemies.splice(enemies.indexOf(enemy), 1); //enemy object removed from array
      spawnEnemy(); //respawn a new enemy

      //if there are no lives left - A WAY TO LOSE
      if (lives <= 0) {
        gameState = 'lose'; //game ends
      }
    }
  }

  //COLLISION DETECTION
  //FOR LOOP 
  for (let enemy of enemies) { //for objects in array
    for (let bullet of bullets) {
      //checks distance between enemy and bullet
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 15) {
        //if bullet reaches enemy
        createExplosion(enemy.x, enemy.y); //explosion created
        enemies.splice(enemies.indexOf(enemy), 1); //enemy object removed from array
        bullets.splice(bullets.indexOf(bullet), 1); //bullet object removed form array
        //new enemy object
        let newEnemy = {
          x: random(100, width - 100), //random x position
          y: random(-800, 0), //random y position
        };
        //add new enemy object to array
        enemies.push(newEnemy);
        //increase score by one - A WAY TO WIN
        score += 1;

        //check for win condition
        if (score >= 15) {
          gameState = 'win';
        }
      }
    }
  }

  //EXPLOSION EFFECT - particle system
  //FOR LOOP
  for (let p of particles) { //for objects in array
    p.show(); //calls show method (in class)
    p.update(); //calls update method (in class)
  }
  //after loop ends, remove particles if they are completely transparent
  particles = particles.filter((p) => p.trans > 0);

  
  //TEXT - score, life, bullet meters
  fill("#FC6736");
  rect(40, 10, 240, 120);
  
  textAlign(LEFT);
  
  fill("#EFECEC");
  textSize(18);
  text("SCORE = " + score, 20, 20); //score count - A WAY TO WIN
  text("LIVES = " + lives, 20, 40); //life count - A WAY TO LOSE
  text("BULLETS = " + (maxBullets - bulletCount), 20, 60); //bullet count - RESOURCE METER

  //RESOURCE METER
  //if bullets run out
  if (bulletCount >= maxBullets && score < 15) {
    gameState = 'lose'; //game ends
  }
}

//FUNCTION - create explosion (takes x and y parameters)
function createExplosion(x, y) {
  //for loop - creates 50 particles
  for (let i = 0; i < 50; i++) {
    let vel = p5.Vector.random2D(); //creates a unit vector pointing in random direction
    vel.mult(random(1, 10)); //random velocity between 1 and 10
    //new particle at x and y position with random vel - added to array
    particles.push(new Particle(x, y, vel));
  }
}

//CLASS - particle
class Particle {
  
  //METHOD - constructor - called once
  constructor(x, y, vel) {
    this.pos = createVector(x, y); //
    this.vel = vel; //velocity
    this.trans = 255; //initial transpareny
    this.m = random(2, 5); //random value by which particles fade
    //random rgb fill values - red, orange range
    this.r = random(200, 255);
    this.g = random(0, 150);
    this.b = random(0, 50);
  }
  //METHOD - show
  //draws particle on canvas with color and transparency
  show() {
    noStroke();
    fill(this.r, this.g, this.b, this.trans); //random fill, transparency
    ellipse(this.pos.x, this.pos.y, 5); //particle
  }
  //METHOD - update
  //moves particle, slows it down and adds fading effect
  update() {
    this.pos.add(this.vel); //move the particle according to velocity
    this.vel.mult(0.8); //slow the particle by value
    this.trans -= this.m; //gradually decrease transparency to add fading effect
  }
}
