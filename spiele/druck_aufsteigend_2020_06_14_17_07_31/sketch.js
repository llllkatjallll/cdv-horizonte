//based on the original example on objects 
//https://p5js.org/examples/objects-objects.html


// responsive 


var w = window.innerWidth;
var h = window.innerHeight;  


var forms=[];
var x=0;
var y=0;
var tileNr=4;
var tileSz=0;
var counterFor=0;
var color_bgd = [10,35, 50, 75,100, 150, 190, 220,255];
var this_color=0;
var color_step=25;

function setup() {
  canvas=createCanvas(w, h);
  background(255);
  text("Click here",w/2-30,w/2);
  var ix=0;
  var iy=0;
 
  
    tileNr=int(w/70);

   tileSz=w/tileNr;
  for (var i=0;i<tileNr;i++){
      for (var j=0;j<tileNr;j++){
       x= tileSz*j;
       y= tileSz*i;
    forms[counterFor] = new Forms(x,y);
    counterFor=counterFor+1;     
    }
  }
    for(var i=0;i<forms.length;i++){
  //forms[i].display();
  }
  

}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
  tileNr=int(w/75);
  tileSz=w/tileNr;
  counterFor=0;  
   for (var i=0;i<tileNr;i++){
      for (var j=0;j<tileNr;j++){
       x= tileSz*j;
       y= tileSz*i;
    forms[counterFor].x = x;
    forms[counterFor].y = y;
    counterFor=counterFor+1;     
    }
  }
  

}


function draw() {
  background(250);
  for(var i=0;i<forms.length;i++){
  //forms[i].move();
  forms[i].display();
  }
  
  for(var j=0;j<tileSz*tileNr+tileSz;j=j+tileSz){
   for(var k=0;k<tileSz*tileNr+tileSz;k=k+tileSz){
    stroke(200);
    line(j,0,j,w);
    line(0,k,w,k);
  }
  }
        //Stempelkissen
  fill(0);
  noStroke();
  rect(w/4, tileSz*tileNr+60, w/2,50);
  text("Stempelkissen",w/4, tileSz*tileNr+50);
  
  if(this_color>225){
    text("Klicke auf das Stempelkissen, um Farbe aufzunehmen",w/4, tileSz*tileNr+60+70,160);
    
  }

}

function mouseClicked(){
  for (var i=0;i<forms.length;i++){ 
   var antwort= pointRect(mouseX,  mouseY, forms[i].x, forms[i].y, tileSz,  tileSz);
   if(antwort){
     if(forms[i].color>this_color){
     //Check color
     if(this_color+color_step<255){
       this_color=this_color+color_step;
     } else {
     this_color=255;
     }
     
     noStroke();
     
     forms[i].color=this_color;
    
     
    } 
   }
  }
  
  if(pointRect(mouseX,  mouseY, w/4, tileSz*tileNr+60, w/2,  50)){
     this_color=0;
     }
}

function pointRect(px,  py,  rx,  ry,  rw,  rh) {

  // is the point inside the rectangle's bounds?
  if (px >= rx &&        // right of the left edge AND
      px <= rx + rw &&   // left of the right edge AND
      py >= ry &&        // below the top AND
      py <= ry + rh) {   // above the bottom
        return true;
  }
  return false;
}




// Forms class
class Forms {
  constructor(tx,ty){
    this.x = tx;
    this.y = ty;
    this.color=255;
  }


  move() {

  }

 display() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, tileSz, tileSz);
    fill(255);
    ellipse(this.x+tileSz/2, this.y+tileSz/2, tileSz-10, tileSz-10);
  }
}