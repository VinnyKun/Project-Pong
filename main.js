//global variables 
var canvas;
var canvasContext;

//player keeper object
var playerKeeper = {

	x:0,

	y:0,
	
	width: 10,	

	height:80,

	score: 0,
	
}


//AI keeper object

var aiKeeper = {

	x: 590,

	y: 200,
	
	width: 10,

	height:80, 

	score: 0,
	
}

//ball

 var ball = {

 	x: 300,

	y: 200,
	
 	speedXAxis: 8,

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
	}, 25);
	
	
	
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
	var aiQuarter = (aiKeeper.y + aiKeeper.height)/4
	var aiFifth = (aiKeeper.y + aiKeeper.height)/5

	//to make the ai's centre be point of reference relative to the ball
	if (aiCentre + aiQuarter < ball.y) {
		aiKeeper.y += 5;
		
		//just to track the keeper
		console.log('imHere' + aiKeeper.y);
	
	} else if (aiCentre + aiQuarter > ball.y) {
		aiKeeper.y -= 5;
	}

};

var ballMovement = function() {
	
	
	//basic movement in the x axis
	ball.x += ball.speedXAxis;
	console.log(ball.x)


	//ball to ai game occurences
	if (ball.x > canvas.width) {

		//if ball collides within the ai keeper
		if (ball.y >= aiKeeper.y && ball.y <= (aiKeeper.y + aiKeeper.height)) {

			//collision resulting opposite x axis
			ball.speedXAxis = -ball.speedXAxis

			//collision in y axis based on which part of the keeper is hit
			var differenceY = ball.y - (aiKeeper.y + aiKeeper.height/2);
			console.log('difference y:'+ differenceY);
			// ball.speedYAxis = differenceY/3;
		}

	else {
		// if not the player concedes and ball reset in center upon conceding
		ball.speedXAxis = -ball.speedXAxis
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		playerKeeper.score += 1
		var playerScore = document.querySelector('#player')
		playerScore.innerHTML = playerKeeper.score
		console.log("playerKeeperScore:" + playerKeeper.score)

	}	
	
	}

	// ball to player game occurences
	if (ball.x < 0) {

		//if ball collides within the player keeper
		if (ball.y >= playerKeeper.y && ball.y <= (playerKeeper.y + playerKeeper.height)) {

			//collision resulting opposite x axis
			ball.speedXAxis = -ball.speedXAxis

			//collision in y axis based on which part of the keeper is hit
			var differenceY = ball.y - (playerKeeper.y + playerKeeper.height/2);
			//ball.speedYAxis = differenceY/40;
		}

	else {

		// if not the player concedes and ball reset in center upon conceding	
		ball.speedXAxis = -ball.speedXAxis
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		//the ai's score is updated 
		aiKeeper.score += 1
		var aiScore = document.querySelector('#ai')
		aiScore.innerHTML = aiKeeper.score
		console.log("aiKeeperScore:" + aiKeeper.score)
		}	
	}

	// bounces when ball hit the top of the canvas
	ball.y += ball.speedYAxis;
	console.log(ball.y)
	if (ball.y === canvas.height || ball.y === 0) {
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






