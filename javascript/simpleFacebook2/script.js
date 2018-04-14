var database = [
	{
		username: "frank",
		password: "myPass"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooooo coooool!"
	}
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === usernamePrompt 
			&& database[i].password === passwordPrompt) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {

	if(isUserValid(user,pass)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
};


signIn(usernamePrompt, passwordPrompt);