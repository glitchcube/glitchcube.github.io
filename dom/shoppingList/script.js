var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		addDoneEventListener(li);
		addDeleteButton(li);
		ul.appendChild(li);	
		input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDoneEventListener(element) {
	element.addEventListener("click", function() {
		element.classList.toggle("done");
	})
};

function addDeleteButton(element) {
	var deleteButton = document.createElement("BUTTON");
	deleteButton.addEventListener("click", function(btn) {
		this.parentNode.parentNode.removeChild(element);
	});

	var deleteButtonText = document.createTextNode("Delete");
	deleteButton.appendChild(deleteButtonText);
	element.appendChild(deleteButton);
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liList.forEach(addDoneEventListener);
liList.forEach(addDeleteButton);