//global variables 

//player keeper object
var playerKeeper = {

	x:0,

	y:0,
	
	width: 20,	

	height:80,
	
}


//AI keeper object

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
	
	
	
	//event listener to control paddle
	canvas.addEventListener('mousemove', function(event){
		
		//variable containing the area of the canvas
		var rect = canvas.getBoundingClientRect();
		
		//variable of the whole body
		var wholeBody = document.documentElement;
		
		// this returns the postion of mouse in the Y-axis
		//regardless of the position of the of canvas relative to body/scroll 
		var mouseYPosition = event.clientY - rect.top - wholeBody.scrollTop;

		//this attaches the mouse's y coordinates to keeper's centre
		playerKeeper.y = mouseYPosition - playerKeeper.height/2

	})



}

var gameMovement = function() {
	//movement
	ball.x += ball.speedXAxis;
	console.log(ball.x)
	if (ball.x == canvas.width || ball.x == 0) {
	ball.speedXAxis = -ball.speedXAxis
	}

	ball.y += ball.speedYAxis;
	console.log(ball.y)
	if (ball.y == canvas.height || ball.y == 0) {
	ball.speedYAxis = -ball.speedYAxis
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
	canvasContext.fillRect(playerKeeper.x, playerKeeper.y, playerKeeper.width, playerKeeper.height) 
	
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






