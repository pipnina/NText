console.log("EDITOR IS ALIVE!");

//WHERE THE EDITOR'S RAW TEXT SAUCE IS KEPT
TextStore = function()
{
	this.store;
	
	this.addchars = function(input)
	{
		this.store += input;
		console.log(this.store);
	}
};

//HANDLES AND MANAGES ACTIVE KEYS (I.E. KNOWS WHAT KEYS ARE CURRENTLY HELD DOWN)
InputHandler = function()
{
	this.activeKeys = [];
	
	this.newkeypress = function(newkey)
	{
		this.activeKeys.push(newkey);
		console.log(this.activeKeys);
	}
	
	this.newkeyrelease = function(newkey)
	{
		
	}
}


TextBox	= document.getElementById("TextField");
Store	= new TextStore();
Input	= new InputHandler();

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

TextBox.addEventListener("keydown", Input.newkeypress(newkey));
