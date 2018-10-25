console.log("EDITOR IS ALIVE!");

var TextBox = document.getElementById("TextField");

console.log(TextBox.clientHeight);


TextBox.addEventListener("click", function(event)
{
	TextBox.focus();
	console.log("FOCUS GIVEN");
	console.log(document.activeElement);
});

TextBox.addEventListener("focus", function(event)
{
	console.log("FOCUS GAINED");
});
