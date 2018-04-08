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
//var age = prompt("What is your age?");
function checkDriverAge(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//checkDriverAge(age);

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


// Datastructure
var list = ["tiger", "cat", "bear", "bird"];

console.log(list[1]);

//take first element away from list
list.shift();

//take last element in list
list.pop();

//Add to end of list
list.push("elephant");

//Sort asc
list.sort();


//Exercise
// using this array,
 var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array = array.sort();
array = array.reverse();

/*
you should have at the end:
["Kiwi", "Oranges", "Blueberries"]
*/

// using this array,
 var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];