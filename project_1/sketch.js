function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  
  
  //move the entire petal to center
  push()
  translate(70,-10);
  
  //left half of petal
  push()
  stroke("silver");
  strokeWeight(3);
  fill('turquoise');
  translate(200,200);
  rotate(120)
  translate(-1,-10)
  arc(0,0,140,70,0,90,OPEN);
  pop()
  
  //right half of petal
  push()
  stroke("silver");
  strokeWeight(3);
  fill('turquoise');
  translate(200,200);
  rotate(248)
  translate(20,-50);
  arc(0,0,140,70,90,180,OPEN);
  pop()
  pop()
  
  //looks more like gemstone
  push()
  fill("rgb(190,248,242)")
  noStroke()
  translate(200,200)
  translate(50,25)
  ellipse(0,0,10,20)
  pop()
  

  //move back and post
  translate(50,0)
  
  //earring post 2
  stroke("silver")
  strokeWeight(3)
  line(100,220,80,220)
  
  //earring back
  push()
  noStroke()
  fill("silver");
  ellipse(100,220,20,30)
  
  fill("grey")
  ellipse(100,220,8,10)
  pop()
  
  //earring post 1
  line(100,220,180,220);
  

  

  

 
  
  
}