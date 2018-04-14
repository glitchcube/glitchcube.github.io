var database = [
	{
		username: "frank",
		password: "myPass"
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


function signIn(user, pass) {
	if(user === database[0].username && 
		pass === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
};


signIn(usernamePrompt, passwordPrompt);