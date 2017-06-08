
class Dot {
//Baut
constructor (){
  this.color = '#00afba' ;
  this.position= createVector(random(0,width),random(0, height));
  this.dots_two = [];
}
  //Zeichnet
  draw() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, 20, 20);
    //Dots umfärben
    if(dist(this.position.x, this.position.y, mouseX, mouseY) < 70){
      this.color = '#f67a2f';
      //Dots zwei aufrufen
      if(this.dots_two.length > 0) {
        for ( var i = 0; i < this.dots_two.length; i++){
          this.dots_two[i].draw();
        }
      } else {
        // Array dots_two füllen bzw erstellt
        for ( var i = 0; i < 5; i++){
          this.dots_two[i] = new Dot_two(this.position.x, this.position.y);
        }
      }
    }
    else {
      //zurück färben
      this.color = '#00afba';
      // Array leeren
      this.dots_two = [];
    }
  }
}
