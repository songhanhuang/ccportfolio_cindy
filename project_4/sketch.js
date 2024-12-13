function setup() {
  createCanvas(400,600);
  colorMode(RGB);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw(){
  background(220);
  
  //body
  push()
  translate(0,70)
  drawBody(150,150);
  drawRotatedCurves(168, 274, 5);

  function drawBody(a, b) {
  let x2 = 133;
  let y2 = 243;

  beginShape();
  vertex(a, b);

  let control1X = 140;
  let control1Y = 200;
  let control2X = 140;
  let control2Y = 200;
  bezierVertex(control1X, control1Y, control2X, control2Y, x2, y2);
  endShape();

  beginShape();
  vertex(x2, y2);

  let control3X = 110;
  let control3Y = 260;
  let control4X = 100;
  let control4Y = 260;
  bezierVertex(control3X, control3Y, control4X, control4Y, 94, 300);

  vertex(94, 300);
  vertex(240, 300);

  vertex(240, 300);
  let control5X = 240;
  let control5Y = 260;
  let control6X = 220;
  let control6Y = 250;
  bezierVertex(control5X, control5Y, control6X, control6Y, 200, y2);

  vertex(200, y2);
  let control7X = 200;
  let control7Y = 260;
  let control8X = 200;
  let control8Y = 260;
  bezierVertex(control7X, control1Y, control8X, control1Y, 200, 150);

  vertex(200, 150);
  vertex(150, 150);

  endShape();

  beginShape();
  fill("black");
  vertex(200, 213);
  bezierVertex(210, 195, 220, 175, 233, 210);
  vertex(233, 210);
  bezierVertex(247, 199, 250, 205, 266, 206);
  vertex(266, 206);
  bezierVertex(278, 180, 300, 180, 300, 250);
  vertex(300, 250);
  bezierVertex(300, 275, 243, 288, 225, 288);

  vertex(225, 288);
  bezierVertex(204, 269, 195, 288, 200, 213);

  endShape();

  fill(255);

  let Eyesize = Math.abs(sin(millis() / 100)) * 10 + 5;

  rect(214, 218, 15, 5, 5);
  rect(264, 218, 15, 5, 5);
  ellipse(224, 238, 20, Eyesize);
  ellipse(270, 238, 20, Eyesize);

  ellipse(168, 274, 20, 15);

  triangle(235, 259, 256, 262, 245, 274);
}

function drawRotatedCurves(centerX, centerY, numCurves) {
  stroke("black");
  strokeWeight(2);
  noFill();

  for (let i = 0; i < numCurves; i++) {
    let angle = (0 / numCurves) * i;
    let offsetX = cos(angle) * 1;
    let offsetY = sin(angle) * 1;

    let control1X = centerX + offsetX + cos(angle + radians(72)) * 6;
    let control1Y = centerY + offsetY + sin(angle + radians(72)) * 6;
    let control2X = centerX + offsetX + cos(angle) * 6;
    let control2Y = centerY + offsetY + sin(angle) * 6;
    let endX = centerX + offsetX + 8 * cos(angle);
    let endY = centerY + offsetY + 7 * sin(angle);
    beginShape();
    vertex(centerX + offsetX, centerY + offsetY);
    bezierVertex(control1X, control1Y, control2X, control2Y, endX, endY);
    endShape();
  }
  pop()
}
  
  //head part
  push()
  translate(0,-70)
  //blue Hair above shoulders
  fill(0, 102, 204);
  noStroke();
  rect(200,260,300,100);
  //face
  drawFace(200,200);
  function drawFace(x,y){
  // face
  fill(255, 224, 189); 
  ellipse(x,y, 300, 240);
  //mouth
  stroke('black')
  line(x-20,y+90,220,270)
  //bang
  fill(0,102,204);
  noStroke()
  arc(x,y,300,240,220,320,CHORD)
  fill(255, 224, 189);
  triangle(170,120,230,120,200,90)
  }
  //eyes
  drawEye(120,185); //left
  drawEye(267,185); //right
  function drawEye(x,y){
  fill(255);
  circle(x,y,120);
  fill(99,51,25);
  circle(x+12,y,100);
  fill('black')
  circle(x+17,y,80);
  fill(255);
  circle(x+20,y,30);
  }
  pop()
  
  
  
  //leg
  push()
  translate(0,60)
  legs()
  function legs(){
   let myColour1 = color(random(255), random(255), random(255));
  frameRate(5)
  fill(myColour1)
  //pelvis
  push()
  translate(180,325)
  rotate(-40)
  ellipse(0,0,50,14)
  pop()
  circle(160,335,20)
  push()
  translate(125,370)
  rotate(40)
  ellipse(0,0,70,15)
  pop()
  
  //left thigh
  push()
  translate(225,325)
  rotate(40)
  ellipse(0,0,50,14)
  pop()
  circle(245,335,20)
  
  //right thigh
  push()
  translate(280,370)
  rotate(-40)
  ellipse(0,0,70,15)
  pop()
  
  //left knee
  circle(100, 405,15)
  
  //right knee
  circle(305, 405,15)
  
  // left leg
  push()
  translate(130, 430)
  rotate(120)
  ellipse(0,0,60,15)
  pop()
  
  //right leg
  push()
  translate(275, 430)
  rotate(-120)
  ellipse(0,0,60,15)
  pop()
}
  pop()
  
  //feet
  push()
  fill('black')
  stroke(34, 139, 34);
  strokeWeight(10);
  circle(100,550,45)
  circle(300,550,45)
  pop()
  
  
}