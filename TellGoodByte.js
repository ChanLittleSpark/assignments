(function(window) {
	var speakWord = "Good Bye";
	var tellGoodBye = function (name) {
  		console.log(speakWord + " " + name);
	}
	window.tellGoodBye = tellGoodBye;

})(window);
