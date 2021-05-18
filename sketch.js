//Creating time varia
 var hr , hrAngle;
 var mn , mnAngle;
 var sc , scAngle;
 

function preload(){
bg = loadImage("Backround.jpg");
clockIMG = loadImage("unnamed.png");
}


function setup() {
  createCanvas(800,400);

}

function draw() {
  background(900);  

   angleMode(DEGREES);

  hr = hour();
 mn = minute();
 sc = second();

    translate(200,200);
    rotate(-90);
    
     scAngle = map(sc, 0,60,0, 360);

     
     mnAngle = map(mn, 0,60,0, 360);

     
     hrAngle = map(hr%12 ,0,12,0,360);



    

    push();
    rotate(scAngle);
    ellipse(500,600,20,20);
    stroke(255,0,0);
   strokeWeight(7);
    line(0,0,100,30);
     pop();

     
     stroke(25,90,260);
    strokeWeight(7);
     line(0,0,100,0);
   arc(0,0,300,300,0 , scAngle);
     stroke(5,9,26);
     strokeWeight(7);
      line(0,5,90,100);
      arc(0,0,280,280,0 , mnAngle);
      stroke(5,9,26);
     strokeWeight(7);
      line(0,5,90,100);
      arc(0,0,230,230,0 , hrAngle);
   

      
  drawSprites();
}