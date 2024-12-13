let x
let y
let z

function setup() {
  createCanvas(400, 400);
  background(255);

}

function mousePressed(){
  x = random(0,255)
  y = random(0,255)
  z = random(0,255)

}

function draw(){
  
  background(x,y,z)
  
  noStroke();
  // Face
  fill('#804F21');  // Brown
  ellipse(mouseX, mouseY,240,320);
  
  fill('#C79664');  // Lighter brown
  ellipse(mouseX, mouseY+90, 120, 140); // Snout area
  
  // Ears
  fill('#804F21');  // Brown color for the ears
  ellipse(mouseX-140, mouseY-20, 100, 260); // Left ear
  ellipse(mouseX+140, mouseY-20, 100, 260); // Right ear
  
  //eyes
  fill('white')
  ellipse(mouseX-60, mouseY-20, mouseX-140)
  ellipse(mouseX+60, mouseY-20, mouseX-140)
  //fill("#003434")
  fill(x,y,z)
  ellipse(mouseX-60, mouseY-20, mouseX-160)
  ellipse(mouseX+60, mouseY-20, mouseX-160)
  
  //nose
  fill('#804F21')
  rect(mouseX-20, mouseY-60,40,120)
  fill('#40210F')
  ellipse(mouseX, mouseY+60, 40, 20)
  
  //mouth
  fill('#EC7DAD')
  ellipse(mouseX, mouseY+100,80,20)
  

}
