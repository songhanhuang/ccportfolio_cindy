function setup() {
  createCanvas(600, 600);
}
  
  
function draw() {
  //console.log(frameCount)
  
  for (i = 0; i < 42; i++) {
   for (j = 0; j < 42; j++) {
      
      if (i % 2 == 0 && j%2==0) {
        stroke("black");
        strokeWeight(3);
        noFill();
        circle(i * 15, j * 15 , 30);
        fill(255);
        circle(i * 15, j * 15, 12);
        
      } else if(i%2==1 && j%2==1){
        stroke("black");
        strokeWeight(3);
        noFill();
        circle(i * 15, j * 15 , 30);
        fill(255);
        circle(i * 15, j * 15, 12);
        if (mouseIsPressed == true && mouseX > pmouseX){
          circle(i * 15, j * 15, 12 + frameCount%20);
        }else if(mouseIsPressed == true && mouseX < pmouseX){
          circle(i * 15, j * 15, 12 - frameCount%20);
        }
        
      }
     
    }
    
   }
      
  
  
  }

