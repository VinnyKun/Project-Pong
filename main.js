//global variables 

//player paddle object
var playerPaddle = {
	
	width: 20,	

	height:80,
	
}


//AI paddle object

var aiPaddle = {
	
	width: 20,

	height:100,
	
}

//AI paddle object

// var ball = {

// 	xCoordinate:;

// 	yCoordinate:;
	
// 	speedY: ,

// 	speedX:,
	
// }


var canvas;
var canvasContext;

window.onload = function () {

	//select the canvas element
	canvas = document.querySelector('canvas')

	//this gives 2D rendering context for the canvas
	canvasContext = canvas.getContext('2d')

	//the canvas/'field' is coloured green
	canvasContext.fillStyle = ('green');

	paddles();
	ball();

}

var paddles = function () {

	//x,y,width,height: cover entire canvas, fillRect draws a rectangle
	canvasContext.fillRect(0, 0, canvas.width, canvas.height) 

	//the player paddle rectangle is coloured white
	canvasContext.fillStyle = ('black');

	//x,y,width,height: position halfway down y, fillRect draws a rectangle
	canvasContext.fillRect(0, canvas.height/2, playerPaddle.width, playerPaddle.height) 

	//the AI paddle rectangle is coloured:
	canvasContext.fillStyle = ('yellow');

	//x,y,width,height: cover entire canvas, fillRect draws a rectangle
	canvasContext.fillRect(580, canvas.height/2, aiPaddle.width, aiPaddle.height)

	console.log('paddles up!') 

}

var ball = function () {

	//the ball is coloured:
	canvasContext.fillStyle = ('white')

	//x,y,width,height: ball position and size
	canvasContext.fillRect(300, 150, 10, 10)

	console.log('ball in play') 


}


