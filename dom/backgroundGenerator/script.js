var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");

randomBtn.addEventListener("click", function() {
	body.style.background = "linear-gradient(to right, " 
	+ generateRandomRGB() 
	+ ", " 
	+ generateRandomRGB() 
	+ ")";
})

function generateRandomRGB() {
	var rgbColor =  "rgb(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")"
	console.log("RGB color: " + rgbColor);
	return rgbColor;
};

var color = random_rgba();

function setGradient() {
	console.log(color2.value)
	body.style.background ="linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);