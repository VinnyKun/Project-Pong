//global variables 
var canvas;
var canvasContext;

//player keeper object
var playerKeeper = {

	x:0,

	y:0,
	
	width: 10,	

	height:80,
	
}


//AI keeper object

var aiKeeper = {

	x: 590,

	y: 200,
	
	width: 10,

	height:100, 
	
}

//ball

 var ball = {

 	x: 300,

	y: 200,
	
 	speedXAxis: 10,

 	speedYAxis: 5,
	
 }



window.onload = function () {

	//select the canvas element
	canvas = document.querySelector('canvas')

	//this gives 2D rendering context for the canvas
	canvasContext = canvas.getContext('2d')

	

	
	setInterval(function () {
    aiMovement();	
    ballMovement();
    gameParts();
	}, 33);
	
	
	
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

var aiMovement = function () {

	var aiCentre = (aiKeeper.y + aiKeeper.height)/2
	var aiThird = (aiKeeper.y + aiKeeper.height)/3
	var aiThird = (aiKeeper.y + aiKeeper.height)/3
	var aiQuarter = (aiKeeper.y + aiKeeper.height)/5

	//to make the ai's centre be point of reference relative to the ball
	if (aiCentre + aiThird < ball.y) {
		aiKeeper.y += 7;
		
		//just to track the keeper
		console.log('imHere' + aiKeeper.y);
	
	} else if (aiCentre + aiThird > ball.y) {
		aiKeeper.y -= 7;
	}

};

var ballMovement = function() {
	
	
	//movement
	ball.x += ball.speedXAxis;
	console.log(ball.x)
	if (ball.x == canvas.width) {
	ball.speedXAxis = -ball.speedXAxis
	}

	// ball reset upon conceding
	if (ball.x < 0) {

		if (ball.y > playerKeeper.y && ball.y < (playerKeeper.y + playerKeeper.height)) {

			//collision resulting opposite x axis
			ball.speedXAxis = -ball.speedXAxis
		}

		else {
		// ball reset upon conceding	
		ball.speedXAxis = -ball.speedXAxis
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		console.log('Goal!')
		}	
	}

	// bounces when ball hit the top of the canvas
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
	canvasContext.fillStyle = ('black');

	//x,y,width,height: cover entire canvas, fillRect draws a rectangle
	canvasContext.fillRect(aiKeeper.x, aiKeeper.y, aiKeeper.width, aiKeeper.height)

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






