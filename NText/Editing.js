console.log("EDITOR IS ALIVE!");

//WHERE THE EDITOR'S RAW TEXT SAUCE IS KEPT
TextStore = function()
{
	_this = this;
	_this.store = "JavaScript Was Made By A Horse";
	
	_this.addchars = function(input)
	{
		_this.store += input;
		console.log(_this.store);
	}
	
	console.log(_this.store);
};

//HANDLES AND MANAGES ACTIVE KEYS (I.E. KNOWS WHAT KEYS ARE CURRENTLY HELD DOWN)
InputHandler = function()
{
	_this = this;
	_this.activeKeys = [];
	
	_this.newkeypress = function(newkey)
	{
		console.log(newkey);
		
		if(_this.activeKeys.forEach(function(key, index, array)
		{
			if(key.key == newkey.key)
			{
				console.log(newkey.key + " is already in the active keys list");
				return "no";
			}
		}) != "no")
		{
			_this.activeKeys.push(newkey);
		}
		console.log(_this.activeKeys);
	}

	_this.newkeyrelease = function(newkey)
	{
		_this.activeKeys.forEach(function(key, index, array)
		{
			if(key.key == newkey.key)
			{
				array.splice(index, 1);
				console.log(array);
				return "Removed "+key.key;
			}
		});
	}
};

//End of definitions, now they're made to work
TextBox	= document.getElementById("TextField");
Store	= new TextStore();
Input	= new InputHandler();

Store.addchars("NNNNNNNNNNN");
Store.addchars("OOOOOOOOOOO");

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

TextBox.addEventListener("keydown", Input.newkeypress);
TextBox.addEventListener("keyup", Input.newkeyrelease);
