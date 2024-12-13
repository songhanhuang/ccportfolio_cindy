let circles = [];
let gameActive = true;
let score = 0;
let img_ch, img_tree, img_ladder, img_leaves, img_fruit, img_star, img_cloud;
let fruits = [];
let clickedCount = 0;
let nextButton;
let clouds = [];
let stars = [];
let characterY;
let upwardHeight = 30;
let gravity = 0.5;
let gameOver = false;
let gameWon = false;
let scoreScene3 = 0;
let currentScene = "scene1";

function preload() {
  img_ch = loadImage('character.png');
  img_tree = loadImage('tree.png');
  img_ladder = loadImage('ladder.png');
  img_leaves = loadImage('leaves.png');
  img_fruit = loadImage('fruit.png');
  img_star = loadImage('star.png');
  img_cloud = loadImage('cloud.png');
}

function setup() {
  createCanvas(600, 400);
  textFont('Courier New');
  
  // Scene 2: Initialize fruits
  for (let i = 0; i < 10; i++) {
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    fruits.push(new Fruit(x, y));
  }
  createNextButton();
  
  // Scene 3: Initialize game elements
  resetGame();
}

function draw() {
  if (currentScene == "scene1") {
    drawScene1();
  } else if (currentScene == "scene2") {
    drawScene2();
  } else if (currentScene == "scene3") {
    drawScene3();
  }
}

function drawScene1() {
  background(0);
  imageMode(CENTER);
  image(img_tree, width / 2, height / 2, 600, 400);

  // Growing circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    circle.update();
    circle.render();
    circle.disappear();
    if (!circle.visible) {
      circles.splice(i, 1);
      score++;
    }
  }

  if (frameCount % 80 == 0 && gameActive) {
    circles.push(new GrowingCircle());
  }

  // Character
  imageMode(CENTER);
  image(img_ch, mouseX, height - 50, 80, 100);

  // Score display
  fill(255);
  textSize(24);
  text("Score: " + score, 10, 30);

  // Ladder appears at score >= 5
  if (score >= 5) {
    imageMode(CENTER);
    image(img_ladder, width - 50, height - 20, 100, 200);
    
    // Check ladder click
    if (mouseIsPressed &&
        mouseX > width - 100 && mouseX < width &&
        mouseY > height - 120 && mouseY < height) {
      console.log("Switching to Scene 2");
      currentScene = "scene2";
    }
  }
}


function drawScene2(){
  
  background(0);
  imageMode(CENTER)
  image(img_leaves,width/2,height/2,600,400)
   
  for (let fruit of fruits) {
    fruit.render();
  }
  
  //button to next scene
  if (clickedCount === fruits.length) {
    nextButton.show();
  } else {
    nextButton.hide();
  }
}

function createNextButton() {
  nextButton = createButton('Next');
  nextButton.position(30, height-50);
  nextButton.mousePressed(changeScene);
  nextButton.hide();
}

function changeScene(){
  currentScene == "scene3"
}

function drawScene3() {
  background(0);

  if (gameOver) {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text('Game Over', width / 2, height / 2);
    textSize(16);
    text('Click to Restart', width / 2, height / 2 + 40);
    return;
  }

  if (gameWon) {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text('Win!', width / 2, height / 2);
    return;
  }

  // Clouds and Stars
  for (let cloud of clouds) {
    cloud.render();
    cloud.move();
  }

  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    star.render();
    star.move();

    if (checkCollision(width / 2, characterY, star.x, star.y, 20, star.size / 2)) {
      stars.splice(i, 1);
      score++;

      if (score >= 5) {
        gameWon = true;
      }
    }
  }

  // Character movement
  characterY += gravity;
  characterY = constrain(characterY, 0, height - 50);
  imageMode(CENTER);
  image(img_ch, width / 2, characterY, 40, 50);

  // Score display
  textSize(16);
  fill(255);
  textAlign(LEFT, TOP);
  text('Score: ' + score, 10, 10);

  for (let cloud of clouds) {
    if (checkCollision(width / 2, characterY, cloud.x, cloud.y, -10, cloud.size / 2)) {
      gameOver = true;
    }
  }
}

function mousePressed() {
  if (currentScene == "scene1") {
    for (let circle of circles) {
      circle.disappear();
    }
  } else if (currentScene == "scene2") {
    for (let fruit of fruits) {
      fruit.checkClick(mouseX, mouseY);
    }
  } else if (currentScene == "scene3") {
    if (gameOver || gameWon) {
      resetGame();
    } else {
      characterY -= upwardHeight;
    }
  }
}

function createNextButton() {
  nextButton = createButton('Next');
  nextButton.position(30, height - 50);
  nextButton.mousePressed(changeScene);
  nextButton.hide();
}

function changeScene() {
  currentScene = "scene3";
  nextButton.hide()
}

function resetGame() {
  characterY = height / 2;
  clouds = [];
  stars = [];
  gameOver = false;
  gameWon = false;
  score = 0;

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(50, 120);
    clouds.push(new Cloud(x, y, size));
  }

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    stars.push(new Star(x, y));
  }
}

function checkCollision(x1, y1, x2, y2, r1, r2) {
  let d = dist(x1, y1, x2, y2);
  return d < r1 + r2;
}


