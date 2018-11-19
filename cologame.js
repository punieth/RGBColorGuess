var numofcolors = 6;
var colors = generateRandomcolor(numofcolors);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickcolor()];
var clickedcolor = document.getElementById("pickedColor");
var header = document.querySelector("h1");
var message = document.querySelector("#message");
var stripe = document.querySelector("#stripe");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

clickedcolor.textContent = pickedColor;

reset.addEventListener("click", function(){
			
			colors= generateRandomcolor(numofcolors);
			pickedColor = colors[pickcolor()];
			clickedcolor.textContent = pickedColor;
			// header.style.backgroundColor = pickedColor;
			for(var i=0; i<squares.length; i++)
			{
	        squares[i].style.backgroundColor = colors[i];
	        }
	        header.style.backgroundColor = "steelblue";
	        stripe.style.backgroundColor = "white";

		});
easy.addEventListener("click", function(){
	hard.classList.remove("selected");

	easy.classList.add("selected");
	numofcolors = 3;
	colors = generateRandomcolor(numofcolors);
	pickedColor = colors[pickcolor()];
	// clickedcolor.textContent = pickedColor;
	for(var i=0; i<3; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	clickedcolor.textContent = pickedColor;

	for(var i=3; i<6; i++){
		squares[i].style.display = "none";
	}

});


hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	
	hard.classList.add("selected");
	colors = generateRandomcolor(numofcolors);
	pickedColor = colors[pickcolor()];
	// clickedcolor.textContent = pickedColor;
	for(var i=0; i<3; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	clickedcolor.textContent = pickedColor;
	
	for(var i=3; i<6; i++){
		squares[i].style.display = "block";
	}


});

for(var i=0; i<squares.length; i++) 
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
	var colorpicked = this.style.backgroundColor;
		console.log(colorpicked);

		if(colorpicked===pickedColor)

		{	console.log(colorpicked);
			message.textContent = "Correct"
			reset.textContent = "Play Again!"

			reset.addEventListener("click", function(){
			reset.textContent = "New Colors!"
			message.textContent = "";


			});

			header.style.backgroundColor = colorpicked;
			stripe.style.backgroundColor = colorpicked;
			
			for(var i=0; i<squares.length; i++)
				{
				squares[i].style.backgroundColor = colorpicked;
			    }
	    }

		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent = "InCorrect - Try Again";

			}
	});
}


function pickcolor(){
	var random = Math.floor(Math.random() * colors.length );
	// alert(random);
	return random;
}

function generateRandomcolor(num){
var colors = [];
	for(var i =0; i<num; i++){
		colors.push(randomcolors());
	}
	return colors;

}

function randomcolors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	//returns rgb(red, green, blue);
	return "rgb("+r+", "+g+", "+b+")";

}

