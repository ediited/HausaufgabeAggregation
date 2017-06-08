class SmallDot{
  constructor( smallStartX , smallStartY ){
    this.smallCurrentX = smallStartX;
    this.smallCurrentY = smallStartY;
  }

  drawSmallDot(){
    fill(30,30,255);
    ellipse(this.smallCurrentX,this.smallCurrentY,8,8);

  }

}






















/*
class Dot_two {
  //Baut
  constructor (BigDotX, BigDotY){
    this.color = '000000' ;
    //Abhängigkeit von großem Dot
    this.position= createVector(BigDotX + random(-20,20),BigDotY + random(-20, 20));
  }
  // Zeichnet
  draw() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, 8, 8);
    //Dot_two Bewegung
    this.position.x += random(-2, 2);
    this.position.y += random(-2, 2);

  }
}
*/