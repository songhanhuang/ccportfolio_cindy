let pick = [1,16,2,6,18,7,2,23,1,4,11,1,13,12,2,6,2,1,13,12,4];;
let counter = 0;
let interval = 40;
let maxPickValue;
let maxNoValue;

function setup() {
  createCanvas(600, 600);
  maxPickValue = max(pick);
  noStroke();
}

function draw() {
  background(255);
  let x = 50;
  let y = 50;
  let radius = mouseX;
 
    fill('rgb(193,181,183)');
    textSize(30);
    textAlign(CENTER, CENTER);
    text(pick[counter],width/2,height/2);
    
    if (frameCount % interval == 0) {
    counter++; 
    if (counter == pick.length) {
      counter = 0;
    }
  }
    
  
  for (let i = 0; i < pick.length; i++) {
    let angle = map(i, 0, pick.length, 0, TWO_PI); 
    let x =  width/2+ cos(angle + frameCount * 0.01)* radius ;
    let y =  height/2+ sin(angle + frameCount * 0.01) * radius;
    let size1 = map(pick[i], 0, maxPickValue, 10, 50);  
    if(i%3==1){
    fill('rgb(182,128,194)');
    }
    else if (i%3==2){
    fill('rgb(253,184,205)');
    }
    else if (i%3==0){
    fill('rgb(188,184,253)')
    }
    ellipse(x, y, size1, size1); 
  } 
}
