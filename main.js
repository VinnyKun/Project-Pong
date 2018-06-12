//global variables 

//player paddle object
var playerKeeper = {
	
	width: 20,	

	height:80,
	
}


//AI paddle object

var aiKeeper = {
	
	width: 20,

	height:100,
	
}

//AI paddle object

 var ball = {

 	x: 100,

	y: 150,
	
 	speedXAxis: 5 ,

 	speedYAxis: 5,
	
 }


var canvas;
var canvasContext;

window.onload = function () {

	//select the canvas element
	canvas = document.querySelector('canvas')

	//this gives 2D rendering context for the canvas
	canvasContext = canvas.getContext('2d')

	//frames per second(fps
	var fps = 30;
	setInterval(function () {
    gameMovement();
    gameParts();
	}, 1000/fps);



}

var gameMovement = function() {
	//movement
	ball.x += ball.speedXAxis;
	console.log(ball.x)
	if (ball.x == canvas.width || ball.x == 0) {
	ball.speedXAxis = -ball.speedXAxis
	}
}



var gameParts = function () {

	//the canvas/'field' is coloured green
	canvasContext.fillStyle = ('green');

	//x,y,width,height: cover entire canvas, fillRect draws a rectangle
	canvasContext.fillRect(0, 0, canvas.width, canvas.height) 

	console.log('field is ready!')




	//the player keeper rectangle is coloured white
	canvasContext.fillStyle = ('black');

	//x,y,width,height: position halfway down y, fillRect draws a rectangle
	canvasContext.fillRect(0, canvas.height/2, playerKeeper.width, playerKeeper.height) 
	
	//the AI keeper rectangle is coloured:
	canvasContext.fillStyle = ('yellow');

	//x,y,width,height: cover entire canvas, fillRect draws a rectangle
	canvasContext.fillRect(canvas.width - aiKeeper.width, canvas.height/2, aiKeeper.width, aiKeeper.height)

	//to ensure function is working
	console.log('Keepers Ready!') 




	
	//the ball is coloured:
	canvasContext.fillStyle = ('black')

	//no arcfill so this helps fill colour
	canvasContext.beginPath();
	
	//(x,y,radius,angle, radians: ball position and size.
	// ball center coordinates accessed from its object
	canvasContext.arc(ball.x, ball.y, 10, 0, Math.PI * 2, true)

	////no arcfill so this helps fill colour
	canvasContext.fill();

	// to ensure that function is working
	console.log('ball in play') 

}




