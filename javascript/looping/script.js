var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

/*for (var i=0; i < todos.length; i++) {
	todos[i] += "!";
	console.log(todos[i]);
};*/

for (var i=0; i < todos.length; i++) {
	console.log(i);
};

/*todos.forEach(function(todo, i) {
		console.log(todo, i);
})*/

function logTodos(todo, i) {
		console.log(todo, i);
	};

todos.forEach(logTodos);


/*var counterOne = 0;
while (counterOne < 10) {
	console.log(counterOne);
	counterOne++;
};*/

/*var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--
} while (counterTwo > 0);*/

