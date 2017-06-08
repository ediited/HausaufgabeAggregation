var setup = function(){

  createCanvas(windowWidth,windowHeight);

  allDots = [];

  for(var i = 0; i < 300; i++){
      allDots[i] = new Dot();
  }
};

var draw = function(){

  background('#f1e1cb');

  for(var i = 0; i < allDots.length; i++){
      allDots[i].draw();
  }
};
