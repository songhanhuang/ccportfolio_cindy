class GrowingCircle {
  constructor() {
    this.x = random(200, 400);
    this.y = 100;
    this.size = 5;
    this.growing = true;
    this.speed = random(0.5, 5.5);
    this.visible = true;
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    if (this.growing) {
      this.size += 0.5;
      if (this.size >= 30) {
        this.growing = false;
      }
    } else {
      this.y += this.speed;
    }
  }

  render() {
    if (this.visible) {
      fill(this.color);
      noStroke();
      ellipse(this.x, this.y, this.size);
    }
  }

  disappear() {
    if (mouseIsPressed && dist(mouseX, mouseY, this.x, this.y) < this.size / 2) {
      this.visible = false;
    }
  }
}

class Fruit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.state = "fruit"; 
    this.showStar = random() < 0.6; //in this step, I want the stars to appear randomly after clickingand and Chatgpt told me how to set the randomness
    
  }
  
  render() {
    if (this.state == "fruit") {
      image(img_fruit, this.x, this.y, this.size, this.size);
    } else if (this.state == "star") {
      image(img_star, this.x, this.y, this.size, this.size);
    }
  }
  
  checkClick(px, py) {
    let d = dist(px, py, this.x + this.size / 2, this.y + this.size / 2);
    if (d < this.size / 2 && this.state == "fruit") {
      if (this.showStar) {
        this.state = "star";
      } else {
        this.state = "blank";
      }
      clickedCount++;
    }
  }
}

class Cloud {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.s = 2;
  }

  render() {
    imageMode(CENTER);
    image(img_cloud, this.x, this.y, this.size, this.size * 0.6);
  }

  move() {
    this.x -= this.s;
    if (this.x < -this.size) {
      this.x = width + random(100, 500);
      this.y = random(height);
    }
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.s = 2;
  }

  render() {
    imageMode(CENTER);
    image(img_star, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x -= this.s;
    if (this.x < -this.size) {
      this.x = width + random(100, 500);
      this.y = random(height);
    }
  }
}