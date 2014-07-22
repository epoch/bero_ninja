window.animate = function(callback) {

	window.requestAnimFrame = function() {
		return (
			window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback){
				window.setTimeout(callback, 1000 / 60);
			}
		);
	}();
	
	
	var lastAnimFrame = 0;
	var animFrame = function(e){
		e = e || +new Date();
		callback(e-lastAnimFrame); 
		lastAnimFrame = e; 
		window.requestAnimFrame(animFrame); 
	}
	window.requestAnimFrame(animFrame);

};

var toggleSignUp = function(event) {
	event && event.preventDefault && event.preventDefault(); // Short circuit evaluation.
	console.log(this);
  // $('.panel').fadeToggle(function () {
  //   $('#signup-organic').toggle();
  // });
  // $('form')[0].reset();
  // $('#add_priority').show();
  // $('#update_priority').hide();
  // $('#name').focus();
};