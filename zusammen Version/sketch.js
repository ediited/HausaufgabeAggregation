

var allDots = [];


function setup(){
	createCanvas(windowWidth,windowHeight);
	background('#f1e1cb');
	for(var i = 0; i < 50 ; i++){
		allDots[i] = new BigDot(random(0,width),random(0,height));
	}
}



function draw(){

	background('#f1e1cb');

	for(var i = 0; i < 50 ; i++){
		allDots[i].drawBigDot();
	}

}


/*
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
*/