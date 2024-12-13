let r = 0;


function setup() {
  createCanvas(600, 600);
  textFont("Courier New");
  //textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  let emotion = map(mouseX, 0, width, 50, 255);
  background(emotion, 100, 150);
  fill("white");
  console.log(emotion);

  textSize(16);
  text("(Mood)", width/2, height-40);
  text("Upset", 50, height-40);
  text("Excited", width-50, height-40);

  let s = second();
  let m = minute();
  let h = hour();

  push();
  translate(width/2, height/2);
  angleMode(DEGREES);
  rotate(r);
  r = r + emotion/100;
  stroke("white");
  strokeWeight(1);
  line(0, 0, 100, 100);
  pop();

  if (mouseIsPressed == true) {
    let timeString = h + ":" + m + ":" + s;
    textSize(48);
    text(timeString, width/2, 100);
  } else {
    text("(Time)", width/2, 50);
  }


}
