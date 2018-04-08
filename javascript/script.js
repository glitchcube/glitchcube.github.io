function sayHello() {
	console.log("Hello");
}

sayHello();

var sayBye = function() {
	console.log("Bye");
}

sayBye();

function sing(song) {
	console.log(song);
}

sing("Laaa deee daaa");
sing("hellllloooooo");
sing("backstreet back alright");


// Exercise
var age = prompt("What is your age?");
function checkDriverAge(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge(age);

/*var checkDriverAge2 = function() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}*/